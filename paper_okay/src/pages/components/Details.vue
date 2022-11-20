<template>
  <div class="process_container_content">
    <div class="header_container">
      <p class="header_container_title">
        {{ detailsList.leader }}提交的用证申请
      </p>
      <p class="header_container_tip">
        等待我处理
      </p>
    </div>
    <ul class="form_detail detail_container_content">
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          姓名
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.leader }}
        </p>
      </li>
      <li
        v-if="detailsList.sex === '0'"
        class="form_detail_item"
      >
        <p class="form_detail_item_title">
          性别
        </p>
        <p class="form_detail_item_text">
          男
        </p>
      </li>
      <li
        v-else
        class="form_detail_item"
      >
        <p class="form_detail_item_title">
          性别
        </p>
        <p class="form_detail_item_text">
          女
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          出生日期
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.birthDate }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          籍贯
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.birthplace }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          民族
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.nation }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          政治面貌
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.politicsStatus }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          身份证号码
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.idCard }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          文化程度
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.education }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          工作部门
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.department }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          职务
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.job }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          家庭住址
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.address }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          联系电话
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.tellphone }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          紧急联系人
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.emergencyContact }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          联系电话
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.emergencyPhone }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          证件名称
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.certificate }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          证件号码
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.id }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          出发时间
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.startTime }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          回程时间
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.endTime }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          目的地
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.destination }}
        </p>
      </li>
      <li class="form_detail_item">
        <p class="form_detail_item_title">
          使用事由
        </p>
        <p class="form_detail_item_text">
          {{ detailsList.reason }}
        </p>
      </li>
    </ul>
    <div class="information_container">
      <p class="information_container_title">
        流程
      </p>
      <div class="item_container">
        <div class="item_container_left">
          <div class="item_container_left_icon">
            <p class="item_container_left_icon_text">
              我
            </p>
            <div>
              <img
                class="item_container_left_icon_icon"
                src="../../assets/images/success.png"
                alt=""
              >
            </div>
          </div>
        </div>
        <div class="item_container_right">
          <div class="item_container_right_header">
            <p class="item_container_right_header_title">
              发起申请
            </p>
            <p class="item_container_right_header_time">
              {{ detailsList.createDate }}
            </p>
          </div>
          <div class="item_container_right_name">
            我
          </div>
        </div>
      </div>
      <div
        v-for="(item, index) in approvalProcessList"
        :key="index"
        class="item_container"
      >
        <div class="item_container_left">
          <div class="item_container_left_line" />
          <div class="item_container_left_icon">
            <p
              v-if="item.approval"
              class="item_container_left_icon_text"
            >
              {{ item.approval.slice(0, 1) }}
            </p>
            <div>
              <img
                class="item_container_left_icon_icon"
                :src="obj[item.status]"
                alt=""
              >
            </div>
          </div>
        </div>
        <div class="item_container_right">
          <div class="item_container_right_header">
            <p class="item_container_right_header_title">
              {{ item.currentOrganization }}
            </p>
            <p class="item_container_right_header_time">
              {{ item.createDate }}
            </p>
          </div>
          <div class="item_container_right_name">
            {{ item.approval }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getProcess } from '../../api/user'
export default {
  props: {
    applyId: {
      type: String, // 数据类型有 String、Number、Boolean、Array ...
      default: '0'// 默认值
    }
  },
  data () {
    return {
      detailsList: {},
      approvalProcessList: [],
      obj: {}
    }
  },
  created () {
    getProcess(this.applyId).then(res => {
      this.approvalProcessList = res.item.ApprovalFormList.approvalProcessList
      this.detailsList = res.item.ApprovalFormList
    })
    const obj = {
      0: require('../../assets/images/success.png'),
      1: require('../../assets/images/refuse.png'),
      4: require('../../assets/images/drawout.png'),
      5: require('../../assets/images/wait.png')
    }
    this.obj = obj
  }
}
</script>

<style lang="scss" scoped>
.item_container_left_line {
  height: 8vw;
  margin: 1.33333vw auto;
  border-left: 0.66667vw solid #ccc;
}

.item_container_right_name {
  font-size: 3.2vw;
  color: #868686;
}

.item_container_right_header_time {
  font-size: 2.93333vw;
  color: #868686;
}

.item_container_right_header_title {
  font-size: 3.73333vw;
}

.item_container_right_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.93333vw;
}

.item_container_left_icon_icon {
  position: absolute;
  right: -0.53333vw;
  bottom: -0.53333vw;
  display: inline-block;
  width: 3vw;
  height: 3vw;
  background-color: #fff;
  border: 0.53333vw solid #fffbe8;
  border-radius: 50%;
}

.item_container_left_icon_text {
  font-size: 4vw;
  line-height: 9.33333vw;
  color: #fff;
}

.item_container {
  display: flex;
  align-items: flex-end;
}

.item_container_left {
  display: flex;
  flex-direction: column;
}

.item_container_right {
  flex: 1;
  padding-left: 4vw;
}

.item_container_left_icon {
  position: relative;
  width: 9.33333vw;
  height: 9.33333vw;
  text-align: center;
  background-color: #1989fa;
  border-radius: 1.33333vw;
}

.information_container_title {
  margin-bottom: 4vw;
  font-size: 4vw;
  font-weight: 500;
}

.information_container {
  padding: 4vw;
  margin: 4vw 2.66667vw;
  background-color: #fff;
  border-radius: 2.66667vw;
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
  color: #ff976a;
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
</style>
