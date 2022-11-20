<template>
  <div class="message_container">
    <div class="nav_bar">
      <Title :title="title" />
    </div>
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div
        v-if="len === 0"
        class="message_content"
      >
        <Enpty />
      </div>
      <div
        v-else
        class="message_content"
      >
        <div class="message_content_content">
          <div
            v-for="(item, index) in messageList"
            :key="index"
            class="content_item"
          >
            <div v-if="item.isShow === false">
              <div
                class="content_item_title"
                @click="zhankai(item)"
              >
                <p class="content_item_title_title">
                  过期提醒
                </p>
                <p class="already_read">
                  已读
                </p>
              </div>
              <div class="content_date">
                {{ item.createDate }}
              </div>
            </div>
            <div v-else>
              <div class="content_item_title">
                <p class="content_item_title_title">
                  过期提醒
                </p>
                <p class="already_read">
                  {{ item.createDate }}
                </p>
              </div>
              <div
                class="content_message"
                @click="zhankai(item)"
              >
                {{ item.message }}
              </div>
              <div
                class="content_btn"
                @click="shouqi(item)"
              >
                收起
              </div>
            </div>
          </div>
          <div class="no_more">
            <p class="no_more_content">
              没有更多了
            </p>
          </div>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getMessage } from '../../api/user'
import Title from '@/pages/components/Title.vue'
import Enpty from '@/pages/components/Enpty.vue'
import { Toast } from 'vant'
export default {
  name: 'MyMessage',
  components: {
    Title,
    Enpty
  },
  data () {
    return {
      messageList: [],
      len: 0,
      num: 0,
      title: '',
      isLoading: false
    }
  },
  created () {
    this.title = this.$route.meta.title
    this.getMessage()
  },
  methods: {
    getMessage () {
      const pageNo = 1
      const pageSize = 10
      const mark = ''
      getMessage(mark, { pageSize, pageNo }).then(res => {
        this.messageList = res.page.list
        this.len = res.page.list.length
        this.messageList.forEach(item => {
          this.$set(item, 'isShow', false)
        })
      })
    },
    onRefresh () {
      Toast('刷新成功')
      this.isLoading = false
      this.getMessage()
    },
    zhankai (item) {
      item.isShow = true
    },
    shouqi (item) {
      item.isShow = false
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

.message_container {
  width: 100%;
  height: 100%;
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

.content_item {
  padding: 4vw 4vw 0;
  margin-bottom: 4vw;
  overflow: hidden;
  background-color: #fff;
  border-radius: 1.33333vw;
}

.content_item_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4vw;
}

.already_read {
  font-size: 2.93333vw;
  color: #666;
}

.content_date {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  color: #868686;
  text-align: right;
}

.content_message {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  line-height: 1.8;
  text-indent: 2em;
}

.content_btn {
  font-size: 3.2vw;
  line-height: 12vw;
  color: #868686;
  text-align: center;
  border-top: 1px solid #ccc;
}

.content_item_title_title {
  font-size: 4vw;
  font-weight: 700;
  color: #282828;
}

.message_content {
  height: calc(var(--vh, 1vh) * 100 - 12.26667vw);
  padding: 4vw 4vw;
  overflow: hidden;
  background-color: #f4f4f4;
}
</style>
