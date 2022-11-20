<template>
  <div class="details_container">
    <div class="nav_bar">
      <div class="message_nav">
        <Title
          :title="title"
        />
      </div>
    </div>
    <Typebar
      :type="type"
      @changeChoose="changeChoose"
    />
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div
        v-if="applyList.length !== 0"
        class="approval_container"
      >
        <PreDetails
          :apply-list="applyList"
          :type="type"
        />
        <div class="no_more">
          <p class="no_more_content">
            没有更多了
          </p>
        </div>
      </div>
      <div
        v-else
        class="message_content"
      >
        <Enpty />
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getApproval } from '../../api/user'
import Title from '@/pages/components/Title.vue'
import Typebar from '@/pages/components/Typebar.vue'
import PreDetails from '@/pages/components/PreDetails.vue'
import Enpty from '@/pages/components/Enpty.vue'
import { Toast } from 'vant'
export default {
  name: 'MyApproval',
  components: {
    Title,
    Enpty,
    Typebar,
    PreDetails
  },
  data () {
    return {
      applyList: [],
      lengths: 0,
      title: '',
      isLoading: false,
      status: 5,
      type: '/approval-details'
    }
  },
  created () {
    this.title = this.$route.meta.title
    this.getApproval()
  },
  methods: {
    onRefresh () {
      Toast('刷新成功')
      this.isLoading = false
      this.getApproval()
    },
    getApproval () {
      const status = this.status
      const pageSize = 10
      const pageNo = 1
      getApproval(status, { pageSize, pageNo }).then(res => {
        this.applyList = res.page.list
        this.lengths = this.applyList.length
      })
    },
    changeChoose (status) {
      this.status = status
      this.getApproval()
    }
  }
}
</script>

<style scoped lang="scss">
.van-pull-refresh {
  height: 100vh;
  overflow: auto;
}

.nav_bar {
  position: sticky;/* 新属性sticky */
  top: 0;/* 距离页面顶部距离 */
  z-index: 999;
}

.approval_container {
  padding: 13.86667vw  2.66667vw 4vw;
}

.no_more {
  display: flex;
  align-items: center;
  justify-content: center;
}

.no_more_content {
  padding: 2.66667vw;
  font-size: 2.93333vw;
  color: #b13a3d;
}

.message_content {
  height: calc(var(--vh, 1vh) * 100 - 12.26667vw);
  padding: 4vw 4vw;
  overflow: hidden;
  background-color: #f4f4f4;
}

.details_container {
  background-color: #f4f4f4 !important;
}
</style>
