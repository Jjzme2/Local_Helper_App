<template>
  <!-- This will be a button that removes a value from the promotionCount prop. Once clicked, this should notify the development team that a promotion has been requested for the given resource, also defined as a prop. -->
  <div class="container">
    <h3>Enter for a chance to win!</h3>
    <label for="entrantEmail">Email Address:</label>
    <input type="email" name="entrantEmail" value="entry-email" />
    <button @click="promotionRequested">Submit Entry</button>
  </div>
</template>

<script>
export default {
  name: 'PromotionButton',
  props: {
    promotionCount: {
      type: Number,
      required: true
    },
    resource: {
      type: String,
      required: true
    }
  },
  methods: {
    promotionRequested() {}
  }
}
</script>
