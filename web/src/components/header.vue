<template>
	<div>
		<div class="top">
			<div class="top-left">
				<div class="login" @click="login">登录</div>
				<div class="reg" @click="reg">注册</div>
			</div>
			<div class="top-rigth">
				<div>加入收藏</div>
				<div>41-23525-23424</div>
			</div>
		</div>
	<div class="header">

			<div class="logo">
				<img src="../assets/logo.png" />
			</div>
			<div class="nav">
				<ul>
					<li>首页</li>
					<li>线路汇总</li>
					<li>旅游攻略</li>
					<li>酒店预订</li>
					<li>秒杀团购</li>
					<li>帮助中心</li>
				</ul>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			login(){
		 		this.$router.push("/login")
		 },
		 reg(){
		 	this.$router.push("/reg")
		 }
		}
	}
</script>

<style scoped="scoped" lang="less">
.top {
		color: #fff;
		height: 0.3rem;
		display: flex;
		background: #000;
		.top-left {
			flex: 1;
			display: flex;
			margin-left: 0.4rem;
			div {
				font-size: 0.01rem !important;
				line-height: 0.3rem;
			}
		}
		.top-rigth {
			flex: 1;
			display: flex;
			justify-content: flex-end;
			div {
				font-size: 0.01rem !important;
				line-height: 0.3rem;
				margin-left: 0.2rem;
			}
		}
	}
	
	.header {
		height: 0.6rem;
		background: #114183;
		text-align: center;
		display: flex;
		.logo {
			margin: 0.12rem;
			flex: 1;
			width: 2rem;
			height: 0.6rem;
			text-align: center;
			img {
				width: 100%;
			}
		}
		.nav {
			flex: 7;
			ul {
				display: flex;
				li {
					font-size:0.1rem ;
					list-style: none;
					flex: 1;
					height: 0.6rem;
					line-height: 0.6rem;
					color: #fff;
				}
				li:hover{
					color: #FF0000;
				}
			}
		}
	}
</style>