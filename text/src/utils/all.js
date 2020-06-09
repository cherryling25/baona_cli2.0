if (JSON.parse(localStorage.getItem("loginStatus"))) {
        token =  JSON.parse(
            localStorage.getItem("loginStatus")
          ).token;
          mid =  JSON.parse(
            localStorage.getItem("loginStatus")
          ).uid;
      }
      if(localStorage.getItem('defaultPro')){
        default_product = JSON.parse(localStorage.getItem('defaultPro'));
      }
    let token=''
    let secret = ''
    let id = ""
    // const hostUrl5 = 'http://192.168.1.14:9709';//接口
      const hostUrl5 = 'http://www.bn.com/index.php/';//接口
    export default {
      hostUrl5,
      token,
      secret,
      id
    } 