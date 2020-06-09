// import { Toast } from 'mint-ui'
import router from '@/router'
import Config from './all.js'
import $ from 'jquery'
function ajax(url,info,cellback,token){
    $.ajax({
        url:url,
        type:"POST",
        dataType: "data",
        headers:{
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            token:token || Config.token,
        },  
        data: info,
        success:function(res){
            if(typeof(res)=='string'){
                res = JSON.parse(res);
            }
            if(res.state == -1){
                if (localStorage.getItem("loginStatus")) {
                    localStorage.removeItem("loginStatus");
                }
                router.push({ path: "/" });
            }
            cellback(res)
        },
        error: function(res) {
           
        }
    })
  }
   
export default {ajax}   //导出ajax方法