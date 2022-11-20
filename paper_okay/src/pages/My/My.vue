<template>
  <div>
    <div class="my_box">
      <div class="nav_box">
        <Title />
      </div>
      <div class="personal_container">
        <div class="info_container">
          <div class="info_container_user">
            <div class="info_container_userimg">
              <img
                class="info_container_userimge"
                src="../../assets/images/userhead.jpg"
                alt=""
              >
            </div>
            <p class="info_container_username">
              庄晨忠
            </p>
            <div
              class="info_container_message"
              @click="goIt('/mymessage')"
            >
              <img
                class="info_container_usermessage"
                src="../../assets/images/messages.png"
                alt=""
              >
              <div class="info_container_usermessage_number">
                0
              </div>
            </div>
          </div>
          <div class="info_container_banner">
            <img
              class="info_container_banner_img"
              src="../../assets/images/my_header_icon.png"
              alt=""
            >
          </div>
        </div>
        <div class="menu_container">
          <div
            v-for="item in list"
            :key="item.label"
          >
            <div
              class="menu_container_item"
              @click="goIt(item.pathName)"
            >
              <img
                class="menu_container_item_message_img"
                :src="item.picSrc"
                alt=""
              >
              <div class="menu_container_item_message_content">
                <span>{{ item.label }}</span>
              </div>
              <img
                class="menu_container_item_right_arrow"
                src="../../assets/images/right_arrow.png"
                alt=""
              >
            </div>
          </div>
        </div>
        <button
          class="logout"
          @click="logout"
        >
          退出登录
        </button>
      </div>
    </div>
    <div class="home_bar">
      <div
        class="home_bar_home_noactive"
        @click="changeHome()"
      >
        <img
          class="home_bar_home_noactive_img"
          src="../../assets/images/home_no.png"
          alt=""
        >
        <div class="home_bar_home_noactive_content">
          首页
        </div>
      </div>
      <div
        class="home_bar_my_active"
      >
        <img
          class="home_bar_my_active_img"
          src="../../assets/images/my_on.png"
          alt=""
        >
        <div class="home_bar_my_active_content">
          我的
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/pages/components/Title.vue'
export default {
  name: 'MyApply',
  components: {
    Title
  },
  data () {
    return {
      list: [
        { pathName: '/mymessage', label: '我的信息', picSrc: require('../../assets/images/message.png') },
        { pathName: '/mydetails', label: '个人信息', picSrc: require('../../assets/images/mydetails.png') },
        { pathName: '/myapply', label: '我的申请', picSrc: require('../../assets/images/myapply.png') },
        { pathName: '/myapproval', label: '我的审批', picSrc: require('../../assets/images/myapproval.png') }
      ]
    }
  },
  methods: {
    logout () {
      this.$router.push(
        {
          path: '/login'
        }
      )
    },
    changeHome () {
      this.$router.push(
        {
          path: '/home'
        }
      )
    },
    goIt (tpath) {
      this.$router.push(
        {
          path: tpath
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
.nav_box {
  z-index: 999;
}

.home_bar {
  position: sticky;
  bottom: 0;
  box-sizing: content-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: 12.66667vw;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  background-color: #fff;
  border: 1px solid #ebedf0;
}

.home_bar_home_noactive {
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
}

.home_bar_my_active {
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
}

.home_bar_my_active_content {
  color: rgb(177, 58, 61);
}

.home_bar_my_active_img {
  width: 7vw;
  height: 7vw;
}

.home_bar_home_noactive_img {
  width: 7vw;
  height: 7vw;
}

.my_box {
  height: calc(var(--vh, 1vh) * 100 - 13.33333vw);
  overflow: auto;
  background-color: #f1f3f5 !important;
}

.my_box_nav {
  position: relative;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 12.13333vw;
  line-height: 22px;
  text-align: center;
  background-color: #b13a3d;
}

.my_box_navtitle {
  max-width: 60%;
  margin: 0 auto;
  font-size: 4.2vw;
  font-weight: 500;
  color: #fff;
}

.info_container_user {
  display: flex;
  align-items: center;
  padding: 4vw 4vw 16vw;
  background-color: #fff;
}

.info_container_userimg {
  position: relative;
  display: inline-block;
  width: 10.66667vw;
  height: 10.66667vw;
  overflow: hidden;
  border-radius: 50%;
  -webkit-tap-highlight-color: transparent;
}

.info_container_userimge {
  width: 100%;
  height: 100%;
}

.info_container_username {
  flex: 1;
  padding: 0 2.66667vw;
  font-size: 4vw;
}

.info_container_message {
  position: relative;
  display: inline-block;
}

.info_container_usermessage {
  width: 5vw;
  height: 5vw;
}

.info_container_usermessage_number {
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  display: inline-block;
  min-width: 16px;
  padding: 0 3px;
  font-size: 1vw;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  background-color: #ee0a24;
  border: 1px solid #fff;
  border-radius: 50%;
  transform: translate(50%, -50%);
  transform-origin: 100%;
}

.info_container_banner {
  height: 26.66667vw;
  margin: -13.33333vw 4vw 0;
  overflow: hidden;
  border-radius: 4vw;
}

.info_container_banner_img {
  position: relative;
  width: 100%;
  height: 100%;
}

.menu_container {
  position: relative;
  margin-top: 5.33333vw;
  background-color: #fff;
}

.menu_container_item {
  position: relative;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2.9vw 2vw;
  overflow: hidden;
  line-height: 24px;
  color: #323233;
  background-color: #fff;
}

.menu_container_item_message_img {
  width: 5.5vw;
  height: 5.5vw;
  margin-right: 2%;
}

.menu_container_item_message_content {
  display: flex;
  flex: 1;
  align-items: center;
  font-size: 3.5vw !important;
  color: #323233;
}

.menu_container_item_right_arrow {
  position: relative;
  height: 5vw;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.logout {
  width: 100%;
  padding: 4vw 0;
  margin-top: 5.33333vw;
  font-size: 3.46667vw;
  color: #b13a3d;
  text-align: center;
  background-color: #fff;
  border: none;
  outline: none;
}
</style>
