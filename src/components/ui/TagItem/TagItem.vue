<template>
	<div class="tag-item d-flex flex-column text-lg-h6 text-md-body-1 text-sm-body-2">
		<h3>{{ tag.title }}</h3>
		<section 
			:class="['tag-item__list d-flex flex-wrap', {
				'justify-space-between': tag.alignment == 'width'
			}]"
		>
			<div 
				:class="['d-flex align-center tag-item__tag', {
					'tag-item__tag--width': tag.alignment == 'width'
				}]" 
				v-for="tagItem in tag.tagList" 
				:key="tagItem.text"
			>
				<div class="tag-item__info d-flex align-center">
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

	name: 'TagItem'
}
</script>

<style lang="scss">
@import './TagItem';
</style>