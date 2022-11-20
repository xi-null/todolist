<template>
  <div v-if="isShow === true">
    <div class="nav_bar">
      <Title
        :title="title"
        :tpath="pathName"
      />
    </div>
    <div class="process_container">
      <Details :apply-id="applyId" />
      <div class="process_container_footer">
        <button
          class="process_container_footer_btn"
          @click="cancleApply()"
        >
          取消申请
        </button>
      </div>
    </div>
  </div>
  <div v-else>
    <CancleApply
      :apply-id="applyId"
      @closeCancle="closeCancle"
    />
  </div>
</template>

<script>
import CancleApply from '@/pages/ApplyProcess/components/CancleApply.vue'
import Details from '../components/Details.vue'
import Title from '@/pages/components/Title.vue'
export default {
  name: 'ApplyProcess',
  components: {
    CancleApply,
    Details,
    Title
  },
  data () {
    return {
      applyId: '',
      isShow: true,
      title: '',
      pathName: '/myapply'
    }
  },
  created () {
    this.title = this.$route.meta.title
    this.applyId = this.$route.query.applyId
  },
  methods: {
    cancleApply () {
      this.isShow = false
    },
    closeCancle (isShow) {
      this.isShow = isShow
    }
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

.message_nav_content_title {
  max-width: 60%;
  margin: 0 auto;
  font-size: 4.2vw;
  font-weight: 500;
  color: #fff;
}

.process_container_footer_btn {
  position: relative;
  display: block;
  width: 100%;
  height: 44px;
  padding: 0 15px;
  font-size: 14px;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
  border-radius: 999px;
  transition: opacity 0.2s;
}
</style>
