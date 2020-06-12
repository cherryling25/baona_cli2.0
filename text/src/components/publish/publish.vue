<template>
  <div id="publish" style="background:white">
    <el-row :gutter="20" style="padding-top:20px; margin-top: 30px; border-radius: 4px;">
      <el-col :span="12" :offset="6">
        <div class="grid-content">
          <el-steps :active="active" finish-status="success">
            <el-step title="选择任务类型"></el-step>
            <el-step title="填写任务信息"></el-step>
            <el-step title="支付"></el-step>
            <el-step title="发布成功"></el-step>
          </el-steps>
        </div>
      </el-col>
    </el-row>


    <!-- 选择任务类型 -->
    <div v-if="selected == 0">
      <el-row>
        <el-col :span="22" :offset="1"><div class="grid bg-blue">第一步:选择任务类型和单数</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="1">
          <div class="grid space">
            <el-checkbox v-model="shopChecked">拼多多</el-checkbox>
            <el-button type="primary" @click="dialogFormVisible = true">添加店铺</el-button>
          </div>
        </el-col>
      </el-row>

      <el-dialog title="添加店铺" :visible.sync="dialogFormVisible" :modal-append-to-body="false" width="30%">
        <el-form :model="addShopForm">
          <el-form-item label="平台" label-width="120px">
            <el-select v-model="addShopForm.platform" placeholder="请选择">
              <el-option label="拼多多" value="pingduoduo"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="店铺名称" label-width="120px">
            <el-input v-model="addShopForm.name" autocomplete="off" placeholder="跟手机端宝贝页显示的店铺名一致"></el-input>
          </el-form-item>

          <el-form-item label="手机号" label-width="120px">
            <el-input v-model="addShopForm.phone" autocomplete="off" placeholder="店铺手机号绑定后无法修改"></el-input>
          </el-form-item>

          <el-form-item label="拼多多商家后台登陆页面" label-width="120px">
            <el-upload
              class="avatar-uploader"
              action="http://www.bn.com/index.php/index/Store/img"
              :show-file-list="false"
              :on-success="handleAvatarSuccess1">
              <img v-if="addShopForm.imageUrl" :src="addShopForm.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addShop">确 定</el-button>
        </div>
      </el-dialog>

      <el-row>
        <el-col :span="12" :offset="1">
          <div class="grid space">
            <el-radio-group v-model="shopRadio" >
              <div  v-for="(item,index) in shopType" :key="index">
            <el-radio :label="index" >{{item.shop}}</el-radio>
            </div>
            </el-radio-group>
          </div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22" :offset="1"><div class="grid bg-blue">第二步:选择任务类型</div></el-col>
      </el-row>
      
      <el-row>
        <el-col :span="12" :offset="1">
                      <el-radio-group v-model="typeRadioA" >
              <div  v-for="(item,index) in taskType" :key="index" class="grid space">
            <el-radio :label="item.typeContent" >{{item.typeContent}}</el-radio>
            </div>
            </el-radio-group>
          <!-- <div class="grid space">
            <el-radio v-model="typeRadio" :label="index">{{item.typeContent}}</el-radio>
          </div> -->
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22" :offset="1"><div class="grid bg-blue">第三步:平台服务</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="14" :offset="1">
          <div class="grid space">
            <el-checkbox v-model="platformChecked">平台系统返款（收取0.5元/单的服务费）</el-checkbox>
          </div>
        </el-col>
      </el-row>
    
    
    
    <el-row>
      <el-col :span="12" :offset="10"><div class="grid">
         <el-button style="margin-top: 12px;" @click="next" type="primary" plain>下一步</el-button> 
      </div></el-col>
    </el-row>
    </div>

    <!-- 填写任务类型 -->
    <div v-if="selected == 1">
      <el-form ref="typeForm" :model="typeForm" label-width="130px">
        <el-row>
          <el-col :span="22" :offset="1">
            <div class="grid bg-blue">第一步:填写商品信息</div>
          </el-col>
        </el-row>

      <el-row>
        <el-col :span="14" :offset="1">
          <el-form-item label="商品名称">
            <el-input placeholder="请输入商品名称" v-model="typeForm.merchantNameInput"></el-input>
            <span class="red">仅平台核实任务，用户不可见</span>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="1">
           <el-form-item label="商品链接">
            <el-input placeholder="请输入商品链接" v-model="typeForm.commodityLinkInput"></el-input>
            <span class="red">仅平台核实任务，用户不可见</span>
          </el-form-item>
        </el-col>
      </el-row>

       <el-row>
        <el-col :span="9" :offset="1">
          <el-form-item label="商品主图">
            <el-upload
              class="avatar-uploader"
              action="http://www.bn.com/index.php/index/Store/img"
              :show-file-list="false"
              :on-success="handleAvatarSuccess2">
              <img v-if="typeForm.imageUrl" :src="typeForm.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <span>上传“商品主图”,确保与商品页面展示的图片一致。</span>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="1">
          <el-form-item label="单品实际成交价格">
            <el-input placeholder="单品实际成交价格" v-model="typeForm.unitPrice">
              <template slot="append">元</template>
            </el-input>
            <span class="red">买手拍下时的付款价格，如不同等级买号看到商品价格不同，取最大值</span>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="1">
          <el-form-item label="手机搜索展示价格">
            <el-input placeholder="手机搜索展示价格" v-model="typeForm.price">
              <template slot="append">元</template>
            </el-input>
            <span class="red">务必亲自在手机端搜索，确认价格准确</span>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="1">
          <el-form-item label="每单拍">
            <el-input placeholder="每单拍" v-model="typeForm.pieces">
              <template slot="append">件</template>
            </el-input>
            <span class="red">件数x实际成交价格不得超过300元，否则无法发布任务</span>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22" :offset="1">
          <div class="grid bg-blue">第二步:选择任务类型和单数</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="1">
          <el-form-item label="定位目标商品排序方式" label-width="160px">
             <el-select v-model="typeForm.commodityLocation" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
          <el-col :span="22" :offset="1"><div class="grid margin1">
            <el-form-item label="选择任务类型" label-width="160px">
            <el-radio v-model="typeForm.typeRadio" label="1">关键词/链接/多多进宝 <span class="red"> 选择这个就是默认评价，买手不会评价文字</span></el-radio>
          </el-form-item>

          <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;margin:20px; padding:10px 0">
          <el-form-item label="*关键词/链接/多多进宝" label-width="160px">
            <el-input placeholder="请输入关键词" v-model="typeForm.keywordInput" style="width:20%;"></el-input>
          </el-form-item>

          <el-form-item label="添加" label-width="160px">
            <el-input placeholder="请输入单数" v-model="typeForm.piecesInput" style="width:20%;">
              <template slot="append">单</template>
            </el-input>
            <span class="red"> (此处填写多少单即为多少个买家接任务)</span>
          </el-form-item>

           <el-form-item label-width="160px">
               <el-button plain>添加搜索关键词</el-button>
           </el-form-item> 
          </div>
        
          </div></el-col>
      </el-row>

      <el-row>
          <el-col :span="22" :offset="1"><div class="grid margin1">
            <el-form-item label="选择任务类型" label-width="160px">
            <el-radio v-model="typeForm.typeRadio" label="2">指定文字好评任务 <span class="gray">（指定文字好评任务佣金+0.1金/单）</span><span class="red"> 如果商家要求买手必须选择文字评价，建议选择“指定文字”好评</span></el-radio>
          </el-form-item>
          
          <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;margin:20px; padding:10px 0">
          <el-form-item label="*关键词/链接/多多进宝" label-width="160px">
            <el-input placeholder="请输入关键词" v-model="typeForm.keywordOneInput" style="width:20%;"></el-input>
          </el-form-item>

          <el-form-item label="添加" label-width="160px">
            <el-input placeholder="请输入单数" v-model="typeForm.piecesOneInput" style="width:20%;">
              <template slot="append">单</template>
            </el-input>
            <span class="red"> (此处填写多少单即为多少个买家接任务)</span>
          </el-form-item>

          <el-form-item label="*指定文字" label-width="160px">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入指定文字"
              v-model="typeForm.textarea">
            </el-input>
          </el-form-item>
          </div>

          </div></el-col>
      </el-row>

      <el-row>
          <el-col :span="22" :offset="1"><div class="grid margin1">
            <el-form-item label="选择任务类型" label-width="160px">
            <el-radio v-model="typeForm.typeRadio" label="3">指定图片好评任务</el-radio>
          </el-form-item>

           <div style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;margin:20px; padding:10px 0">
             <!-- （指定图片好评任务佣金 +0.2金/单，为规避风险，买家无法直接复制文字内容，必须手工输入。因此买家实际的评价内容不保证100%与您的评价要求保持一致） -->
         
            <span class="red gray" style="font-size:12px;margin-left:15px;">（指定图片好评任务佣金 +0.2金/单，为规避风险，买家无法直接复制文字内容，必须手工输入。因此买家实际的评价内容不保证100%与您的评价要求保持一致）</span>

          <el-form-item label="搜索关键词">
            <el-input placeholder="请输入关键词" v-model="typeForm.keywordTwoInput" style="width:20%;"></el-input>
          </el-form-item>

          <el-form-item label="添加">
            <el-input placeholder="请输入单数" v-model="typeForm.piecesTwoInput" style="width:20%;">
              <template slot="append">单</template>
            </el-input>
            <span class="red"> (此处填写多少单即为多少个买家接任务)</span>
          </el-form-item>

          <el-form-item label="*指定的SKU">
            <el-input placeholder="请输入指定的SKU" v-model="typeForm.skuInput" style="width:20%;"></el-input>
            <span class="red"> (规格设置一定要与图片上商品规格保持一致）</span>
          </el-form-item>

          <el-form-item label="*选择图片">
            <el-upload
              action="http://www.bn.com/index.php/index/Store/img"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview1"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="typeForm.dialogVisible">
              <img width="100%" :src="typeForm.dialogImageUrl" alt="">
            </el-dialog>
            <span class="red">最多可添加5张图片，每组照片拍摄的角度，背景不能一样</span>
          </el-form-item>

          <el-form-item label="*评价描述">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入评价描述"
              v-model="typeForm.textarea1">
            </el-input>
          </el-form-item>

          <el-form-item>
              <el-button plain>增加指定图片任务</el-button>
          </el-form-item> 

          </div>
          </div></el-col> 
      </el-row>

      <el-row>
        <el-col :span="22" :offset="1">
          <el-checkbox v-model="typeForm.publishChecked"></el-checkbox>

          <span class="demonstration" style="margin-left:9px;">发布时间设置</span>
          <el-date-picker
            v-model="typeForm.publishDate"
            type="date"
            placeholder="选择日期">
          </el-date-picker>

          <span class="demonstration" style="margin-left:9px;"> 开始时间 </span>
         <el-time-picker
          v-model="typeForm.startTime"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="开始时间">
        </el-time-picker>

        <span class="demonstration" style="margin-left:9px;"> 结束时间 </span>
        <el-time-picker
          arrow-control
          v-model="typeForm.endTime"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }"
          placeholder="结束时间">
        </el-time-picker>

          <el-input placeholder="请输入单数" v-model="typeForm.number" style="width:20%;">
            <template slot="append">单</template>
          </el-input>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="22" :offset="1">
          <div class="grid bg-blue">最后:任务额外说明</div>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="14" :offset="1">
          <el-form-item label="*是否需要聊天" label-width="130px">
             <el-radio v-model="typeForm.chatradio" label="1">是</el-radio>
             <el-radio v-model="typeForm.chatradio" label="2">否</el-radio>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="*额外要求" label-width="170px">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="重要！如果对买手有特别的要求，请在备注里注明，买手在做任务时会看到，最多不能超过100字(任务备注只是商家要求，我们只能做到传达给买手但不会强制买手按要求执行)"
          v-model="typeForm.textarea2">
        </el-input>
      </el-form-item>

      <el-row>
        <el-col :span="12" :offset="7">
          <el-form-item>
          <el-button style="margin-top: 12px;" @click="pre" type="primary" plain>上一步</el-button>
            <el-button style="margin-top: 12px;" @click="next" type="primary" plain>下一步</el-button>
        </el-form-item>
        </el-col>
      </el-row> 


    </el-form>
    </div>


    <div v-if="selected == 2">
      <el-row :gutter="20">
        <el-col :span="10"><div class="grid border">
          可用本金
          <div>{{money}}</div>
          <!-- <router-link to="/rechargePrincipal">
            <el-button type="primary">充值本金</el-button>        
          </router-link> -->
        </div></el-col>
      </el-row>

      <el-row :gutter="20" style="margin-top:70px; padding:40px 0;">
          <el-col :span="10"><div class="grid border">
              <el-button type="warning" @click="pay">支付</el-button>        
          </div></el-col>
      </el-row>


      <!-- <el-row :gutter="20" style="margin-top:70px; padding:40px 0;">
          <el-col :span="19"><div class="grid border">
              <el-button style="margin-top: 12px;" @click="pre" type="primary" plain>上一步</el-button>  
              <el-button style="margin-top: 12px;" @click="next" type="primary" plain>下一步</el-button>      
          </div></el-col>
      </el-row> -->
     
      
    </div>

    <div v-if="selected == 3">

     <el-row :gutter="20" style="margin-top:70px; padding:40px 0;">
        <el-col :span="6"><div class="grid border">
          发布成功 
            <el-button type="success" icon="el-icon-check" circle></el-button>
            
        </div></el-col>
    </el-row>
     
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Qs from "qs";

export default {
  name: "publish",
  data() {
    return {
      taskType: [],
      shopType: [],
      shopChecked: true,
      shopRadio: '',
      typeRadioA:'',
      platformChecked: true,

      addShopForm: {
        platform: "",
        name: "",
        phone: "",
        imageUrl: ""
      },
       options: [{
          value: '1',
          label: '开团'
        }, {
          value: '2',
          label: '参团'
        }, {
          value: '3',
          label: '单独购买'
        }],
      typeForm: {
          commodityLinkInput: '',
          merchantNameInput: '',
          imageUrl: '',
          imageUrl1:'',
          unitPrice: '',
          price: '',
          pieces: '',
          commodityLocation: '',
          keywordInput: '',
          piecesInput: '',
          keywordOneInput: '',
          piecesOneInput: '',
          typeRadio: '',
          keywordTwoInput: '',
          piecesTwoInput: '',
          skuInput: '',
          dialogVisible: false,
          dialogImageUrl: '',
          textarea: '',
          publishChecked: true,
          publishDate:'',
          startTime: '111',
          endTime: '111',
          number: '',
          chatradio: '',
          textarea1:'',
          textarea2: ''
        },
      money: '2.4',
      active: 0,
      selected: 0,
      dialogFormVisible: false
    };
  },

  methods: {
    onSubmit() {
        console.log('submit!');
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview1(res,file) {
        console.log(res,file)
        this.dialogImageUrl = URL.createObjectURL(file.raw);
        this.dialogVisible = true;
      },
      handleAvatarSuccess1(res,file) {
        this.addShopForm.imageUrl =URL.createObjectURL(file.raw);
        this.dialogVisible = true;
      },
      handleAvatarSuccess2(res,file){
        console.log(res,file)
        this.typeForm.imageUrl1 = res.data;
        this.typeForm.imageUrl = URL.createObjectURL(file.raw);
      },
    next() {
      this.selected++;
      if (this.active++ > 2) { 
        this.active = 0; 
        this.selected = 0;
      }
    },
    formatTimer(time) {
      let date = new Date(time);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return h + ":" + m + ":" + s;
    },
    // 支付
    pay(){
      console.log(this.typeForm.dialogImageUrl);
      let startTimeStr = this.formatTimer(this.typeForm.startTime);
      let endTimeStr = this.formatTimer(this.typeForm.endTime);
      
       axios({
       headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          'user_id': this.GLOBAL.userId,
          "goods_name": this.typeForm.merchantNameInput,
          'goods_url': this.typeForm.commodityLinkInput,
          'start_time': startTimeStr,
          'end_time': endTimeStr,
          'phone_price': this.typeForm.price,
          'price_noe': this.typeForm.unitPrice,
          'centons': this.typeForm.textarea2,
          'price_number': this.typeForm.pieces,
          'goods_state': this.typeForm.commodityLocation,

          "keyword": this.typeForm.keywordInput,
          'keyword1': this.typeForm.keywordOneInput,
          'keyword2': this.typeForm.keywordTwoInput,

          "keyword2_sku": this.typeForm.skuInput,

          'keyword_number': this.typeForm.piecesInput,
          'keyword1_number': this.typeForm.piecesOneInput,
          'keyword2_number': this.typeForm.piecesTwoInput,

          'keyword1_centons': this.typeForm.textarea,
          'keyword2_centons': this.typeForm.textarea1,

          'task_type_state': this.typeForm.typeRadio,
          'wechat_centons': this.typeForm.chatradio,
          'img': this.typeForm.imageUrl1,
          'image':"store/2020061135ad68bab5140670486b448dab1e9eeb.png",
          'store_id': "1", 
          "type": this.shopType[this.shopRadio].type,  
          'task_type': this.typeRadioA,


        }),

        url: this.GLOBAL.hostUrl5 + "index/task/task_add"
      }).then(res => {
        console.log(res);
          
      });
    },
    pre(){
      this.selected--;
      if (this.active-- == 0) { 
        this.active = 0; 
        this.selected = 0;
      }
    },
    //上传图片
    handleAvatarSuccess(res, file) {
      this.addShopForm.imageUrl = URL.createObjectURL(file.raw);
    },

    // 添加店铺
    addShop() {
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          user_id: this.GLOBAL.userId,
          store_name: this.addShopForm.platform,
          address: this.addShopForm.name,
          phone: this.addShopForm.phone,
          img: this.addShopForm.imageUrl
        }),

        url: this.GLOBAL.hostUrl5 + "index/Store/store_add"
      }).then(res => {
        console.log(res);
        if (res.data.code == 1 || res.data.code == "1") {
          this.$notify({
            message: "添加成功",
            type: "success"
          });
          this.dialogFormVisible = false;
        } else {
          this.$notify.error({
            message: "添加失败"
          });
        }
      });
    },
    // 店铺名
    shopName(){
      axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          user_id: this.GLOBAL.userId
        }),

        url: this.GLOBAL.hostUrl5 + "index/Store/store_list"
      }).then(res => {
        console.log(res);
        const tableData = [];
          const dataList = res.data.data.list;
          for (let i = 0; i < dataList.length; i++) {
            const data = {
              shop: dataList[i].store_name,
              type: dataList[i].type
            }
            tableData.push(data);
          }
          this.shopType = tableData;
      });
    },
    //  任务类型
     task(){
       axios({
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "post",
        data: Qs.stringify({
          user_id: this.GLOBAL.userId,
          "name": ''
        }),

        url: this.GLOBAL.hostUrl5 + "index/Store/type_list"
      }).then(res => {
        console.log(res);
        const tableData = [];
          const dataList = res.data.data;
          for (let i = 0; i < dataList.length; i++) {
            const data = {
              typeContent: dataList[i].name,
            }
            tableData.push(data);
          }
          this.taskType = tableData;
      });
    }
  },
  mounted() {
    // this.mockedData();
    this.task();
    this.shopName();
  },
  components: {
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-row :last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
  
}
.grid-content {
  border-radius: 4px;
  min-height: 60px;
}
.grid {
  min-height: 40px;
  line-height: 40px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-blue {
  background: rgb(232, 242, 247);
  /* color: white; */
}
.space {
  display: flex;
  justify-content: space-between;
}
.el-radio {
  margin-top: 10px;
}
.margin {
  margin-top: 10px;
}
.margin1{
  border: 1px solid #c9c7c7;
}
.red{
  color: red;
}
.gray{
  color: #8c939d;
}
.border{
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
}
/* 上传图片 */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
