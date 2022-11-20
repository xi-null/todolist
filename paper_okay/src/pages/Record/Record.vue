<template>
  <div class="record_container">
    <div class="nav_bar">
      <Title :title="title" />
    </div>
    <div class="message_nav_kinds">
      <div
        v-for="(item, index) in typeList"
        :key="index"
        class="message_nav_kind"
        @click="changeChoose(item.lable)"
      >
        <div
          v-if="isChoose == item.lable"
          class="kind_name_active"
        >
          {{ item.lable }}
          <div
            v-if="item.lable == '未归还'"
            class="num"
          >
            {{ len }}
          </div>
          <div class="active_line" />
        </div>
        <div
          v-else
          class="kind_name"
        >
          <div
            v-if="item.lable == '未归还'"
            class="num"
          >
            {{ len }}
          </div>
          {{ item.lable }}
        </div>
      </div>
    </div>
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div class="content_container">
        <div
          v-if="lengths !== 0"
          class="record_container_content"
        >
          <div
            v-for="(item, index) in recordList"
            :key="index"
            class="card"
            @click="toDetais(item)"
          >
            <div class="card_header">
              <p class="card_header_title">
                {{ item.leader }}的{{ item.certificate }}
              </p>
              <p class="card_header_time">
                {{ item.certificateId }}
              </p>
            </div>
            <div class="card_content">
              <div class="left">
                <p class="card_content_text">
                  借出时间: {{ item.startTime }}
                </p>
                <p class="card_content_text">
                  归还时间: {{ item.returnTime }}
                </p>
                <p
                  v-if="item.lendType === '1'"
                  class="card_content_text"
                >
                  借出类型:出国境借出
                </p>
                <p class="card_content_text">
                  地点: {{ item.destination }}
                </p>
                <p class="card_content_text">
                  事由: {{ item.reason }}
                </p>
              </div>
            </div>
            <div class="card_footer">
              <span class="card_footer_primary">
                {{ item.leader.slice(0, 1) }}
              </span>
              <p class="card_footer_name">
                由 {{ item.leader }} 提交
              </p>
            </div>
          </div>
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
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import Title from '@/pages/components/Title.vue'
import { getHistory } from '../../api/user'
import Enpty from '@/pages/components/Enpty.vue'
import { Toast } from 'vant'
export default {
  name: 'Record',
  components: {
    Title,
    Enpty
  },
  data () {
    return {
      typeList: [
        { lable: '未归还', type: 'noReturun' },
        { lable: '已归还', type: 'returuned' },
        { lable: '全部', type: 'all' }
      ],
      isChoose: '未归还',
      recordList: [],
      len: 0,
      lengths: 0,
      isLoading: false,
      status: 0
    }
  },
  created () {
    this.title = this.$route.meta.title
    this.getHistory()
  },
  methods: {
    getHistory () {
      const pageNo = 1
      const pageSize = 30
      const status = this.status
      const applyId = window.localStorage.getItem('userid')
      getHistory(status, { pageNo, pageSize }, applyId).then(res => {
        if (this.status === 0) {
          this.len = res.page.count
        }
        this.lengths = res.page.count
        this.recordList = res.page.list
      })
    },
    onRefresh () {
      Toast('刷新成功')
      this.isLoading = false
      this.getMessage()
    },
    changeChoose (lable) {
      this.isChoose = lable
      if (lable === '已归还') {
        this.status = 1
      }
      if (lable === '未归还') {
        this.status = 0
      }
      this.getHistory()
    },
    toDetais (list) {
      this.$router.push(
        {
          path: '/record-details',
          query: {
            lists: list
          }
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
.nav_bar {
  position: sticky;/* 新属性sticky */
  top: 0;/* 距离页面顶部距离 */
  z-index: 999;
}

.card_footer_name {
  flex: 1;
  padding: 0 2.66667vw;
  font-size: 4vw;
}

.card_footer_primary {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 1.26667vw 0.8vw;
  font-size: 1.6vw;
  line-height: 2.13333vw;
  color: #fff;
  background-color: rgb(177, 58, 61);
  border-radius: 0.26667vw;
}

.left {
  color: #868686;
}

.card_footer {
  display: flex;
  align-items: center;
}

.card_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4vw 0;
  font-size: 3.46667vw;
  line-height: 1.8;
  color: #868686;
}

.card_header_time {
  font-size: 2.93333vw;
  color: #868686;
}

.card_header_title {
  display: flex;
  align-items: center;
  font-size: 4vw;
}

.card_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card {
  padding: 5.33333vw;
  margin-top: 4vw;
  background-color: #fff;
  border-radius: 2.66667vw;
}

.record_container_content {
  padding: 12.33333vw 2.66667vw 4vw;
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

.content {
  padding: 4vw 0;
}

.message_content_empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
}

.message_content_empty_img {
  width: 42vw;
  height: 42vw;
}

.message_content_empty_imge {
  width: 100%;
  height: 100%;
}

.message_content_empty_description {
  padding: 0 12vw;
  margin-top: 2.13vw;
  font-size: 4vw;
  line-height: 2.667vw;
  color: #969799;
}

.record_container {
  background-color: #fafafa !important;
}

.active_line {
  position: absolute;
  bottom: -5.5vw;
  left: 0.45vw;
  z-index: 1;
  width: 8.33333vw;
  height: 0.8vw;
  background-color: #b13a3d;
  border-radius: 0.4vw;
}

.kind_name {
  position: relative !important;
  display: inline-block;
}

.kind_name_active {
  position: relative !important;
  display: inline-block;
  font-weight: 500;
  color: #323233;
}

.num {
  position: absolute;
  top: -2.73333vw;
  right: -3.93333vw;
  display: inline-block;
  padding: 0 0.63333vw;
  font-size: 13px;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  background-color: #ee0a24;
  border: 1px solid #fff;
  border-radius: 50%;
}

.message_nav_kind {
  position: relative;
  display: inline-block;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  overflow: inherit;
  font-size: 3.4vw;
  line-height: 20px;
  color: #646566;
  cursor: pointer;
}

.message_nav_kinds {
  position: fixed;
  z-index: 999;
  display: flex;
  width: 100%;
  height: 10vw;
  padding-bottom: 15px;
  background-color: #fff;
}
</style>
