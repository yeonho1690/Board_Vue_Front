<!-- eslint-disable -->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="board-main">
      <div class="sub_menu_btn">
        <p style="display:flex">
          <router-link to="/board/enroll" tag="button" class="btn_line btn_gray">추가</router-link>
          <button class="btn_line btn_gray">엑셀</button>
        </p>
      </div>
      <table class="table text-center">
        <thead style="background-color: #deddd9">
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(board, i) in boards" :key="i">
            <td>{{board.bno}}</td>
            <td>
                <router-link :to="`/board/detail/${board.bno}`">{{board.title}}</router-link>
            </td>
            <td>{{board.writer}}</td>
            <td>{{board.regDate.substring(0,10)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import BoardService from "../services/BoardService";
export default {
  name: "BoardList",
  data(){
    return{
      boards: [],
      currentBoard:{
        bno:null,
        title:"",
        content:"",
        writer:"",
        regDate:null,
        updDate:null
      }
    }
  },
  props: {
    msg: String,
  },
  methods:{
    listBoard(){
      BoardService.getBoard()
      .then(response => {
                this.boards = response.data;
                console.log(response.data);
            }).catch(()=>{}); 
      }
  },
  mounted(){
    this.listBoard();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.sub_btn_menu .btn_line{display:block;float:left;margin:0 3px 3px 0;padding:0 20px;min-width:66px;width:auto;height:30px;line-height:28px;font-size:1.2em}
.sub_btn_menu .btn_line{margin:1.5px 3px 1.5px 0;padding:0 17px;min-width:50px;background:#fff}
.btn_line{text-decoration:none;display:block;width:170px;height:44px;line-height:42px;text-align:center;font-size:1.8em;color:#fff;font-weight:300;border:1px solid #fff;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
.btn_line:hover{color:#666;background:#fff}
.btn_line.btn_gray{color:#666;border-color:#999}
.btn_line.btn_gray:hover{color:#fff;background:#999}
.board-main {width: 1100px;margin: auto;margin-bottom: 300px;padding-top: 70px}
.board-main table {width: 100%;margin: auto;border-collapse: collapse;font-size: 14px;border-top: 2px solid lightgray;border-bottom: 1px solid lightgray}
.board-main thead {height: 40px;background-color: whitesmoke;}
.board-main tbody tr {height: 60px;}
.board-main tbody tr td {border-top: 1px solid lightgray;}
.board-main tbody tr td:nth-child(1) { width: 10%;text-align: center;}
.board-main tbody tr td:nth-child(2) { width: 40%;text-align: center;padding-top: 15px;padding-bottom: 15px;}
.board-main tbody tr td:nth-child(2) a {text-decoration: none;color: black}
.board-main tbody tr td:nth-child(3) {text-align: center;width: 20%}
.board-main tbody tr td:nth-child(4) {text-align: center}
.board-main tbody tr td:nth-child(5) {text-align: center}    
a{text-decoration:none}
li{list-style:none}
.active{color:#fff;font-weight:700;border-color:#557096;background:#557096;z-index:20}
.pageInfo {display: flex;}
.list_page a.active{color:#fff;font-weight:700;border-color:#557096;background:#557096;z-index:20}
.list_page{margin-top:30px;height:32px;text-align:center}
.list_page a{display:inline-block;margin:0 1px;width:30px;height:30px;line-height:30px;text-align:center;vertical-align:top;font-size:1.3em;color:#666;border:1px solid #d5d5d5;background:#fff;z-index:10;*display:inline;zoom:1}
.list_page a:hover{color:#fff;font-weight:700;border-color:#557096;background:#557096;z-index:20}

</style>
