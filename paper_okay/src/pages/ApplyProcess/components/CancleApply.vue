<template>
  <div>
    <div class="nav_bar">
      <Title
        :title="title"
        v-on="$listeners"
      />
    </div>
    <div class="reason_container">
      <div class="reason_container_input">
        <div class="reason_container_input_body">
          <textarea
            id=""
            v-model="canclereason"
            class="van-field__control"
            placeholder="请输入原因"
            name="reason"
            cols="30"
            rows="10"
          />
        </div>
      </div>
    </div>
    <div class="cancel_container_btn">
      <button
        class="cancel_container_btn_btn"
        @click="cancle()"
      >
        确定
      </button>
    </div>
  </div>
</template>

<script>
import Title from '@/pages/components/Title.vue'
import { deleteApply } from '../../../api/user'
export default {
  components: {
    Title
  },
  props: {
    applyId: {
      type: String, // 数据类型有 String、Number、Boolean、Array ...
      default: '0'// 默认值
    }
  },
  data () {
    return {
      canclereason: '',
      title: '取消用证申请'
    }
  },
  methods: {
    returnPre2 () {
      const isShow = true
      this.$emit('closeCancle', isShow)
    },
    cancle () {
      const applyId = this.applyId
      const reason = this.canclereason
      deleteApply(applyId, reason).then(res => {
        console.log('tag', res)
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.nav_bar {
  position: sticky;
  top: 0;
  z-index: 999;
}

.cancel_container_btn {
  position: fixed;
  bottom: 5.13333vw;
  left: 0;
  width: 100%;
  padding: 5.33333vw 8vw;
}

.cancel_container_btn_btn {
  padding: 0 40vw;
  font-size: 1.86667vw;
  color: #fff;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
  border-radius: 133.2vw;
}

.van-field__control {
  color: #323233;
}

.reason_container_input_body {
  display: flex;
  align-items: center;
  color: #323233;
  text-align: left;
}

.reason_container_input {
  flex: 1;
  overflow: visible;
  color: #323233;
  text-align: left;
}

.reason_container {
  display: flex;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  color: #323233;
  background-color: #fff;
}
</style>
