<template>
  <div class="hello">
    <input type="text" v-model="usee">
    <button  @click="getli()">获取</button>
    <el-table
            :data="data"
            style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="用户名：">
              <span>{{ props.row.username }}</span>
            </el-form-item>
            <el-form-item label="用户类型：">
              <span>{{ props.row.type }}</span>
            </el-form-item>
            <el-form-item label="用户状态：">
              <span>{{ props.row.statys}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
              label="用户名"
              prop="username">
      </el-table-column>
      <el-table-column
              label="用户类型"
              prop="type">
      </el-table-column>
      <el-table-column
              label="用户状态"
              prop="statys">
      </el-table-column>
    </el-table>
    <!--<ul>
      <li>
        <div class="all">
          <div v-for="(item,i) in data" :key="i">
            <input type="text" v-model="item.username">
            <input type="text" v-model="item.password">
          </div>
        </div>
      </li>
    </ul>-->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      usee:'',
      data: [],
      tableData: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }]
    };
  },
  methods:{
    getli(){
      this.$axios({
        method:'post',
        url:'http://127.0.0.1:4000/api/user/home',
        data:{
          us:this.usee,
        }
      }).then(res=>{
        console.log(res.data)
        this.data = res.data;
      })
    }
  },
  watch: {
    userName(val,oldVal) {
      console.log(val,oldVal);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello ul{
  list-style: none;
  float: left;
}
.hello li .all div{
  background-color: red;
  width:200px;
  height: 100px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
