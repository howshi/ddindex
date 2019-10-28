<template>
	<div class="footer">
			<div class="footer-connect">
				<h5>联系我们</h5>
				<p>国内游热线：400-000-xxxxx</p>
				<p>国内游热线：400-000-xxxxx</p>
				<p>国内游热线：400-000-xxxxx</p>
			</div>
			<div class="footer-bay">
				<h5>支付方式</h5>
				<p>在线支付</p>
				<p>分期付款</p>
				<p>银行转账</p>
			</div>
			<div class="footer-yud">
				<h5>预订须知</h5>
				<p>隐私安全</p>
				<p>出行安全意识</p>
				<p>旅行风险防范</p>
				<p>特殊人员安全防范</p>
			</div>
			<div class="footer-bz">
				<h5>帮助中心</h5>
				<p>常见问题</p>
				<p>旅游咨询</p>
				<p>隐私政策</p>
				<p>旅游指南</p>
			</div>
		</div>
</template>

<script>
</script>

<style scoped="scoped" lang="less">
	.footer{
			background: #1b1b1b;
			color: #FFFFFF;
			display: flex;
			.footer-connect,
			.footer-yud,
			.footer-bz,
			.footer-bay{
				margin: 0.5rem 0.2rem;
				flex: 1;
				h5{
					font-size: 0.1rem;
					font-weight: normal;
				}
				p{
					font-size:0.08rem ;
					line-height: 0.2rem;
				}
			}
		}
</style>