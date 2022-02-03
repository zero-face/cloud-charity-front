<template>

	<view class="content"> 
		<view class="header">
			<view class= "h-content">
				<view class="img">
					<u-avatar size="100" shape="circle" :src="src"></u-avatar>
				</view>
				<view class="header-text">
					<view >昵称：{{name}}</view>
					<view>公益号：{{id}}</view>
				</view>
				<view class="header-other">
					<view>云年龄：2</view>
					<view>余额： 200</view>
				</view>
			</view>
		</view>
		<view class="g-header">
			<view class="g-header-item">
				<view>2</view>
				<view style="color: #7e7e7e;">帖子</view>
			</view>
			<view class="g-header-item">
				<view>1</view>
				<view style="color: #7e7e7e;">视屏</view>
			</view>
			<view class="g-header-item">
				<view>10</view>
				<view style="color: #7e7e7e;">关注</view>
			</view>
			<view class="g-header-item">
				<view>9</view>
				<view style="color: #7e7e7e;">粉丝</view>
			</view>
		</view>
		<view class="grid">
			<view class="grid-body">
				<u-grid :col="4" :border="false">
						<u-grid-item bg-color="rgba(253, 253, 253, 0.3)">
							<image style="width: 80rpx; height: 80rpx;" shape="circle" src="@/static/img/Photoalbum.png"></image>
							<view class="grid-text">相册</view>
						</u-grid-item>
						<u-grid-item bg-color="rgba(253, 253, 253, 0.5)">
							<image style="width: 80rpx; height: 80rpx;" shape="circle" src="@/static/img/like.png"></image>
							<view class="grid-text">赞/收藏</view>
						</u-grid-item>
						<u-grid-item bg-color="rgba(253, 253, 253, 0.5)">
							<image style="width: 80rpx; height: 80rpx;" shape="circle" src="@/static/img/record.png"></image>
							<view class="grid-text">浏览记录</view>
						</u-grid-item>
						<u-grid-item bg-color="rgba(253, 253, 253, 0.3)">
							<image style="width: 80rpx; height: 80rpx;" shape="circle" src="@/static/img/Draftbox.png"></image>
							<view class="grid-text">草稿箱</view>
						</u-grid-item>
						<u-grid-item bg-color="rgba(253, 253, 253, 0.3)">
							<image style="width: 80rpx; height: 80rpx;" shape="circle" src="@/static/img/pay.png"></image>
							<view class="grid-text">我的钱包</view>
						</u-grid-item>
						<u-grid-item bg-color="rgba(253, 253, 253, 0.3)">
							<image style="width: 80rpx; height: 80rpx;" shape="circle" src="@/static/img/survay.png"></image>
							<view class="grid-text">调查问卷</view>
						</u-grid-item>
						<u-grid-item bg-color="rgba(253, 253, 253, 0.3)">
							<image style="width: 80rpx; height: 80rpx;" shape="circle" src="@/static/img/honor.png"></image>
							<view class="grid-text">荣誉证书</view>
						</u-grid-item>
						<u-grid-item bg-color="rgba(253, 253, 253, 0.3)">
							<image style="width: 80rpx; height: 80rpx;" shape="circle" src="@/static/img/blind.png"></image>
							<view class="grid-text">后勤</view>
						</u-grid-item>
					</u-grid>
			</view>
			
		</view>
		<!-- <view>
			<u-gap height="30" bg-color="#eee"></u-gap>
		</view> -->
		<!-- <view class="list">
			<u-cell-group>
				<view style="border-radius: 60rpx; background-color: white;">
					<u-cell-item icon="setting-fill" title="实名认证" value="未实名认证"></u-cell-item>
				</view>
				<view>
					<u-cell-item icon="phone-fill" title="手机号绑定" value=""></u-cell-item>
				</view>
				
				<u-cell-item icon="rmb-circle-fill" title="银行卡绑定" value="未绑定"></u-cell-item>
				<u-cell-item icon="server-fill" title="客服中心" value=""></u-cell-item>
				<u-cell-item icon="setting-fill" title="设置" value=""></u-cell-item>
			</u-cell-group>
		</view> -->
		<view class="list">
			<view class="item">
				<view>
					<image style="width: 50rpx; height: 50rpx;" src="../../static/img/auth.png"></image>
				</view>
				<view style="margin-left: 50rpx;">
					<u-section title="实名认证" :bold="false" :show-line="false" :right="false"></u-section>
				</view>
				<view class="right">
					<text style="color: #7e7e7e; letter-spacing: 4rpx;">未实名认证</text>
					<u-icon color="#7e7e7e" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="item">
				<view>
					<image style="width: 50rpx; height: 50rpx;" src="../../static/img/phone.png"></image>
				</view>
				<view style="margin-left: 50rpx;">
					<u-section title="手机号绑定" :bold="false" :show-line="false" :right="false"></u-section>
				</view>
				<view class="right">
					<u-icon color="#7e7e7e" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="item">
				<view>
					<image mode="aspectFill" style="width: 60rpx; height:40rpx;"  src="../../static/img/bank.png"></image>
				</view>
				<view style="margin-left: 50rpx;">
					<u-section title="第三方支付" :bold="false" :show-line="false" :right="false"></u-section>
				</view>
				<view class="right">
					<u-icon color="#7e7e7e" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="item">
				<view hover-class="#eee">
					<image mode="aspectFill" style="width: 50rpx; height:50rpx;"  src="../../static/img/contribute.png"></image>
				</view>
				<view style="margin-left: 50rpx;">
					<u-section title="捐赠记录" :bold="false" :show-line="false" :right="false"></u-section>
				</view>
				<view class="right">
					<u-icon color="#7e7e7e" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="item">
				<view>
					<image mode="aspectFill" style="width: 50rpx; height:50rpx;"  src="../../static/img/Thanksgivingfeedback.png"></image>
				</view>
				<view style="margin-left: 50rpx;">
					<u-section title="感恩反馈记录" :bold="false" :show-line="false" :right="false"></u-section>
				</view>
				<view class="right">
					<u-icon color="#7e7e7e" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="item">
				<view>
					<image mode="aspectFill" style="width: 50rpx; height: 50rpx;"  src="../../static/img/love.png"></image>
				</view>
				<view style="margin-left: 50rpx;">
					<u-section title="爱心福利" :bold="false" :show-line="false" :right="false"></u-section>
				</view>
				<view class="right">
					<u-icon color="#7e7e7e" name="arrow-right"></u-icon>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "",
				name:"花花世界besos",
				id: 1234345345,
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="scss">
	.content {
		background-image: linear-gradient( to bottom , #FDECEA, #d6d8ec);
		height: auto;
		min-height: 86vh;
		weigth: 100%;
		.header {
			height: auto;
			padding: 20rpx;
			// justify-content: center; /* 水平居中 */
			.h-content {
				display: flex;
				align-items: center;     /* 垂直居中 */
				// justify-content: center; /* 水平居中 */
				// flex-flow: row wrap;
				// align-content: flex-start;
				padding: 0 20rpx 0  40rpx;
				.img {
					text-align: center;
				}
				.header-text {
					margin-left: 30rpx;
					text-align: center;
					line-height: 40rpx;
					font-size: 20rpx;
				}
				.header-other {
					margin-left: 50rpx;
					text-align: center;
					line-height: 40rpx;
					font-size: 20rpx;
				}
			}
			
		}
		.g-header {
			padding: 0 30rpx 30rpx 80rpx;
			display: flex;
			.g-header-item {
				flex: 0 0 23%;
				text-align: center;
			}
		}
		.grid {
			padding-top: 1rpx;
			height: auto;
			padding: 0rpx 30rpx 10rpx 30rpx;
			.grid-body {
				background-color: rgba(253, 253, 253, 0.5);
				padding: 0rpx 40rpx 40rpx 40rpx;
				border-radius: 60rpx;
				box-shadow: 0 0 10px 5px rgba(217, 217, 217, 0.3);
				.grid-text{
					margin-top: 10rpx;
					letter-spacing: 4rpx;
					font-size: 15rpx;
				}
			}
		}
		.list {
			height: auto;
			width: 100%;
			padding: 30rpx;
			.item {
				letter-spacing: 8rpx;
				display: flex;
				background: #fff;
				height: 80rpx;
				width: 100%;
				align-items: center; //垂直居中
				border-radius: 60rpx;
				margin-bottom: 20rpx;
				padding: 40rpx;
				.right {
					margin-left: auto;
				}
			}
			
		}
	}
</style>
