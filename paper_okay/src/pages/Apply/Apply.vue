<template>
  <div
    v-if="isShowNational === false"
    class="details_container"
  >
    <div class="nav_bar">
      <Title
        :title="title"
        :tpath="pathName"
      />
    </div>
    <div class="content_container">
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>姓名</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.xm"
              class="input_in"
              type="text"
              placeholder="请输入你的姓名"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的姓名'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>性别</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <template>
              <van-radio-group
                v-model="userList.xbm"
                direction="horizontal"
              >
                <van-radio name="0">
                  男
                </van-radio>
                <van-radio name="1">
                  女
                </van-radio>
              </van-radio-group>
            </template>
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>出生日期</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.csrq"
              class="input_in"
              type="text"
              placeholder="请选择你的出生日期"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请选择你的出生日期'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>籍贯</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.jgm"
              class="input_in"
              type="text"
              placeholder="请输入你的籍贯"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的籍贯'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>民族</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.mzm"
              class="input_in"
              type="text"
              placeholder="请输入你的民族"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的民族'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>政治面貌</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.zzmmm"
              class="input_in"
              type="text"
              placeholder="请输入你的政治面貌"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的政治面貌'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>身份证号码</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.id"
              class="input_in"
              type="text"
              placeholder="请输入你的身份证号码"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的身份证号码'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>文化程度</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="culturelever"
              class="input_in"
              type="text"
              placeholder="请输入你的文化程度"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的文化程度'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>工作部门</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.sjtszdw"
              class="input_in"
              type="text"
              placeholder="请输入你的工作部门"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的工作部门'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>职务</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.przyjszwm"
              class="input_in"
              type="text"
              placeholder="请输入你的职务"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的职务'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>家庭住址</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.jtzz"
              class="input_in"
              type="text"
              placeholder="请输入你的家庭住址"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的家庭住址'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>联系电话</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.phone"
              class="input_in"
              type="text"
              placeholder="请输入你的联系电话"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的联系电话'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>紧急联系人</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.yjlxr"
              class="input_in"
              type="text"
              placeholder="请输入你的紧急联系人"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的紧急联系人'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>紧急联系电话</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="userList.yjlxrdh"
              class="input_in"
              type="text"
              placeholder="请输入你的紧急联系电话"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请输入你的紧急联系电话'"
            >
          </div>
        </div>
      </div>
      <div class="content_item">
        <div class="content_item_name">
          <span class="must">*</span>
          <span>选择证件</span>
        </div>
        <div class="content_item_input">
          <div class="content_item_input_in">
            <input
              v-model="certificateList"
              class="input_in"
              type="text"
              placeholder="请选择申请的证件"
              onfocus="this.placeholder=''"
              onblur="this.placeholder='请选择申请的证件'"
              @click="showPopup('certification')"
            >
            <van-popup
              v-model="show"
              position="bottom"
              :style="{ height: '60%' }"
            >
              <van-checkbox-group v-model="certificateList">
                <div
                  v-for="item in CardList"
                  :key="item"
                >
                  <van-checkbox
                    :name="item"
                    class="certi_item"
                  >
                    {{ item }}
                  </van-checkbox>
                </div>
              </van-checkbox-group>
              <div class="confirm_certi_btn">
                <button
                  class="confirm_certi"
                  @click="showChoose()"
                >
                  <div class="bar" />
                  确认
                </button>
              </div>
            </van-popup>
          </div>
        </div>
      </div>
      <div
        v-for="(item, index) in CardDetailList"
        :key="index"
        class="cardDetailList"
      >
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>申领证照名称</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
              <input
                v-model="item.cardName"
                class="input_in"
                type="text"
              >
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>是否新证</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
              <div
                class="input_in"
              >
                {{ item.isNewCard }}
              </div>
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>开始时间</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
              <input
                v-model="item.startTime"
                class="input_in"
                type="text"
                placeholder="请选择开始时间"
                onblur="this.placeholder='请选择开始时间'"
                @click="showPopup('startTime',index)"
              >
              <van-popup
                v-model="item.startTimeShow"
                position="bottom"
                :style="{ height: '60%' }"
              >
                <van-datetime-picker
                  v-model="item.startTimePicker"
                  type="date"
                  :columns-order="['year', 'month', 'day',]"
                  :formatter="formatter"
                  item-height="12vw"
                  :min-date="today"
                  @confirm="((val) => {clickIt(val,index,'startTime')})"
                  @cancel="(() => {closeTimer(index,'startTime')})"
                />
              </van-popup>
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>结束时间</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
              <input
                v-model="item.endTime"
                class="input_in"
                type="text"
                placeholder="请选择结束时间"
                onblur="this.placeholder='请选择结束时间'"
                @click="showPopup('endTime',index)"
              >
              <van-popup
                v-model="item.endTimeShow"
                position="bottom"
                :style="{ height: '60%' }"
              >
                <van-datetime-picker
                  v-model="item.endTimePicker"
                  type="date"
                  :columns-order="['year', 'month', 'day',]"
                  :formatter="formatter"
                  item-height="12vw"
                  :min-date="item.startday"
                  @confirm="((val) => {clickIt(val,index,'endTime')})"
                  @cancel="(() => {closeTimer(index,'endTime')})"
                />
              </van-popup>
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>选择城市</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
              <input
                v-model="item.city"
                class="input_in"
                type="text"
                placeholder="请选择一个城市"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='请选择一个城市'"
                @click="showNational(index)"
              >
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>具体地点</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
              <input
                v-model="item.detailCity"
                class="input_in"
                type="text"
                placeholder="请输入具体地点"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='请输入具体地点'"
              >
            </div>
          </div>
        </div>
        <div class="content_item">
          <div class="content_item_name">
            <span class="must">*</span>
            <span>使用事由</span>
          </div>
          <div class="content_item_input">
            <div class="content_item_input_in">
              <input
                v-model="item.reason"
                class="input_in"
                type="text"
                placeholder="请输入使用事由"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='请输入使用事由'"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="form_footer_btn">
        <button
          class="form_footer_btn_in"
          @click="submitApply()"
        >
          提交
        </button>
      </div>
    </div>
    <div
      v-if="isShowAttention === true"
      class="attention_container"
    >
      <Attention @closeAttention="CloseAttention" />
    </div>
  </div>
  <div
    v-else
    class="details_container"
  >
    <div class="national_container">
      <div class="nav_bar">
        <div class="message_nav">
          <Title
            :title="title2"
            @close="CloseNational"
          />
        </div>
      </div>
      <div class="nation_container">
        <Nation
          :type="certificateType"
          @getDestination="Destination"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getUser, submitApply, getCity } from '../../api/user'
import Title from '@/pages/components/Title.vue'
import Nation from '@/pages/Apply/components/Nation.vue'
import Attention from '@/pages/Apply/components/Attention.vue'
export default {
  name: 'Apply',
  components: {
    Title,
    Nation,
    Attention
  },
  data () {
    return {
      data: new FormData(),
      show: false,
      culturelever: '',
      isShowAttention: true,
      isShowNational: false,
      userList: {},
      today: new Date(),
      title2: '选择地点',
      pathName: '/',
      title: '',
      certificateList: [],
      CardDetailList2: [],
      CardList: [],
      NationIndex: 0,
      certificateType: ''
    }
  },
  computed: {
    CardDetailList () {
      console.log('tag2222', this.CardDetailList2)
      console.log('tag11', this.certificateList.indexOf(this.CardDetailList2.cardName))
      return this.CardDetailList2.filter(item => this.certificateList.indexOf(item.cardName) >= 0)
    }
  },
  watch: {
    certificateList (newVal, oldVal) {
      this.certificateList = newVal
    }
  },
  created () {
    this.title = this.$route.meta.title
    getUser().then(res => {
      this.userList = res.item.user
    })
    const type = 'education'
    getCity(type).then(res => {
      for (var i = 0; i < res.page.list.length; i++) {
        if (res.page.list[i].value === this.userList.xwm) {
          this.culturelever = res.page.list[i].label
        }
      }
    })
    const type2 = 'paperwork_type'
    getCity(type2).then(res => {
      for (var i = 0; i < res.page.list.length; i++) { this.CardList.push(res.page.list[i].label) }
      this.CardDetailList2 = this.CardList.map(item => {
        return {
          cardName: item,
          cardID: '无',
          isNewCard: '是',
          startTime: '',
          endTime: '',
          startTimePicker: new Date(),
          endTimePicker: new Date(),
          startday: new Date(),
          startTimeShow: false,
          endTimeShow: false,
          city: '',
          detailCity: '',
          reason: ''
        }
      })
    })
  },
  methods: {
    submitApply () {
      const form = {
        leader: this.userList.xm,
        sex: this.userList.xbm,
        birthDate: this.userList.csrq,
        birthplace: this.userList.jgm,
        nation: this.userList.mzm,
        politicsStatus: this.userList.zzmmm,
        idCard: this.userList.id,
        education: this.culturelever,
        department: this.userList.sjtszdw,
        job: this.userList.przyjszwm,
        address: this.userList.jtzz,
        tellphone: this.userList.phone,
        emergencyContact: this.userList.yjlxr,
        emergencyPhone: this.userList.yjlxrdh,
        approvalFormEntityList: this.CardDetailList.map(item => {
          console.log('tag12', this.CardList)
          console.log('tag12', this.CardList.indexOf(item.cardName))
          return {
            certificate: item.cardName,
            certificateId: '',
            destination: item.city + item.detailCity,
            reason: item.reason,
            startTime: item.startTime,
            endTime: item.endTime,
            type: `${this.CardList.indexOf(item.cardName) + 1}`
          }
        })
      }
      console.log('tag', form)
      submitApply(form).then(res => {
        console.log('tag', form)
      })
    },
    clickIt (val, index, type) {
      var timer = val
      const year2 = timer.getFullYear()
      const month2 = timer.getMonth() + 1
      const day2 = timer.getDate()
      if (type === 'startTime') {
        this.CardDetailList[index].startTimeShow = false
        this.CardDetailList[index].startTime = `${year2}-${month2}-${day2}`
        this.CardDetailList[index].startday = val
      } else {
        this.CardDetailList[index].endTimeShow = false
        this.CardDetailList[index].endTime = `${year2}-${month2}-${day2}`
      }
    },
    closeTimer (index, type) {
      if (type === 'startTime') { this.CardDetailList[index].startTimeShow = false } else { this.CardDetailList[index].endTimeShow = false }
    },
    showPopup (type, index) {
      if (type === 'certification') { this.show = true } else {
        if (type === 'startTime') { this.CardDetailList[index].startTimeShow = true } else { this.CardDetailList[index].endTimeShow = true }
      }
    },
    formatter (type, val) {
      if (type === 'year') {
        return val
      }
      if (type === 'month') {
        return val
      }
      if (type === 'day') {
        return val
      }
      return val
    },
    showChoose () {
      this.show = false
    },
    showNational (index) {
      this.isShowNational = true
      this.NationIndex = index
      this.certificateType = this.CardDetailList[index].cardName
    },
    // 按返回时关闭
    CloseNational (isShow) {
      this.isShowNational = isShow
    },
    // 选择城市之后关闭
    Destination (name) {
      this.isShowNational = false
      this.CardDetailList[this.NationIndex].city = name
    },
    CloseAttention (isShowAttention) {
      this.isShowAttention = isShowAttention
    }
  }
}
</script>

<style scoped lang="scss">
.bar {
  height: 1vh;
  padding: 0.3vh 0 0 0;
  background-color: #fafafa;
}

.cardDetailList {
  margin-bottom: 2vh;
}

.form_footer_btn {
  padding: 5.33333vw 4vw;
}

.form_footer_btn_in {
  padding: 0 40vw;
  font-size: 1.86667vw;
  line-height: 1.2;
  color: #fff;
  text-align: center;
  cursor: pointer;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
  border-radius: 999px;
}

.confirm_certi_btn {
  display: block;
  height: 3.06667vw;
  padding: 2vh 0 0 0;
  background-color: #f7f8fa;
}

.confirm_certi {
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: block;
  width: 100%;
  padding: 1.86667vw 2.13333vw;
  font-size: 4.13333vw;
  color: #646566;
  cursor: pointer;
  background-color: #fff;
  border: none;
}

.certi_item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.33333vw 0;
}

.nation_container {
  height: 100vh;
  overflow: scroll;
}

.national_container {
  height: calc(var(--vh, 1vh) * 100 - 12.26667vw);
  overflow: auto;
}

.input_in {
  box-sizing: border-box;
  display: block;
  width: 65vw;
  min-width: 0;
  line-height: inherit;
  color: #323233;
  text-align: left;
  resize: none;
  background-color: transparent;
  border: 0;
}

.content_item_input_in {
  z-index: 2;
  display: flex;
  align-items: center;
}

.must {
  left: 8px;
  font-size: 14px;
  color: #ee0a24;
}

.content_item_input {
  overflow: hidden;
  color: #969799;
  text-align: right;
  word-wrap: break-word;
  vertical-align: middle;
}

.content_item_name {
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  width: 24.5vw;
  margin-right: 3.6vw;
  color: #646566;
  text-align: left;
  word-wrap: break-word;
}

.content_item {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 1.83333vw 2.13333vw;
  overflow: hidden;
  font-size: 1.86667vw;
  line-height: 4.2vw;
  color: #323233;
  background-color: #fff;
}

.nav_bar {
  position: sticky;/* 新属性sticky */
  top: 0;/* 距离页面顶部距离 */
  z-index: 999;
}
</style>
