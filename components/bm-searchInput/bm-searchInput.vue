<template>
    <view class="search_input_wrapper">
        <view :class="{search_input:!isFocus,search_input_foucs:isFocus}" id="search_input_id" @mouseleave="mouseout">
            <view class="search_bar" @click="focus()">
                <text>
                    <svg t="1567053204806" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2003" width="200" height="200"><path d="M897.2 882.3l-210-221.1c54.5-57.7 85.6-132.5 87.5-212.4 2.1-86-28.8-167.7-88.1-230.1-59.3-62.5-139.4-98.2-225.3-100.4h-8.5c-82.8 0-161.2 31-221.6 88.1-128.7 122.3-134.6 326.8-12.3 455.5 59.3 62.5 139.4 98.2 225.3 100.4h9.1c76.3 0 148.6-26.8 206.7-75.4l210.1 221.2 27.1-25.8zM453.3 719.5h-8.5c-74.3-2-143.5-32.9-194.9-87.1-106-111.5-101.1-288.7 10.7-395 52-49.3 120.3-76.4 192.2-76.4h8c74.3 2 143.5 32.9 194.9 87.1 51.1 53.9 78.2 124.8 76.4 199.7-1.9 74.5-32.8 143.9-86.9 195.2-52.7 49.3-120.8 76.5-191.9 76.5z" p-id="2004" fill="#8a8a8a"></path></svg>
                </text>
				<view class="input_content">
					<input type="text" placeholder="搜索" ref="search" @input="search" v-model="search_content" @confirm="finish_input" auto-focus="false">
				</view>
            </view>
            <view v-if="isFocus && !isEmpty" class="suggestions_wrapper">
                <view class="suggestions" v-for="(list,index) in show_lists" :key="index" @click="selectItem(index)">
                    <view class="suggestion_item">{{list.title}}</view>
                    <view class="suggestion_item">{{list.note}}</view>
                </view>
            </view>
            <view v-if="isFocus && isEmpty && hasHistory" class="history_wrapper">
                <view class="history_suggestion_title">
                    <view>搜索历史</view>
                    <view class="history_clear" @click="clear_history()">
                        <view>
                            <svg t="1567218276841" class="icon clear_icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2103" width="200" height="200"><path d="M829.952 271.36h-126.976v-51.2a76.288 76.288 0 0 0-75.776-76.288h-256a76.288 76.288 0 0 0-75.776 76.8v51.2H168.448a25.6 25.6 0 0 0 0 51.2h661.504a25.6 25.6 0 0 0 0-51.712z m-178.176 0h-307.2v-51.2a26.112 26.112 0 0 1 25.6-25.6h256a24.576 24.576 0 0 1 24.576 25.6zM448.512 677.376V398.336a25.6 25.6 0 0 0-51.2 0v279.04a25.6 25.6 0 0 0 51.2 0zM601.088 677.376V398.336a25.6 25.6 0 0 0-51.2 0v279.04a25.6 25.6 0 0 0 51.2 0z" fill="" p-id="2104"></path><path d="M735.744 346.624a25.6 25.6 0 0 0-25.6 25.6v381.44a102.4 102.4 0 0 1-102.4 102.4H390.656a102.4 102.4 0 0 1-102.4-102.4V372.224a25.6 25.6 0 0 0-51.2 0v381.44a153.6 153.6 0 0 0 153.6 153.6h217.6a153.6 153.6 0 0 0 153.6-153.6V372.224a25.6 25.6 0 0 0-26.112-25.6z" fill="" p-id="2105"></path></svg>
                        </view>
                        <view>清空</view>
                    </view>
                </view>
                <view class="suggestions history_suggestion" v-for="(history_list,index) in history_lists" :key="index" ref="historyList" @click="selectHistory(index)">
                    <view class="suggestion_item">{{history_list}}</view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "search_input",
        data(){
            return{
				isFocus: true,	// 输入框是否聚焦
				isEmpty: true,	// 输入框是否为空
                search_content:"", //用户在输入框输入的内容
                history_lists:[], // 历史记录列表
				show_lists:[] 	// 显示的搜索建议列表
            }
        },
		props: {
			isHistory: {		// 是否需要历史记录
				type: Boolean,
				default: true
			},
			lists_title:{		 // 搜索建议标题
				type: Array,
				default: null
			},
			lists_note:{		// 搜索建议备注
				type: Array,
				default: null
			},
			input_length:{		// 搜索框长度
				type: String,
				default: "200upx"
			},
			lists: {		// 搜索建议列表
				type: Array,
				default: null
			}
		},
        computed:{
			// 是否显示历史记录
          hasHistory(){
			  if(this.isHistory && this.history_lists.length > 0) {
				  return true;
			  } else {
				  return false;
			  }
          }
        },
        mounted(){
			// 动态设置输入框长度
			// console.log("设置的长度",this.input_length);
			let search_input_dom = document.getElementById("search_input_id");
			search_input_dom.style.width = this.input_length;
            //获得历史搜索记录
            let histories = localStorage.getItem('history_lists');
            if ( histories !== "" && histories !== null && histories !== undefined){
                this.history_lists = histories.split(',');
            }
        },
        methods:{
            search(e){		// 用户手动键入搜索框
                //输入框内容判空
                let that = this;
				let input_content = e.detail.value;
				// console.log("e",input_content);
				if (input_content.length > 0){
					this.isEmpty = false;
				} else{
					this.isEmpty = true;
				}
                if (!this.isEmpty){			// 输入框不为空
					 //发送请求,传递用户输入内容，返回筛选结果
					this.$emit('parent_get_lists',input_content);
					console.log("lists",this.lists);
					//限制标题最多十个字，备注最多八个字，超出部分用省略号代替
					this.lists.map((list,index) => {
						let final_title = list.title.length > 10 ? list.title.substr(0,10)+'...': list.title;
						let final_note = list.note.length > 8 ? list.note.substr(0,8)+'...': list.note;
						list.title = final_title;
						list.note = final_note;
					})
					if (this.lists.length > 10) {
						//长度大于10，只取前十条
						for(let i = 0 ; i < 10 ; i++){
							that.show_lists[i] = that.lists[i];
						}  
					} else{
						that.show_lists = that.lists;
					}
					
                }
            },
            finish_input(){
                //完成输入
                let that = this;
                let history = this.search_content;
				// console.log("actual-input",history);
                //将此次搜索放进历史纪录
                if (this.history_lists.length === 0 || this.history_lists.indexOf(history) === -1){
                    that.history_lists.push(history);
                    that.history_lists = that.history_lists.reverse();
                    let history_string = that.history_lists.toString();
                    localStorage.setItem('history_lists',history_string);
                }
				//搜索完成后加载页面
				this.$emit('parent_search',this.search_content);
                this.isFocus = false;
            },
            clear_history(){
              //清空历史记录
              localStorage.removeItem('history_lists');
              this.history_lists = [];
            },
            focus(){
                //聚焦
                this.isFocus = true;
            },
            blur(){
                //失焦
                this.isFocus = false;
            },
            mouseout(){
                this.blur();
            },
            selectItem(index){
				this.isEmpty = false;
                //选择搜索建议进行搜索
                this.search_content = this.lists[index].title;
                this.blur();
                //将此次搜索放入历史记录,并加载页面
                this.finish_input();
            },
            selectHistory(index){
				this.isEmpty = false;
                //将历史记录放入输入框
                this.search_content = this.history_lists[index];
                this.blur();
                //选择历史记录进行搜索
                this.finish_input();
            }
        }
    }
</script>

<style lang="less" scoped>
	.search_input_wrapper{
		font-size: 16px;
		.search_input{
		    background: #f3f3f3;
		    border: 1upx solid #999999;
		    border-radius: 10upx;
		}
		.search_input_foucs{
			background: white;
			border: 1upx solid #31AADC;
			border-radius: 10upx;
		}
		.search_bar{
		     display: flex;
		     flex-direction: row;
		     align-items: center;
		     justify-content: left;
		 }
		.suggestions{
		    width: 80%;
		    margin: 0 auto;
		    border-top: 1upx solid #dddddd;
		    display: flex;
		    flex-direction: row;
		    justify-content: space-between;
		    padding: .6rem 1rem;
		    color: #666666;
			font-size: 1em;
			&:active{
			    color: #007cdc;
			}
		}
		
		.history_wrapper {
			.history_suggestion_title{
				position: relative;
			    font-size: 0.8em;
			    color: #aaaaaa;
			    text-align: center;
			    display: flex;
			    flex-direction: row;
				justify-content: center;
			    margin-bottom: 8upx;
				.history_clear{
					position: absolute;
					right: 4%;
				    font-size: 0.8em;
					display: flex;
					flex-direction: row;
					&:active{
					    color: black;
					}
					.clear_icon{
					    width: 1.5em;
					    height: 1.5em;
					    opacity: 0.5;
						&:active {
							opacity: 1;
						}
					}
				}		
			}
			.history_suggestion{
			    font-size: 1em;
			}
		}
		
		 .search_input input[type="text"]{
		     width: 80%;
		     margin-top: 6upx;
		     margin-bottom: 8upx;
		     margin-left: 3upx;
		     font-size: 18upx;
		     border: 0;
		     outline: none;
		     padding-top: 6upx;
		     padding-bottom: 6upx;
		     background: #f3f3f3;
		     color: #666666;
			 &::placeholder{
			     color: #999999;
			 }
		 }
		
		 .icon{
		     width: 1.4em;
		     height: 1.4em;
		     margin-left: 10upx;
		 }
	}
</style>
