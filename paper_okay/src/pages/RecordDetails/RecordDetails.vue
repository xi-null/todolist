<template>
  <div class="details_container">
    <div class="nav_bar">
      <Title
        :title="title"
        :tpath="pathName"
      />
    </div>
    <div class="process_container">
      <div class="process_container_content">
        <div class="header_container">
          <p class="header_container_title">
            {{ detailsList.leader }}的{{ detailsList.certificate }}
            <span
              v-if="detailsList.delFlag === '0'"
              class="header_container_return"
            >
              已归还
            </span>
          </p>
          <p class="header_container_tip">
            {{ detailsList.certificateId }}
          </p>
        </div>
        <ul class="form_detail detail_container_content">
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              借出时间
            </p>
            <p class="form_detail_item_text">
              {{ detailsList.startTime }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              归还时间
            </p>
            <p class="form_detail_item_text">
              {{ detailsList.endTime }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              时长
            </p>
            <p class="form_detail_item_text">
              {{ detailsList.endTime }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              借出类型
            </p>
            <p class="form_detail_item_text">
              {{ lendType }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              地点
            </p>
            <p class="form_detail_item_text">
              {{ detailsList.destination }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              事由
            </p>
            <p class="form_detail_item_text">
              {{ detailsList.reason }}
            </p>
          </li>
          <li class="form_detail_item">
            <p class="form_detail_item_title">
              归还提醒时间
            </p>
            <p class="form_detail_item_text">
              {{ detailsList.outTime }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/pages/components/Title.vue'
export default {
  components: {
    Title
  },
  data () {
    return {
      detailsList: [],
      lendType: '',
      title: '',
      pathName: '/record'
    }
  },
  created () {
    this.title = this.$route.meta.title
  },
  mounted () {
    this.detailsList = this.$route.query.lists
    this.Time = this.detailsList.endTime
    console.log('detailsList', this.detailsList)
    if (this.detailsList.lendType === '1') {
      this.lendType = '出国境借出'
    }
  }
}
</script>

<style scoped lang="scss">
.details_container {
  height: 100vh;
}

.nav_bar {
  position: sticky;
  top: 0;
  z-index: 999;
}

.header_container_return {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0 0.53333vw;
  margin-left: 2.66667vw;
  font-size: 1.6vw;
  line-height: 5vw;
  color: rgb(177, 58, 61);
  border: 1px solid rgb(177, 58, 61);
  border-radius: 133.2vw;
}

.form_detail_item {
  margin-bottom: 2.66667vw;
  line-height: 1.6;
}

.form_detail_item_title {
  font-size: 3.2vw;
  color: #868686;
}

.form_detail_item_text {
  font-size: 4vw;
}

.detail_container_content {
  padding: 4vw 4vw 1.33333vw;
  margin: 4vw 2.66667vw;
  background-color: #fff;
  border-radius: 2.66667vw;
}

.header_container_tip {
  font-size: 3.2vw;
  line-height: 1.6;
  color: #868686;
}

.header_container_title {
  display: flex;
  align-items: center;
  font-size: 4.8vw;
  line-height: 1.6;
}

.header_container {
  padding: 2.66667vw 4vw;
  background-color: #fff;
}

.process_container {
  background-color: #f4f4f4;
}

.process_container_content {
  padding-bottom: 17.06667vw;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-duration: 0ms;
  transition-property: transform;
}

.message_nav {
  position: relative;
  line-height: 22px;
  text-align: center;
  -webkit-user-select: none;
  user-select: none;
  background-color: #b13a3d;
}
</style>
