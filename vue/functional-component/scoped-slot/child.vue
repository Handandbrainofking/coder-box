<template>
	<li v-for="link in links">
		<slot
			name="link"
			:link="link"
			:bookmarked="bookmarked"
			:bookmarkButtonAttrs="{
				style: [link.bookmarked ? { display: none } : {}],
			}"
			:bookmarkButtonEvents="{
				click: () => bookmark(link),
			}"
		></slot>
	</li>
</template>
<script>
export default {
	data() {
		return {
			links: [
				{ href: 'http://...', title: 'first link', bookmarked: true },
				{ href: 'http://...', title: 'second link', bookmarked: false },
			],
		};
	},
	methods: {
		bookmarked(link) {
			link.bookmarkd = true;
		},
	},
};
</script>
