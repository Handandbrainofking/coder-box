<template>
	<!-- 视图层 -->
	<!--Parent组件或者consumer -->
	<child>
		<div slot="link" slot-scoped="{link, bookmark}">
			<star-icon v-show="link.bookmarked"></star-icon>
			<a :href="link.href">{{ link.title }}</a>
			<button v-bind="bookmarkButtonAttrs" v-on="bookmarkButtonEvents">
				Bookmark
			</button>
		</div>
	</child>
</template>

