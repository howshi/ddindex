<template>
	<div class="index">
		
		<my-header></my-header>
		
		<div class="banner">
			<transition name = "fade">
				 <div class="erth" v-show="flag" >世界那么大，我们陪你去看看</div>			
			</transition>
	
			<div class="sherf">		
				<div >TRAVEL,等待与你相约在美丽的国</div>
				<input type="" name="" id="" value="" placeholder="请输入你的目的地" />
			</div>
			<div class="block">
				<el-carousel height="2.5rem">
					<el-carousel-item>
						<img src="../assets/banner2.jpg"/>					
					</el-carousel-item>
					<el-carousel-item>
						<img src="../assets/banner1.jpg"/>
						
					</el-carousel-item>
		
				</el-carousel>
				
			</div>
		</div>
		<main>
			<div class="roudline">
				<div class="roudline-text">
					<div>推荐路线</div>
					<div>Recommended line</div>
				</div>
				<div class="roudline-pic">
					<div @click="list">
						<img src="../assets/pic01-1.jpg"/>
						<div>【年终大促】上海直飞马尔代夫库拉玛提6-7天自由行-五星岛屿+快艇上岛+马代较长拖尾沙滩</div>
						<div>¥11045起/人</div>
					</div>
					<div>
						<img src="../assets/pic02-1.jpg"/>
						<div>【圣诞大促】北京出发巴厘岛6天4晚/7天5晚自由行（多酒店选择/双酒店混住+含早餐+酒店接送机服务</div>
						<div>¥12040起/人</div>
					</div>
					<div>
						<img src="../assets/pic03-1.jpg"/>
						<div>北京出发罗马威尼斯米兰10天7晚四星酒店自由行拒签退款（包含全程机票和酒店+可定制+可升级酒店）</div>
						<div>¥11500起/人</div>
					</div>
				</div>
			</div>
			<div class="motif">
				<div class="motif-text">
					<div>主题精选</div>
					<div>Theme selection</div>
				</div>
				<div class="motif-pic">
					<div class="motif-pic-frist">
						<div class="motif-pic-frist-F">
							<img src="../assets/motif01.jpg"/>
							<div>热情海滩</div>
							<div>现代社会赋予旅游一种全新的观念，家庭旅游不单单是一种消费，一种排遣，而是一种多方面的收获，
								它既可修身养心，又可怡情益智；既是一次紧张之余的调剂，更是补充精神生活的营养品，闲时出游，
								回归自然。
							</div>
						</div>
						<div class="motif-pic-frist-N">
							<img src="../assets/motif02.jpg"/>
							<div>浪漫美景</div>
							<div>现代社会赋予旅游一种全新的观念，家庭旅游不单单是一种消费，一种排遣，而是一种多方面的收获</div>
						</div>
						
					</div>
					<div class="motif-pic-next">
						<div>
							<img src="../assets/motif03.jpg"/>
							<div>壮丽奇景</div>
							<div>现代社会赋予旅游一种全新的观念，家庭旅游不单单是一种消费，一种排遣，而是一种多方面的收获</div>
						</div>
						<div>
							<img src="../assets/motif04.jpg"/>
							<div>田园风光</div>
							<div>现代社会赋予旅游一种全新的观念，家庭旅游不单单是一种消费，一种排遣，而是一种多方面的收获</div>
						</div>
						<div>
							<img src="../assets/motif05.jpg"/>
							<div>神秘国度</div>
							<div>现代社会赋予旅游一种全新的观念，家庭旅游不单单是一种消费，一种排遣，而是一种多方面的收获</div>
						</div>
					</div>
				</div>
			</div>
			<div class="travel">
				<div class="travel-text">
					<div>旅游攻略</div>
					<div>更多>></div>
				</div>
				<div class="travel-pic">
					<div class="travel-pic-left">
						<div class="travel-pic-left-one">
							<img src="../assets/travel01.jpg"/>
							<div>
								去台湾，有什么是需要准备和注意的呢
								<div>
									1在台湾机场可以买张大哥大的本地号(100元10天流量无线，还可以拨打100分钟左右的本地电话，在订名宿时联系比较方便哈)
								</div>
							</div>
							
						</div>
						<div class="travel-pic-left-two">
							<img src="../assets/travel02.jpg"/>
							<div>
								库克群岛：库克群岛，寻找现实版的“海洋奇缘”
								<div>
									法国有庞大的海外领土，所以在留尼汪，你可以放心大胆带着点小虚荣地说“我正在法国度假呢”，
									尽管，它位于南印度洋上的非洲，左邻右舍分别是马达加斯加与毛里求斯
								</div>
							</div>
							
						</div>
						<div class="travel-pic-left-three">
							<img src="../assets/travel03.jpg"/>
							<div>
								如果有一天你决定一个人私奔，一定要选择留尼汪。

								<div>
									留尼汪的名字第一次出现视野，因为在本土海域发现疑似马航MH370的残骸，尽管报道很多，
									但引起关注的重点依然在那次事件本身。过多悲伤的情绪，让人们无暇了解这座美丽的岛屿。
								</div>
							</div>
							
						</div>
						<div class="travel-pic-left-four">
							<img src="../assets/travel04.jpg"/>
							<div>
								云南大理丽江，教你如何邂逅新奇特

								<div>
									大家来云南订机票的时候，一般选择直飞昆明/大理/丽江，我个人建议是买直飞昆明的机票，如果是直飞丽江或者大理，
									一是航班稀缺，二是价格昂贵。
								</div>
							</div>
							
						</div>
						
					</div>
					<div class="travel-pic-rigth">
						<div class="travel-pic-left-five">
							<img src="../assets/travel05.jpg"/>
							<div>
								去厦门前必看，教你吃喝玩乐如何不走弯路

								<div>
									今年9月份鼓浪屿因为台风，每天允许接纳的上岛人数从之前的6.5万人下调到1.5万左右。
									船票紧张，最好提前预定。
								</div>
							</div>
							
						</div>
						<div class="travel-pic-left-six">
							<img src="../assets/travel06.jpg"/>
							<div>
								笔墨染不尽你，西班牙！（瓦伦西亚，塞维利亚，马德里） 

								<div>
									多多少少，或早或晚，我们都被生命的冲动、被莫名的精神和情绪的汹涌潮水推动过。
									在看不到意义的时候寻求人生的意义，在不同的时候，因不同的位置，出现不同的幻想
								</div>
							</div>
							
						</div>
						<div class="travel-pic-left-seven">
							<img src="../assets/travel07.jpg"/>
							<div>
								帕劳，上帝把所有的蓝留给这里

								<div>
									在上海转机的几小时空隙，老孟带着我的一箱子夏装送到浦东机场。
									一晚热腾腾的汤面下肚，有种重获新生的感觉，天知道我多么想念一切中餐。捧着一杯热奶茶，坐在行李车上让老孟推着我乱逛
								</div>
							</div>
							
						</div>
						<div class="travel-pic-left-eigth">
							<img src="../assets/travel08.jpg"/>
							<div>
								墨西哥——加勒比海上的玛雅迷踪 

								<div>
									说起墨西哥，你会想起什么？是鸡肉卷、玉米饼还是Tequila？墨西哥是2016年我到达的较远方，
									利用十年美签的便利，在这片土地上留下记忆的脚印
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
				
			</div>
		</main>
		<my-footer></my-footer>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:false
			}
		},
		created(){
			this.flag=true
		},
		 methods:{
		 	list(){
		 		this.$router.push("/list")
		 	}
		 	
		 	
			
		}
	}
	
</script>

<style scoped="scoped" lang="less">

	
	
	.banner {
		.el-carousel__item h3 {
			color: #475669;
			font-size: 14px;
			opacity: 0.75;
			line-height: 150px;
			margin: 0;
		}		
		.erth{
			position: absolute;
			z-index: 10;
			top: 1rem;		
			color: #fff;
			font-size:0.3rem ;
			margin-left:2rem ;
			margin-top:0.5rem ;
		}
		.sherf{
			position: absolute;
			color: #FFFFFF;
			top: 2rem;
			left: 2rem;
			z-index: 10;
			width: 4rem;
			text-align: center;
			border-radius: 0.05rem;
			background:rgba(0,0,0,0.6);
			div{
				font-size: 0.1rem;
				padding-top:0.2rem ;
			}
			input{
				width: 70%;
				height: 0.2rem;
				border-radius:0.05rem;
				padding-left: 0.1rem;
				margin: 0.1rem 0;
			}
		}
	}
	.roudline{
		.roudline-text{
			text-align: center;
			div{
				font-size: 0.2rem;
			}
			div:nth-child(2){
				color: #333;
			}
		}
		.roudline-pic{		
			display: flex;
			justify-content: space-around;			
			&>div{
				background: #FFFFFF;
				margin:0 0.1rem;		
				justify-content: space-between;		
				flex: 1;				
				img{
					width: 100%;
				}
				&>div{
					
					overflow: hidden;
					white-space: inherit;
					text-overflow: ellipsis;
					font-size: 0.001rem !important;
				}
				div:nth-child(3){
					font-size:0.15rem !important;
					color: red;
					padding: 0.08rem;
				}
			
			}
		}
	}
		.fade-enter-active,
		.fade-leave-active {
			transition: opacity .5s;
		}
		
		.fade-enter,
		.fade-leave-to {
			opacity: 0;
		}
		.motif{
			padding-bottom: 0.15rem;
			color: #fff;
			background: #2f333c;
			.motif-text{
				text-align: center;
				padding: 0.1rem 0;
				&>div{
					font-size: 0.2rem;
				}
			}
			.motif-pic{	
				
				.motif-pic-frist{
					display: flex;
					.motif-pic-frist-F{
						flex: 6.5;
						background: #fff;
						margin: 0 0.1rem;
						
						div:nth-child(2){
							font-size:0.15rem ;
							padding: 0.02rem 0.2rem;
							color: #333333;
						}
						div:nth-child(3){
							font-size:0.05rem ;
							padding: 0.02rem 0.2rem;
							color:#999;
						}
					}
					.motif-pic-frist-N{
						flex: 3.15;
						margin: 0 0.1rem;
						background: #fff;
						
						div:nth-child(2){
							color: #333333;
							font-size:0.15rem ;
							padding: 0.02rem 0.2rem;
						}
						div:nth-child(3){
							font-size:0.05rem ;
							padding: 0.02rem 0.2rem;
							color: #999;
						}
					}
					img{
						width: 100%;
						height: auto;
					}
				}	
			}
			.motif-pic-next{
				margin: 0.2rem 0.05rem;
				display: flex;
				justify-content: space-between;
				
				&>div{
					flex: 1;
					background: #FFFFFF;
					margin: 0 0.1rem;
					img{
						width: 100%;
					}
					div:nth-child(2){
							color: #333333;
							font-size:0.15rem ;
							padding: 0.02rem 0.2rem;
						}
						div:nth-child(3){
							font-size:0.05rem ;
							padding: 0.02rem 0.2rem;
							color: #999;
						}
				}
			}
		}
		.travel{
			padding: 0.2rem 0.2rem;
			.travel-text{
				display: flex;
				div:nth-child(1){
					flex: 1;
					justify-content: flex-start;
					font-size: 0.15rem;
				}
				div:nth-child(2){
					flex: 1;
					text-align: right;
					font-size: 0.05rem;
					padding-top:0.05rem ;
				}
			}
			.travel-pic{
				display: flex;
				.travel-pic-left{
					flex: 1;
					.travel-pic-left-one,
					.travel-pic-left-two,
					.travel-pic-left-three,
					.travel-pic-left-four{
						display: flex;
						margin: 0.1rem ;
						color: #333;
						img{
						width: 30%;
						height: auto;
						display: inline-block;
					}
						&>div{
							display: inline-block;
							font-size:0.09rem ;
							padding: 0.05rem  0.1rem;
							div{
								font-size:0.05rem ;
								padding:  0.1rem 0;
							}
							div:hover{
							color: #FF0000;
							}
						}
					}
					
				}
				.travel-pic-rigth{
					flex: 1;
					.travel-pic-left-five,
					.travel-pic-left-six,
					.travel-pic-left-seven,
					.travel-pic-left-eigth{
						display: flex;
						margin: 0.1rem ;
						color: #333;
						img{
						width: 30%;
						height: auto;
						display: inline-block;
					}
						&>div{
							display: inline-block;
							font-size:0.09rem ;
							padding: 0.05rem  0.1rem ;
							div{
								font-size:0.05rem ;
								padding:  0.1rem 0;
							}
							div:hover{
							color: #FF0000;
							}
						
						}
						
					}
				}
			}
		}
		
</style>