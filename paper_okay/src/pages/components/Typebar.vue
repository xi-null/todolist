<template>
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
          v-if="item.lable == '等待审批'"
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
          v-if="item.lable == '等待审批'"
          class="num"
        >
          {{ len }}
        </div>
        {{ item.lable }}
      </div>
    </div>
  </div>
</template>

<script>
import { getApplications, getApproval } from '../../api/user'
export default {
  props: {
    type: {
      type: String,
      default: '/apply-process'
    }
  },
  data () {
    return {
      typeList: [
        { lable: '等待审批', type: 'wait' },
        { lable: '通过', type: 'pass' },
        { lable: '拒绝', type: 'refuse' },
        { lable: '全部', type: 'all' }
      ],
      isChoose: '等待审批',
      len: 0
    }
  },
  created () {
    const status = 5
    const pageSize = 10
    const pageNo = 1
    if (this.type === '/apply-process') {
      getApplications(status, { pageSize, pageNo }).then(res => {
        this.len = res.page.count
      })
    } else {
      getApproval(status, { pageSize, pageNo }).then(res => {
        this.len = res.page.count
      })
    }
  },
  methods: {
    changeChoose (lable) {
      this.isChoose = lable
      var status
      const obj = {
        等待审批: 5,
        通过: 0,
        拒绝: 1
      }
      status = obj[lable]
      this.$emit('changeChoose', status)
    }
  }
}
</script>
<style scoped lang="scss">
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

.message_nav_kinds {
  position: fixed;
  z-index: 999;
  display: flex;
  width: 100%;
  height: 10vw;
  padding-bottom: 15px;
  background-color: #fff;
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
</style>
