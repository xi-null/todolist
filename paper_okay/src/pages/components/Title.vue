<template>
  <div class="message_nav">
    <div class="message_nav_content">
      <div
        v-if="title !== '我的'"
        class="message_nav_content_left"
        @click="returnHome()"
      >
        <img
          class="message_left_arrow"
          src="../../assets/images/left_arrow.png"
          alt=""
        >
        <span class="message_return">返回</span>
      </div>
      <div class="message_nav_content_title">
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '我的'
    },
    tpath: {
      type: String,
      default: 'personal'
    }
  },
  created () {
    if (!this.title) { this.title = this.$route.meta.title }
  },
  methods: {
    returnHome () {
      if (this.title === '选择地点') {
        const isShowNational = false
        this.$emit('close', isShowNational)
      } else if (this.title === '取消用证申请') {
        const isShow = true
        this.$emit('closeCancle', isShow)
      } else {
        this.$router.push(
          {
            path: this.tpath
          }
        )
      }
    }
  }
}
</script>
<style>
.message_nav {
  position: relative;
  line-height: 22px;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
  background-color: #b13a3d;
}

.message_nav_content {
  position: relative;
  display: flex;
  align-items: center;
  height: 10.9vw;
}

.message_nav_content_left {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
}

.message_left_arrow {
  width: 6vw;
  height: 6vw;
  text-align: center;
}

.message_return {
  position: relative;
  z-index: 1;
  font-size: 3.5vw;
  color: #fff;
  text-align: center;
}

.message_nav_content_title {
  max-width: 60%;
  margin: 0 auto;
  font-size: 4.2vw;
  font-weight: 500;
  color: #fff;
}
</style>
