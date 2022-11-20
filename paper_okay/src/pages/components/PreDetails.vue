<template>
  <div>
    <div
      v-for="item in applyList"
      :key="item.applyId"
      class="content_container"
      @click="toApplyProcess(item.applyId)"
    >
      <div class="card_container">
        <div class="card_container_header">
          <p class="card_container_header_title">
            {{ item.leader }}提交的用证申请
          </p>
          <p class="card_container_header_time">
            {{ item.updateDate }}
          </p>
        </div>
        <div class="card_container_content">
          <p class="card_container_content_text">
            联系电话：{{ item.tellphone }}
          </p>
          <p class="card_container_content_text">
            工作部门：{{ item.department }}
          </p>
          <p
            v-for="item2 in item.approvalProcessList"
            :key="item2.approvalId"
            class="card_container_content_text"
          >
            当前审批节点: {{ item2.currentOrganization }} {{ item2.approval }}
          </p>
        </div>
        <div class="card_container_footer">
          <span
            v-if="item.leader"
            class="card_container_footer_tag"
          >{{ item.leader.slice(0, 1) }}</span>
          <p class="card_container_footer_name">
            由{{ item.leader }}提交
          </p>
          <span
            v-for="item2 in typeList"
            :key="item2.remark"
          >
            <span v-if="item.status === item2.remark">
              <span
                :id="item2.idName"
                class="wait_approval"
              >{{ item2.lable }}</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getApplications, getApproval } from '../../api/user'
export default {
  props: {
    applyList: {
      type: Array,
      default () {
        return []
      }
    },
    type: {
      type: String,
      default: '/approval-details'
    }
  },
  data () {
    return {
      typeList: [
        { remark: '5', lable: '等待审批', idName: 'wait' },
        { remark: '0', lable: '通过', idName: 'pass' },
        { remark: '1', lable: '拒绝', idName: 'refuse' },
        { remark: '4', lable: '撤回', idName: 'drawout' }
      ]
    }
  },
  watch: {
    applyList: {
      handler: function (newVal, oldVal) {
        this.applyList = newVal
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    toApplyProcess (id) {
      this.$router.push(
        {
          path: this.type,
          query: {
            applyId: id
          }
        }
      )
    },
    getList () {
      const status = 5
      const pageSize = 10
      const pageNo = 1
      if (this.type === '/apply-process') {
        getApproval(status, { pageSize, pageNo }).then(res => {
          this.applyList = res.page.list
        })
      } else {
        getApplications(status, { pageSize, pageNo }).then(res => {
          this.applyList = res.page.list
        })
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.content_container {
  padding: 0 2.66667vw 1vw;
  background-color: #f4f4f4;
}

.card_container {
  padding: 5.33333vw;
  margin-top: 4vw;
  background-color: #fff;
  border-radius: 2.66667vw;
}

.card_container_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card_container_header_title {
  font-size: 3.26667vw;
}

.card_container_header_time {
  font-size: 2.93333vw;
  color: #868686;
}

.card_container_content {
  padding: 4vw 0;
  font-size: 3.46667vw;
  line-height: 1.8;
  color: #868686;
}

.card_container_footer {
  display: flex;
  align-items: center;
}

.card_container_footer_tag {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 1.53333vw 0.8vw;
  font-size: 1.6vw;
  line-height: 2.13333vw;
  color: #fff;
  background-color: #1989fa;
  border-radius: 0.26667vw;
}

.card_container_footer_name {
  flex: 1;
  padding: 0 2.66667vw;
  font-size: 3.73333vw;
}

.wait_approval {
  display: inline-flex;
  align-items: center;
  padding: 0 0.53333vw;
  font-size: 1.6vw;
  line-height: 5vw;
  border-radius: 133.2vw;
}

#wait {
  color: #1989fa;
  border: 1px solid #1989fa;
}

#pass {
  color: #07c160;
  border: 1px solid #07c160;
}

#refuse {
  color: #ee0a24;
  border: 1px solid #ee0a24;
}

#drawout {
  color: #969799;
  border: 1px solid #969799;
}
</style>
