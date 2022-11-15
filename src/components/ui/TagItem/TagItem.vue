<template>
	<div class="tag-item d-flex flex-column text-lg-h6 text-md-body-1 text-sm-body-2">
		<h3>{{ tag.title }}</h3>
		<section 
			:class="['tag-item__list d-flex flex-wrap', {
				'justify-space-between': tag.alignment == 'width'
			}]"
			:style="{'height': `${height}px`}"
		>
			<div 
				:class="['d-flex align-center tag-item__tag', {
					'tag-item__tag--width': tag.alignment == 'width'
				}]" 
				v-for="(tagItem, index) in tag.tagList" 
				:key="tagItem.text"
			>
				<v-icon v-if="index !== 0" class="tag-item__spacer ma-auto">
					mdi-circle-small
				</v-icon>
				<div 
					class="tag-item__info d-flex align-center" 
					ref="tagItem"
				>
					<v-icon class="tag-item__icon mr-1" v-if="tagItem.icon">
						{{ tagItem.icon }}
					</v-icon>
					<p class="tag-item__text my-0">{{ tagItem.text }}</p>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	props: {
		tag: {
			type: Object,
			required: true
		}
	},

	data() {
		return {
			ro: null,//ResizeObserver
			height: 0
		}
	},

	mounted() {
		this.ro = new ResizeObserver(this.resizeBlock)
		this.ro.observe(this.$refs.tagItem[0])
	},

	methods: {
		resizeBlock() {
			this.height = this.$refs.tagItem[0].offsetHeight
		}
	},

	name: 'TagItem'
}
</script>

<style lang="scss">
@import './TagItem';
</style>