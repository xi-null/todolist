<template>
  <van-index-bar v-if="type === '港澳通行证'">
    <div
      v-for="item in Cgalist"
      :key="item.remark"
    >
      {{ item }}
      <van-index-anchor
        :index="item.remark"
        class="item_container_remark"
      />
      <div
        v-for="item2 in item.List"
        :key="item2.id"
        class="item_container"
        @click="choose(item2.label)"
      >
        {{ item2 }}
        <van-cell :title="item2.label" />
      </div>
    </div>
  </van-index-bar>
  <van-index-bar v-else-if="type === '台湾通行证'">
    <div
      v-for="item in Ctwlist"
      :key="item.remark"
    >
      <van-index-anchor
        :index="item.remark"
        class="item_container_remark"
      />
      <div
        v-for="item2 in item.List"
        :key="item2.id"
        class="item_container"
        @click="choose(item2.label)"
      >
        <van-cell :title="item2.label" />
      </div>
    </div>
  </van-index-bar>
  <van-index-bar v-else>
    <div
      v-for="item in NationList"
      :key="item.remark"
    >
      <van-index-anchor
        :index="item.remark"
        class="item_container_remark"
      />
      <div
        v-for="item2 in item.List"
        :key="item2.id"
        class="item_container"
        @click="choose(item2.label)"
      >
        <van-cell :title="item2.label" />
      </div>
    </div>
  </van-index-bar>
</template>

<script>
import { getCity } from '../../../api/user'
export default {
  props: {
    destination: {
      type: String,
      default: '0'
    },
    type: {
      type: String,
      default: '外交护照'
    }
  },
  data () {
    return {
      NationList: [
        { remark: 'A', List: [] },
        { remark: 'B', List: [] },
        { remark: 'C', List: [] },
        { remark: 'D', List: [] },
        { remark: 'E', List: [] },
        { remark: 'F', List: [] },
        { remark: 'G', List: [] },
        { remark: 'H', List: [] },
        { remark: 'I', List: [] },
        { remark: 'J', List: [] },
        { remark: 'K', List: [] },
        { remark: 'L', List: [] },
        { remark: 'M', List: [] },
        { remark: 'N', List: [] },
        { remark: 'O', List: [] },
        { remark: 'P', List: [] },
        { remark: 'Q', List: [] },
        { remark: 'R', List: [] },
        { remark: 'S', List: [] },
        { remark: 'T', List: [] },
        { remark: 'U', List: [] },
        { remark: 'V', List: [] },
        { remark: 'W', List: [] },
        { remark: 'X', List: [] },
        { remark: 'Y', List: [] },
        { remark: 'Z', List: [] }
      ],
      Cgalist: [{ remark: 'Z', List: [] }],
      Ctwlist: [{ remark: 'Z', List: [] }],
      nationList: []
    }
  },
  created () {
    const type = 'national'
    getCity(type).then(res => {
      this.nationList = res.page.list
      for (var i = 0; i < this.NationList.length; i++) {
        this.NationList[i].List = this.nationList.filter(item => this.NationList[i].remark === item.remarks)
      }
      for (var j = 0; j < this.Cgalist.length; j++) {
        this.Cgalist[j].List = this.nationList.filter(item => item.label === '中国-香港' || item.label === '中国-澳门')
      }
      for (var k = 0; k < this.Ctwlist.length; k++) {
        this.Ctwlist[k].List = this.nationList.filter(item => item.label === '中国-台湾')
      }
    })
  },
  methods: {
    choose (name) {
      this.$emit('getDestination', name)
    }
  }
}
</script>
<style lang="scss" scoped>
.item_container_remark {
  background-color: #fafafa;
}
</style>
