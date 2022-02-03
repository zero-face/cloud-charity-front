<template>
	<view class="content">
		<view class="firstbox"> <!-- 第一个大盒子 -->
		<view class="logo1">logo</view>
			<view class="secondtbox"> 当地位置</view>
			<view class="saoma">拍照扫码或者头像展示插件</view>
		</view>
		<view class="search">
<u-search  placeholder="请输入内容" v-model="keyword" :clearabled="true" margin="1.2vh 1vh 0vh 0vh" :animation="true"></u-search>
		</view>
		<view class="thrid">
			<view class="obox">
					当地资讯
			</view>
			<view class="box">
			<u-notice-bar mode="vertical" more-icon=true :list="articles"></u-notice-bar>
			</view>
			<view class="wrap">
					<u-swiper :list="list" :effect3d="true" ></u-swiper><!-- 轮播图控件 -->
				</view>
		</view>
		<view class="diaoc"><!-- 社区那栏的大盒子 -->
			<view class="communicaty">
				<wyb-button class="btn" width="100%" height="9vh" type="plain" font-size="5vh" ripple=true ripple-bg-color='rgba(201,119,127,0.7)'>社区</wyb-button>
			</view>
			<view class="helpfarmer">
					<wyb-button class="btn" width="100%" height="9vh" type="plain" font-size="5vh" ripple=true  ripple-bg-color='rgba(83,15,195,0.7)'>助农商城</wyb-button>
			</view>
		</view>
		<view class="donate">
			<view class="in">	<wyb-button class="btn" width="100%" height="9vh" type="plain" font-size="5vh" ripple=true ripple-bg-color='rgba(137,170,72,0.7)'>我要捐赠</wyb-button></view>
				<view class="out">	<wyb-button class="btn" width="100%" height="9vh" type="plain" font-size="5vh" ripple=true ripple-bg-color='rgba(172,164,148,0.7)'>我要救助</wyb-button></view>
		</view>
		<view class="bigdestroy">
			<view class="entry">	<wyb-button class="btn" width="100%" height="6vh" type="plain" font-size="5vh" ripple=true ripple-bg-color='rgba(32,65,100,0.7)'>重大灾难通道</wyb-button></view>
		</view>
		<view class="lastbox">
			<view class="bcooperate">
					<wyb-button class="btn" width="100%" height="6vh" type="plain" font-size="2vh" ripple="true" ripple-bg-color='rgba(8,176,243,0.7)'>站点合作</wyb-button>
			</view>
			<view class="ccooperate"><wyb-button class="btn" width="100%" height="6vh" type="plain" font-size="2vh" ripple=true ripple-bg-color='rgba(221,0,274,0.7)'>企业合作</wyb-button></view>
			<view class="zcooperate"><wyb-button class="btn" width="100%" height="6vh" type="plain"  font-size="2vh"ripple=true ripple-bg-color='rgba(255,199,0,0.7)'>助农合作</wyb-button></view>
			<view class="acooperate"><wyb-button class="btn" width="100%" height="6vh" type="plain"  font-size="2vh"ripple=true ripple-bg-color='rgba(239, 64, 132, 0.7)'>加入我们</wyb-button></view>
		</view>
		<view id="d"></view>
	</view>
	
</template>

<script>
	
	export default {
		data() {
			return {
				title: 'Hello',
				keyword: '',
				list: [{
										image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
										title: '昨夜星辰昨夜风，画楼西畔桂堂东'
									},
									{
										image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
										title: '身无彩凤双飞翼，心有灵犀一点通'
									},
									{
										image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
										title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
									}
								],
				articles: [
																	'寒雨连江夜入吴',
																	'平明送客楚山孤',
																	'洛阳亲友如相问',
																	'一片冰心在玉壶'
																]
							
							
							
			}
		
		},
		onLoad() {

		},
		methods: {
			
			
		},
				

	}
</script>

<style>
	.logo1{
		width:20%;
		background-color: #007AFF;
		float: left;
		height: 100%;
		display: inline-block;
		position: relative;
	}
	.obox{
		color: #DD524D;
		border-color: rgba(255, 19, 145, 0.6);
		border-style: double;
		margin-left: 5%;
		width: 90%;
		height: 4vh;
	border-radius: 20%;
		background-color: rgba(246,248,250,0.6);
		font-size: 2.5vh;
		font-weight: bold;
		margin-top: 2vh;
		margin-bottom:1vh;
	}
	.box{
		width: 100%;
	}
	.wrap {
		padding-top: 1vh;
			padding-left: 1vh;
			padding-right: 1vh;
		}
	.firstbox{
		/* position: absolute; */
		display: inline-block;
		/* background-color: #007AFF; */
		background-color:rgba(255,252,243,0.4);
		border-color: rgba(77, 192, 185, 0.5);
		border-style:  groove;
		border-radius: 10%;
		width: 100%;
		height: 10%;
		margin-bottom: 0rpx;
		position: relative;
	}
	.secondtbox{
		float: left;
background-color: #4CD964;
height: 100%;
width: 30%;
margin-left: 12%;
display: inline-block;
margin-bottom: 0rpx;
position: relative;
	}
	.saoma{
		 display: inline-block;
	 background-color:  #4CD964;
	/* right: 10rpx; */
	 /* margin-top: 10rpx; */
	 /* margin-top:10% ; */
	 /* margin-bottom:10%; */
	 width: 15%;
	 height: 80%;
	margin-left: 15%;
	 margin-right: 5%;
	 margin-top: 1vh;
position: relative;
	}
	.thrid{
		display: inline-block;
		/* margin-left: 5%; */
		height: 35%;
		width: 100%;
		border-width: 1vh;
		border-color: rgba(209, 159, 250, 0.8);
		border-style:  double;
		border-radius: 15%;
	position: relative;
	}
	.diaoc{
		border-radius: 20%;
		background-color: rgba(246,248,250,0.6);
	width: 100%;
	height:15%;display: inline-block;
	position: relative;
	
	}
	.communicaty{
		background-color: #4CD964;
margin-top: 3vh;
margin-bottom: 10%;
		width: 35%;
		height: 60%;
		margin-left: 10%;
		display: inline-block;
		padding-top: 0vh;
		padding-bottom: 1vh;
		position: relative;
	}
	.helpfarmer{
		float: right;
		background-color: #4CD964;
		margin-top: 3vh;
		margin-bottom: 10%;
				width: 35%;
				height: 60%;
				margin-right: 10%;
				display: inline-block;
				position: relative;
	}
	.donate{border-radius: 20%;
		display: inline-block;
		background-color:rgba(246,248,250,0.6);
		width:100%;
		height: 15%;
		position:relative;
	}
	.search{display: inline-block;
	/* 	margin-top:0rpx; */
		width: 80%;
		height: 7.5%;
		margin-left: 10%;
		margin-right: 10%;
		position: relative;
		
	}
	.in{
	background-color: #4CD964;
	margin-top: 3vh;
	margin-bottom: 10%;
			width: 35%;
			height: 60%;
			margin-left: 10%;
			display: inline-block;
			position: relative;
	}
	.out{
		float: right;
		background-color: #4CD964;
		margin-top:3vh;
		margin-bottom: 10%;
				width: 35%;
				height: 60%;
				margin-right: 10%;
				display: inline-block;
				position: relative;
	}
	.lastbox{
		border-radius: 10%;
		background-color: rgba(222,222,235,0.6);
		width: 100%;
		height:8%;
		
		display: inline-block;
		position: relative;
		
	}
	.bcooperate{
		width: 20%;
	    height: 100%;
		margin: 0rpx;
		margin-left: 4%;
		margin-right: 4%;
	padding-top: 1vh;
	padding-bottom: 1vh;
		display: inline-block;
		position: relative;
	}
	.ccooperate{
		padding-top: 1vh;
		padding-bottom: 1vh;
		width: 20%;
		height: 100%;
		margin-right: 4%;
		display: inline-block;
		position: relative;
	}
	.zcooperate{
		padding-top: 1vh;
		padding-bottom: 1vh;
		width: 20%;
		height: 100%;
		margin-right: 4%;
		display: inline-block;
		position:relative;
	}
	.acooperate{
		padding-top: 1vh;
		padding-bottom: 1vh;
		width: 20%;
		height: 100%;
		margin-right: 4%;
		display: inline-block;
		position:relative;
	}
	.bigdestroy{
		border-radius: 20%;
		background-color: rgba(153,153,153,0.6);
		width: 100%;
		height: 10%;
		display: inline-block;
		position: relative;
	}
	.entry{
		background-color: #4CD964;
		margin-top: 2vh;
		width: 60%;
		height:60%;
		margin-left:20%;
		display:inline-block;
		position: relative;
	}

	.content {
		height: 100vh;
		display:inline-block;
		background-image: url(../../static/background/homebackground.jpg);
		background-repeat: no-repeat;
		background-position: center;
		background-attachment: scroll;
		background-size:cover;
   position: relative;
		/* align-items: center; */
		
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
