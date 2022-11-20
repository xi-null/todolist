import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login/Login.vue'
import MyMessage from '@/pages/MyMessage/MyMessage.vue'
import MyDetails from '@/pages/MyDetails/MyDetails.vue'
import MyApply from '@/pages/MyApply/MyApply.vue'
import MyApproval from '@/pages/MyApproval/MyApproval.vue'
import Apply from '@/pages/Apply/Apply.vue'
import Record from '@/pages/Record/Record.vue'
import ApplyProcess from '@/pages/ApplyProcess/ApplyProcess.vue'
import ApprovalDetails from '@/pages/ApprovalDetails/ApprovalDetails.vue'
import RecordDetails from '@/pages/RecordDetails/RecordDetails.vue'
import My from '@/pages/My/My.vue'
export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/mymessage',
    component: MyMessage,
    meta: {
      title: '我的信息'
    }
  },
  {
    path: '/mydetails',
    component: MyDetails,
    meta: {
      title: '个人信息'
    }
  },
  {
    path: '/myapply',
    component: MyApply,
    meta: {
      title: '我的申请'
    }
  },
  {
    path: '/myapproval',
    component: MyApproval,
    meta: {
      title: '我的审批'
    }
  },
  {
    path: '/apply',
    component: Apply,
    meta: {
      title: '用证申请'
    }
  },
  {
    path: '/record',
    component: Record,
    meta: {
      title: '用证记录'
    }
  },
  {
    path: '/apply-process',
    component: ApplyProcess,
    meta: {
      title: '申请详情'
    }
  },
  {
    path: '/approval-details',
    component: ApprovalDetails,
    meta: {
      title: '审批详情'
    }
  },
  {
    path: '/record-details',
    component: RecordDetails,
    meta: {
      title: '记录详情'
    }
  },
  {
    path: '/personal',
    component: My,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/home',
    component: Home
  }
]
