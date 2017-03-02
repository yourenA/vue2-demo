<style lang="less" scoped>
	.header {
		position: relative;
		line-height: 38px;
		color: #fff;
		text-align: center;
		background: #222;
		.item {
			position: absolute;
			top: 0;
			bottom: 0;
			z-index: 1;
			a {
				color: #fff;
			}
		}
		.left {
			left: 10px;
		}
		.right {
			right: 10px;
		}
	}
</style>
<template>
	<header class="header">
		<div class="item left">
			<!--挂载name=left的内容-->
			<slot name="left"></slot>
		</div>
		<div class="title">{{title}}</div>
		<div class="item right">
			<!--挂载name=left的内容-->
			<slot name="right"></slot>
		</div>
	</header>
</template>
<script>
    export default {
    	/**
		 * 使用props传递数据
		 * 无验证  props: ['message'],
		 * 有验证  props:{ propD: {type: Number,default: 100}，{}，{}}，
		 * 动态 props：
		 * <div>
		 * <input v-model="parentMsg">
		 * <br>
		 * <child v-bind:my-message="parentMsg"></child>
		 * </div>
		 */
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>