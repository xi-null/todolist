<template>
  <div class="homeview_container">
    <div
      class="home_container"
    >
      <div class="home_container_header">
        <div class="home_container_header_bg" />
        <p class="home_container_header_title">
          因私出国服务平台
        </p>
        <div
          class="home_container_header_user"
          @click="goIt('/personal')"
        >
          <div class="home_container_header_userhead">
            <img
              class="home_container_header_userhead-img"
              src="../../assets/images/userhead.jpg"
              alt=""
            >
          </div>
          <p class="home_container_header_username">
            庄晨忠
          </p>
          <img
            class="right_arrow"
            src="../../assets/images/right_arrow.png"
            alt=""
          >
        </div>
      </div>
      <div class="home_container_swiper">
        <p class="home_container_swiper-content">
          证照服务
        </p>
        <div class="home_container_swiper-img">
          <img
            class="home_container_swiper-imge"
            src="../../assets/images/middle_icon.png"
            alt=""
          >
        </div>
      </div>
      <ul class="home_container_menu">
        <li
          class="menu_item"
          @click="goIt('/apply')"
        >
          <div class="menu_item-applyimg">
            <img
              class="menu_item-applyimge"
              src="../../assets/images/apply_icon.png"
              alt=""
            >
          </div>
          <div class="menu_item_apply_content">
            <p class="menu_item_apply_title">
              用证申请
            </p>
            <span class="menu_item_apply_description">证照使用申请</span>
          </div>
        </li>
        <li
          class="menu_item"
          @click="goIt('/record')"
        >
          <div class="menu_item-applyimg">
            <img
              class="menu_item-applyimge"
              src="../../assets/images/record_icon.png"
              alt=""
            >
          </div>
          <div class="menu_item_apply_content">
            <p class="menu_item_apply_title">
              用证记录
            </p>
            <span class="menu_item_apply_description">用在哪何时在用</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="home_bar">
      <div
        class="home_bar_home_active"
      >
        <img
          class="home_bar_home_active_img"
          src="../../assets/images/home.png"
          alt=""
        >
        <div class="home_bar_home_active_content">
          首页
        </div>
      </div>
      <div
        class="home_bar_my_noactive"
        @click="goIt('/personal')"
      >
        <img
          class="home_bar_my_noactive_img"
          src="../../assets/images/my.png"
          alt=""
        >
        <div class="home_bar_my_noactive_content">
          我的
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
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
.home_container_header {
  position: relative;
  height: 64vw;
}

.home_container {
  height: calc(var(--vh, 1vh) * 100 - 13.33333vw);
  overflow: auto;
}

.home_container_header_bg {
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 61.33333vw;
  background-image: url('../../assets/images/header_background.png');
  background-size: contain;
}

.home_container_header_title {
  padding: 4vw;
  font-size: 5.33333vw;
  color: #fff;
}

.home_container_header_user {
  position: absolute;
  right: 4.66667vw;
  bottom: 0;
  left: 4.66667vw;
  display: flex;
  align-items: center;
  padding: 2.66667vw;
  background-color: #fff;
  border-radius: 1.6vw;
  box-shadow: 0 0.8vw 1.86667vw rgb(0 0 0 / 10%);
}

.home_container_header_userhead {
  position: relative;
  display: inline-block;
  width: 10.66667vw;
  height: 10.66667vw;
  overflow: hidden;
  border-radius: 50%;
}

.home_container_header_userhead-img {
  display: block;
  width: 100%;
  height: 100%;
}

.home_container_header_username {
  flex: 1;
  padding: 2.66667vw;
}

.right_arrow {
  position: relative;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.home_container_swiper {
  padding: 0 4vw;
}

.home_container_swiper-content {
  padding: 4.66667vw 0;
  font-size: 5.86667vw;
}

.home_container_swiper-img {
  width: 91vw;
  height: 35vw;
  color: #fff;
  text-align: center;
  background-color: #39a9ed;
}

.home_container_swiper-imge {
  width: 100%;
  height: 100%;
}

.home_container_menu {
  display: flex;
  padding: 4vw 4vw 1.33333vw;
}

.menu_item {
  display: flex;
  align-items: center;
  width: 38.33333vw;
  padding: 2.66667vw;
  margin-right: 2.66667vw;
  margin-bottom: 2.66667vw;
  background-color: #f4f4f4;
  border-radius: 2.66667vw;
}

.menu_item-applyimg {
  width: 8vw;
  height: 8vw;
}

.menu_item-applyimge {
  width: 100%;
  height: 100%;
}

.menu_item_apply_content {
  margin-left: 2.66667vw;
}

.menu_item_apply_title {
  margin-bottom: 2.66667vw;
  font-size: 4vw;
  font-weight: 500;
}

.menu_item_apply_description {
  font-size: 3.46667vw;
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

.home_bar_home_noactive,
.home_bar_home_active {
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

.home_bar_my_active,
.home_bar_my_noactive {
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

.home_bar_home_active_content {
  color: rgb(177, 58, 61);
}

.home_bar_my_active_content {
  color: rgb(177, 58, 61);
}

.home_bar_home_active_img {
  width: 7vw;
  height: 7vw;
}

.home_bar_my_active_img {
  width: 7vw;
  height: 7vw;
}

.home_bar_home_noactive_img {
  width: 7vw;
  height: 7vw;
}

.home_bar_my_noactive_img {
  width: 7vw;
  height: 7vw;
}
</style>
