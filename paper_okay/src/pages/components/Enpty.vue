<template>
  <div class="content">
    <div class="message_content_empty">
      <div class="message_content_empty_img">
        <img
          class="message_content_empty_imge"
          src="../../assets/images/empty_image.png"
          alt=""
        >
        <p class="message_content_empty_description">
          暂无数据
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.content {
  padding: 4vw 0;
}

.message_content_empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
}

.message_content_empty_img {
  width: 42vw;
  height: 42vw;
}

.message_content_empty_imge {
  width: 100%;
  height: 100%;
}

.message_content_empty_description {
  padding: 0 12vw;
  margin-top: 2.13vw;
  font-size: 4vw;
  line-height: 2.667vw;
  color: #969799;
}
</style>
