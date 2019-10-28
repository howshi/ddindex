<template>
	<div class="list">
		<my-header></my-header>
		<div class="banner">
			<img src="../assets/banner1.jpg" />
			<div>首页 ≡ 美洲旅游 ≡ 美国洛杉矶+拉斯维加斯16日14晚半自助游+6大国家公园自驾</div>
		</div>
		<main>
			<div class="main-content">
			<div class="main-left">
				<img src="../assets/list-main01.jpg"/>
				<div class="main-pay">
					<div class="main-pay-text">
						美国洛杉矶+拉斯维加斯16日14晚半自助游+6大国家公园自驾
					</div>
					<div class="main-pay-money">
						价格：<span>￥10400.00</span> 					
						<p>市场价:<span>￥12000.00</span></p>
						<p>满意度：0</p>
						<p>成交： 0 次</p>
					</div>
					<div class="main-pay-btn">
						<button class="shopcar">加入购物车</button>
						<button class="pay">立即购买</button>
					</div>
				</div>	
			</div>
			<div class="main-panle">
				 	<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    				<el-tab-pane label="旅程信息" name="first">
    					<div class="panle-miaosu">
    						商品描述
    						<div>美国旅游线路涵盖黄石公园旅游,纽约旅游,夏威夷旅游等</div>
    					</div>
    					<div class="panle-first">
    						
    						<div class="panle-first-text">
    							第1天　各地/丽江（飞机） 宿：丽江 餐：自理<br />
									丽江机场接机，入住酒店。自由活动。建议：到世界文化遗产古城内去参加纳西族的锅庄打跳。<br />
									第2天　丽江 宿：丽江 餐：早//<br />
									自由活动；建议：您可以乘出租车到世界上纬度较低的玉龙雪山（门票190元/人，大索道162元/人均自理），乘大索道看现代冰川，净化心灵，下午在世界文化遗产古城内自由活动，尽享古城魅力，晚上在河边的酒吧喝酒对情歌说不定有美妙的奇遇，或去欣赏世界上较古老的音乐之一 -- 纳西古乐（宣科演奏A票）
			    			</div>
			    			<img src="../assets/panle1.jpg"/>
			    		</div><div class="panle-two">
    						
    						<div class="panle-two-text">
    							第3天　丽江 宿：丽江 餐：早//<br />
									自由活动；建议：旅行较好的风景其实在路上，您可以前往世界著名的虎跳峡（门票50元/人），途经云南省湿地保护区--拉什海（可以自费骑马、吃鱼 ），傍晚可去束河古镇，体会较古老的纳西民居，也可以关掉手机睡到自然醒，彻底放松，让高原的阳光温暖全身的每一个细胞，让时光在不经意间缓缓流过…<br />
									第4天　丽江 宿：丽江 餐：早//<br />
									自由活动；建议：再次和玉龙雪山一起醒来,继续在古城内消磨时光,到新义街品尝哈记牛肉，到大石桥品尝鸡豆凉粉，到关门口品尝丽江粑粑…<br />
									第5天　丽江/各地（飞机） 宿：无 餐：早<br />
									自由活动；丽江机场送机。<br />
							</div>
			    			<img src="../assets/panle2.jpg"/>
			    		</div>
			    		
		
    				</el-tab-pane>
    				<el-tab-pane label="购买记录" name="second">配置管理</el-tab-pane>
				    <el-tab-pane label="顾客评论" name="third">角色管理</el-tab-pane>
				    <el-tab-pane label="卖家问答" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
			</div>
			</div>
			<div class="main-selection">
				<div class="main-selection-one">
					<img src="../assets/left01.jpg"/>
					<div class="one-text">
						阿联酋迪拜+阿布扎比6日跟团游+游乐
						阿联酋迪拜+阿布扎比6日跟团游+游乐
						
						<div>￥10400.00</div>
						
						中东非洲介绍迪拜,沙漠上的童话世界。在海的那边,沙漠的那头,一个城市横空出世
							</div>
				</div>
				<div class="main-selection-two">
					<img src="../assets/left02.jpg"/>
					<div class="two-text">
						毛里求斯8日6晚自由行·广州直飞 酒				
						<div>￥10400.00</div>
							中东非洲介绍迪拜,沙漠上的童话世界。在海的那边,沙漠的那头,一个城市横空出世
					</div>
				</div>
				<div class="main-selection-three">
					<img src="../assets/left03.jpg"/>
					<div class="three-text">
						土耳其12日9晚跟团游·特色餐+温泉
							<div>￥10400.00</div>
								中东非洲介绍迪拜,沙漠上的童话世界。在海的那边,沙漠的那头,一个城市横空出世
					</div>
				</div>
				<div class="main-selection-four">
					<img src="../assets/left04.jpg"/>
					<div class="four-text">
						迪拜+阿布扎比6日自由行 阿联酋航直
					     <div>￥10400.00</div>
						
						中中东非洲介绍迪拜,沙漠上的童话世界。在海的那边,沙漠的那头,一个城市横空出世
					    </div>
				</div>
				<div class="main-selection-five">
					<img src="../assets/left05.jpg"/>
					<div class="five-text">
						阿联酋迪拜+阿布扎比6日跟团游 赠特	
						<div>￥10400.00</div>			
						中东非洲介绍迪拜,沙漠上的童话世界。在海的那边,沙漠的那头,一个城市横空出世
							</div>
				</div>
				
			</div>
		</main>
		<my-footer></my-footer>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped="scoped" lang="less">
.banner{
	height: 1rem;
	img{
		width: 100%;
		height: 70%;
	}
	div{
		padding: 0 0.3rem;
		border-bottom: 1px solid #999;
		font-size:0.1rem ;
		color: #999;
	}
}
main{
	display: flex;
	padding: 0 0.3rem;
	.main-content{
		margin: 0 0.1rem;
		flex: 7;
		border-right:#f0f0f0 solid 1px;
		
	.main-left{
		
		border: #f0f0f0 solid 1px;
		display:flex;
		
		img{
			width: 40%;
			flex: 1;
		}
		.main-pay{
			flex: 1;
			display: inline-block;
			margin: 0 0.15rem;
			padding: 0.05rem 0.1rem;
			.main-pay-text{
				line-height: 0.18rem;
				font-size: 0.1rem;
				font-weight: bold;	
				border: #f0f0f0 solid 1px;
			}
			.main-pay-money{
				font-size: 0.01rem;
				border: #f0f0f0 solid 1px;
				span:nth-child(1){
					color: #FF0000;
					font-size: 0.18rem;
				}
				p{
					line-height: 0.15rem;
					font-size: 0.01rem;
					span{
						font-size: 0.15rem !important;
						text-decoration:   line-through;
						color: #999 !important;
					}
				}
				
			}
			.main-pay-btn{
				.shopcar{
					border: none;
					background: #048bcd;
					color: #fff;
					font-size: 0.1rem;
					width: 1rem;
					height: 0.3rem;
				}
				.pay{
					background: #ff6b6b;
					border: none;
					color: #fff;
					font-size: 0.1rem;
					width: 1rem;
					height: 0.3rem;
				}
			}
		}
		
	}
	.main-panle{
		margin: 0.2rem ;
		.panle-miaosu{
			font-size: 0.05rem;
			&>div{
				font-size: 0.15rem;
				line-height: 0.4rem;
				border-bottom: 1px solid #999;
				margin-bottom: 0.1rem;
			}
		}
		img{
			width: 100%;
		}
		.panle-first{
			.panle-first-text{
				font-size: 0.08rem;
				line-height: 0.15rem;
				margin-bottom: 0.1rem;
			}
		}
		.panle-two{
			.panle-two-text{
				font-size: 0.08rem;
				line-height: 0.15rem;
				margin-bottom: 0.1rem;
			}
		}
	}
	}
	.main-selection{
		flex: 3;
		img{
			width: 100%;
		}
		img:hover{
			opacity: 0.7;

		}
		
			.one-text,
			.two-text,
			.three-text,
			.four-text,
			.five-text,
			.six-text{
				font-size: 0.05rem;
				div{
					color: #FF0000;
					font-size: 0.05rem;
					line-height: 0.1rem;
				}
			}
		}
}
</style>