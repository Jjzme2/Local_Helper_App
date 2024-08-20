<template>
	<BaseView>
		<template #default>
			<h1>{{ blog.title }}</h1>
		</template>
	</BaseView>
</template>

<script>
import useBlogStore from '@/stores/modules/blog'
import BaseView from './BaseView.vue'
import { onBeforeMount, computed } from 'vue'

export default {
	setup() {
		const store = useBlogStore()

		onBeforeMount(() => {
			store.fetchItems()
		})

		const blogs = computed(() => store.getItems)

		const blog = computed(() => {
			return blogs.value.find((blog) => blog.id === this.$route.params.id)
		})

		return {
			blog
		}
	},

	name: 'BlogView',
	components: {
		BaseView
	}
}
</script>

<style scoped>
h1 {
	margin-bottom: 1rem;
}
</style>
