<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<!--              <p>Post Headers: {{ post.elements.headers }}</p>
              <p>Post Links: {{ post.elements.links }}</p>
              <p>Post Tables: {{ post.elements.tables }}</p>
              <p>Post Lists: {{ post.elements.lists }}</p>
              <div v-if="element.type === 'header'">
                <MarkdownHeader
                  v-for="item in element.content"
                  :key="item.text"
                  :text="item.text"
                  :level="item.level"
                />
              </div>
              <div v-if="element.type === 'link'">
                <MarkdownLink
                  v-for="item in element.content"
                  :key="item.content"
                  :content="item.content"
                />
              </div>
              <div v-if="element.type === 'table'">
                <MarkdownTable :headers="element.content[0]" :rows="element.content.slice(1)" />
              </div>
              <div v-if="element.type === 'list'">
                <MarkdownList :items="element.content" />
              </div>
            </span> -->
