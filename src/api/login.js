import request from '@/utils/request'

export const getPicCode = () => {
  return request.get('/index.php', {
    params: {
      s: '/api/captcha/image'
    }
  })
}

export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/index.php', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  }, {
    params: {
      s: '/api/captcha/sendSmsCaptcha'
    }
  })
}

export const codeLogin = (mobile, smsCode) => {
  return request.post('/index.php', {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode
    }
  }, {
    params: {
      s: '/api/passport/login'
    }
  })
}
