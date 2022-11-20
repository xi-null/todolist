<template>
  <div class="login_container">
    <div class="login__logo" />
    <div class="login__form">
      <div class="login__form-username">
        <div class="login__form-username-img">
          <div class="login__form-username-imge" />
        </div>
        <div class="login__form-username-warp-input">
          <input
            type="text"
            class="login__form-username-input"
            placeholder="请输入账号"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入账号'"
            @blur="getUsername"
          >
        </div>
      </div>
      <div class="login__form-password">
        <div class="login__form-password-img">
          <div class="login__form-password-imge" />
        </div>
        <div class="login__form-password-warp-input">
          <input
            type="text"
            class="login__form-password-input"
            placeholder="请输入密码"
            onfocus="this.placeholder=''"
            onblur="this.placeholder='请输入密码'"
            @blur="getPassword"
          >
        </div>
      </div>
      <div class="login__form-btn">
        <button
          class="login__form-btn-submit"
          @click="Login()"
        >
          提交
        </button>
      </div>
      <div class="login__form-otherbtn">
        <button class="login__form-otherbtn-submit">
          统一身份认证登录
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { loginRequest } from '../../api/user'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      userid: ''
    }
  },
  created () {
  },
  methods: {
    Login () {
      const username = '0401fdf2e02e158f0851bd9948bd6feca05e6ddb5a7715fd5c7a68d929d3d992c216b7ec752330acb2099a447773db1fd47546b6598e2f0dd25f2ff0ca1143a9def57da67f91cf8f2b7cac4cc207088a4f1ee45c5aec1e51c4a3113ecc86ba26e702ee2c94ea7f'
      const password = '04f37264e003fa6d39600e965699fee7426287e0d7dbba6a715b0378901a970d271ab14c3d08c57b6b99b1fe66528eec9069a0d96c50c0c00870afe15ca08ef717742f116175795de4da909ea11aa2c9c292a0d81aba8cade7e61a804a82f52430d6427650110c'
      loginRequest({ username, password }).then(res => {
        if (res.errMsg === '请求成功.') {
          window.localStorage.setItem('token', res.item.token.access_token)
          window.localStorage.setItem('refresh_token', res.item.token.refresh_token)
          window.localStorage.setItem('userid', res.item.user.id)
          this.$router.push({
            path: '/'
          })
        }
      })
    },
    getUsername (event) {
      this.username = event.target.value
    },
    getPassword (event) {
      this.password = event.target.value
    }
  }
}

</script>

<style scoped lang="scss">
.login_container {
  box-sizing: border-box;
  width: 100vw;
  height: calc(var(--vh, 1vh) * 100);
  padding: 31.73333vw 17.33333vw 0;
  background-image: url('../../assets/images/background_img.png');
  background-size: cover;
}

.login__logo {
  width: 66.4vw;
  height: 19.2vw;
  background-image: url('../../assets/images/logo.png');
  background-size: cover;
}

.login__form {
  margin-top: 37.33333vw;
}

.login__form-username {
  position: relative;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  padding: 10px 16px;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  color: #323233;
  background-color: transparent;
}

.login__form-username-img {
  box-sizing: border-box;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  align-items: center;
  margin-right: 12px;
  color: #646566;
  text-align: left;
  word-wrap: break-word;
}

.login__form-username-imge {
  width: 4.8vw;
  height: 4.8vw;
  background-image: url('../../assets/images/username.png');
  background-position: 50%;
  background-size: contain;
}

.login__form-username-input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-width: 0;
  line-height: inherit;
  color: #323233;
  text-align: left;
  resize: none;
  background-color: transparent;
  border: 0;
  outline: none;
}

.login__form-password {
  position: relative;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  padding: 10px 16px;
  margin-top: 3%;
  overflow: hidden;
  font-size: 14px;
  line-height: 24px;
  color: #323233;
  background-color: transparent;
}

.login__form-password-img {
  box-sizing: border-box;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  align-items: center;
  margin-right: 12px;
  color: #646566;
  text-align: left;
  word-wrap: break-word;
}

.login__form-password-imge {
  width: 4.8vw;
  height: 4.8vw;
  background-image: url('../../assets/images/password.png');
  background-position: 50%;
  background-size: contain;
}

.login__form-password-input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-width: 0;
  line-height: inherit;
  color: #323233;
  text-align: left;
  resize: none;
  background-color: transparent;
  border: 0;
  outline: none;
}

.login__form-btn {
  width: 46.66667vw;
  margin: 13.33333vw auto 0;
}

.login__form-btn-submit {
  width: 32vw;
  height: 9vw;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
  border-radius: 7vw;
}

.login__form-otherbtn {
  width: 46.66667vw;
  margin: 5.33333vw auto 0;
}

.login__form-otherbtn-submit {
  width: 32vw;
  height: 9vw;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  background-color: #b13a3d;
  border: 1px solid #b13a3d;
  border-radius: 7vw;
}
</style>
