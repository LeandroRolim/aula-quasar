<script>
  export default {
    props: {
      component: {
        required: true
      }
    },
    render: function (h) {
      h(this.component)
    }
  }
</script>
