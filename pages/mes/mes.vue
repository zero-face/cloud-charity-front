<template>
	<view class="content">
		<view class="search">
			<view class="search-content">
				<u-search :animation="true" :show-action="false" bg-color="white" placeholder="日照香炉生紫烟" v-model="input"></u-search>
			</view>
		</view>
		<view class="sys-notice" >
			<view >
				<view class="sys-header">
					<view style="margin-top: 7rpx; height: 45rpx; width: 8rpx; background-color: #D5A6A5;"></view>
					<view style="line-height: 55rpx; font-size: 30rpx; font-weight: bolder; margin-left: 20rpx; letter-spacing: 8rpx; ">系统通知</view>
					<view @click="sysShow">
						<image style="height: 60rpx; width: 60rpx;" :src="isUp"></image>
					</view>
				</view>
				<view class="sys-mes" v-if="sShow">
					<scroll-view
					enable-flex="true"
					style="white-space: nowrap; min-height: 100rpx; max-height: 400rpx; height: auto;" 
					scroll-y="true">
							<view class="sys-mes-item" v-for="(item, index) in list" :key = "index">
								● 系统消息：您在云宇宙社区教育捐赠已送达
							</view>
					</scroll-view>
				</view>
			</view>
			
		</view>
		<view class="user-notice">
			<view class="user-header">
				<view style="margin-top: 7rpx; height: 45rpx; width: 8rpx; background-color: #D5A6A5;"></view>
				<view style="line-height: 55rpx; font-size: 30rpx; font-weight: bolder; margin-left: 20rpx; letter-spacing: 8rpx; ">收到的消息</view>
				<view @click="userShow">
					<image style="height: 60rpx; width: 60rpx;" :src="userIsUp"></image>
				</view>
			</view>
			<view class="user-mes" v-if="uShow">
				<scroll-view
				enable-flex="true"
				style="white-space: nowrap; min-height: 100rpx; max-height: 78vh; height: auto;" 
				scroll-y="true">
						<view class="user-mes-item" v-for="(item, index) in list" :key = "index">
							<view class="user-content">
								<view>
									<u-avatar :src="src"></u-avatar>
								</view>
								<view class="mes-content">
									<view style="font-weight: bolder; letter-spacing: 0rpx; margin-bottom: 8rpx;">花花世界besos</view>
									你好呀~
								</view>
							</view>
							<view class="mes-time">刚刚</view>
						</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				input: "",
				sShow: true,
				isUp: "../../static/img/up.png",
				list: [1,3,3,5,6,75,5,45,54],
				src: "",
				uShow: true,
				userIsUp: "../../static/img/up.png",
				
				
			}
		},
		methods: {
			sysShow() {
				if(this.sShow == true) {
					this.isUp = "../../static/img/down.png";
					this.sShow = false;
				} else {
					this.isUp = "../../static/img/up.png";
					this.sShow = true;
				}
			},
			userShow() {
				if(this.uShow == true) {
					this.userIsUp = "../../static/img/down.png";
					this.uShow = false;
				} else {
					this.userIsUp = "../../static/img/up.png";
					this.uShow = true;
				}
				
			}
		}
	}
</script>
<style lang="scss">
	.content {
		background-image: linear-gradient( to bottom , #FDECEA, #d6d8ec);
		height: auto;
		min-height: 86vh;
		weigth: 100%;
		padding: 0 30rpx 0rpx 30rpx;
		.search {
			height: 100rpx;
			width: 100%;
			.search-content {
				text-align: center;
				padding: 30rpx 0 30rpx 0;
			}
		}
		.sys-notice {
			margin: 30rpx 0 30rpx 0;
			.sys-header {
				display: flex;
				justify-content: flex-start;
			}
			.sys-mes {
				.sys-mes-item {
					letter-spacing: 3rpx;
					word-break: break-all;
					min-height: 100rpx;
					height: auto;
					width: 100%;
					background-color: white;
					border-radius: 60rpx;
					margin-bottom: 28rpx;
					padding: 32rpx;
					line-height: 50rpx;
					white-space: pre-wrap;
					word-wrap: break-word;
				}
			}
		}
		.user-notice {
			margin: 30rpx 0 30rpx 0;
			.user-header {
				display: flex;
				justify-content: flex-start;
			}
			.user-mes {
				.user-mes-item {
					min-height: 100rpx;
					height: auto;
					width: 100%;
					margin: 30rpx 0 70rpx 0;
					//用户-消息
					.user-content {
						display: flex;
						.mes-header {
							justify-content: center;
						}
						.mes-content {
							letter-spacing: 4rpx;
							justify-content: center;
							width: 100%;
							min-height: 100rpx;
							height: auto;
							border-radius: 60rpx;
							margin-left: 20rpx;
							padding: 30rpx;
							background-color: white;
							white-space: pre-wrap;
							word-wrap: break-word;
							word-break: break-all;
						}
					}
					//消息-时间
					.mes-time {
						float: right;
						margin-right: 50rpx;
						margin-top: 10rpx;
						font-size: 20rpx;
						color: #999999;
						letter-spacing: 4rpx;
					}
					
				}
			}
		}
	}
	/* .name{
		width: 100%;
		background-image: url(../../static/background/homebackground.jpg);
		background-repeat: no-repeat;
		background-position: center;
		background-size:cover;
		height: 100vh;
		
	} */
</style>
