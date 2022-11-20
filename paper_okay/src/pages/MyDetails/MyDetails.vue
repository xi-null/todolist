<template>
  <div class="details_container">
    <div class="nav_bar">
      <div class="message_nav">
        <Title :title="title" />
      </div>
    </div>
    <div class="message_info">
      <div class="message_info_wrap">
        <div class="information_basic">
          <p class="information_title">
            基本信息
          </p>
          <div class="infor_item">
            <p class="infor_item_title">
              姓名
            </p>
            <p class="infor_item_value">
              {{ userList.xm }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              性别
            </p>
            <p class="infor_item_value">
              {{ userList.sex }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              出生日期
            </p>
            <p class="infor_item_value">
              {{ userList.csrq }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              国籍
            </p>
            <p class="infor_item_value">
              {{ userList.gjm }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              联系电话
            </p>
            <p class="infor_item_value">
              {{ userList.phone }}
            </p>
          </div>
        </div>
        <div class="information_common">
          <p class="information_title">
            常用信息
          </p>
          <div class="infor_item">
            <p class="infor_item_title">
              籍贯
            </p>
            <p class="infor_item_value">
              {{ userList.jgm }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              民族
            </p>
            <p class="infor_item_value">
              {{ userList.mzm }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              政治面貌
            </p>
            <p class="infor_item_value">
              {{ userList.zzmmm }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              身份证号
            </p>
            <p class="infor_item_value">
              {{ userList.id }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              文化程度
            </p>
            <p class="infor_item_value">
              {{ userList.xwm }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              工作部门
            </p>
            <p class="infor_item_value">
              {{ userList.sjtszdw }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              职务
            </p>
            <p class="infor_item_value">
              {{ userList.przyjszwm }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              家庭地址
            </p>
            <p class="infor_item_value">
              {{ userList.jtzz }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              应急联系人
            </p>
            <p class="infor_item_value">
              {{ userList.contact }}
            </p>
          </div>
          <div class="infor_item">
            <p class="infor_item_title">
              联系电话
            </p>
            <p class="infor_item_value">
              {{ userList.contactPhone }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUser } from '../../api/user'
import Title from '@/pages/components/Title.vue'
export default {
  name: 'MyDetails',
  components: {
    Title
  },
  data () {
    return {
      userList: {},
      title: ''
    }
  },
  created () {
    this.title = this.$route.meta.title
    getUser().then(res => {
      this.userList = res.item.user
      this.userList.contact = this.userList.yjlxr ? this.userList.yjlxr : '-'
      this.userList.contactPhone = this.userList.yjlxrdh ? this.userList.yjlxrdh : '-'
      this.userList.sex = this.userList.xbm === '1' ? '女' : '男'
    })
  }
}
</script>

<style scoped lang="scss">
.nav_bar {
  position: sticky;/* 新属性sticky */
  top: 0;/* 距离页面顶部距离 */
}

.message_info_wrap {
  padding: 8.53333vw 6.66667vw 6.66667vw;
}

.message_info {
  overflow: hidden;
}

.information_basic {
  margin-bottom: 8.53333vw;
}

.information_title {
  font-size: 5.86667vw;
  color: #282828;
}

.infor_item {
  margin: 5.86667vw 0;
}

.infor_item_title {
  font-size: 3.46667vw;
  color: #282828;
}

.infor_item_value {
  padding: 3.2vw 0;
  font-size: 4vw;
  color: #868686;
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
