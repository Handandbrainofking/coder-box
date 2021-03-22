<template>
	<renderless-tags-input :value="value" @input="tags => {$emit('input', tags)}">
		<div
			class="tags-input"
			slot-scope="{ tags, removeTag, inputAttrs, inputEvents }"
		>
			<span class="tags-input-tag" v-for="tag in tags">
				<span>{{ tag }}</span>
				<button type="button" class="tags-input-removes" @click="removeTag(tag)">&time;</button>
			</span>
			<input
				class="tags-input-text"
				placehodler="Add tag..."
				v-bind="inputAttrs"
				v-on="inputEvents"
			/>
		</div>
	</renderless-tags-input>
</template>
<script>
export default {
    props: ['value']
};
</script>
