<template>
  <div class="details_container">
    <div class="nav_bar">
      <Title
        :tpath="pathName"
        :title="title"
      />
    </div>
    <div class="process_container">
      <Details :apply-id="applyId" />
      <div class="process_container_footer" />
    </div>
  </div>
</template>

<script>
import Details from '../components/Details.vue'
import Title from '../components/Title.vue'
export default {
  components: { Details, Title },
  data: function () {
    return {
      applyId: '',
      pathName: '/myapproval',
      title: '审批详情'
    }
  },
  created () {
    this.applyId = this.$route.query.applyId
  }
}
</script>

<style scoped lang="scss">
.nav_bar {
  position: sticky;
  top: 0;
  z-index: 999;
}

.process_container {
  background-color: #f4f4f4;
}

.process_container_footer {
  position: fixed;
  bottom: 0;
  z-index: 999;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2.66667vw 8vw;
  background-color: #fff;
}
</style>
