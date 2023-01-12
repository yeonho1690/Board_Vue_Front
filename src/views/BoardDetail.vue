<!-- eslint-disable -->
<template>
    <div >
        <h1>{{msg}}</h1>
            <div class="boardDetail">
                <table>
                    <tbody>
                        <tr>
                            <th>번호</th>
                            <td><input name="bno" v-model="currentBoard.bno" readonly="readonly"/></td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td><input name="title" v-model="currentBoard.title"/></td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea style="width:950px;" rows="3" name="content" v-model="currentBoard.content"></textarea></td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td><input name="writer" readonly="readonly" v-model="currentBoard.writer"/></td>
                        </tr>
                        <tr>
                            <th>등록일</th>
                            <td><input name="regdater" readonly="readonly" v-model="currentBoard.regDate"/></td>
                        </tr>
                        <tr>
                            <th>수정일</th>
                            <td><input name="updateDate" readonly="readonly" v-model="currentBoard.updateDate"/><td>
                        </tr>	
                    </tbody>
                </table>	
                
                <div class="sub_btn_menu">
                    <a class="btn_line btn_gray" id="list_btn" @click="backToList">목록</a> 
                    <a class="btn_line btn_gray" id="modify_btn" onclick="checkform()">수정</a>
                    <a class="btn_line btn_gray" id="delete_btn">삭제</a>
                </div>
            </div>
    </div>
</template>
<!-- eslint-disable -->
<script>
/* eslint-disable */
import BoardService from "../services/BoardService.js";
export default {
    name: "BoardDetail",
    data(){
        return{
            msg: "상세 화면",
            currentBoard: {
                bno: "",
                title: "",
                content: "",
                writer: "",
                regDate: "",
                updateDate: ""
            }
        }
    },
    methods:{
        detailBoard(bno){
            BoardService.get(bno)
            .then(response=>{
                this.currentBoard = response.data
            }).catch(()=>{});
        },
        backToList(){
            this.$router.go(-1);
        }
    },
    mounted(){
        this.detailBoard(this.$route.params.bno);
    }
}
</script>

<style>
/* eslint-disable */
.sub_btn_menu .btn_line{display:block;float:left;margin:0 3px 3px 0;padding:0 20px;min-width:66px;width:auto;height:30px;line-height:28px;font-size:1.2em}
.sub_btn_menu .btn_line{margin:1.5px 3px 1.5px 0;padding:0 17px;min-width:50px;background:#fff}
.btn_line{text-decoration:none;display:block;width:170px;height:44px;line-height:42px;text-align:center;font-size:1.8em;color:#fff;font-weight:300;border:1px solid #fff;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}
.btn_line:hover{color:#666;background:#fff}
.btn_line.btn_gray{color:#666;border-color:#999}
.btn_line.btn_gray:hover{color:#fff;background:#999}
.boardDetail {width: 1100px;margin: auto;margin-bottom: 300px;padding-top: 70px;}
.boardDetail table tbody tr th{background-color: whitesmoke;font-size: 15px;font-family: '굴림';}
.boardDetail table{border-collapse: collapse;width: 100%;margin: auto;border-collapse: collapse;font-size: 14px;    }
.boardDetail table tbody tr td{border-bottom: 1px solid rgb(224, 224, 224);padding: 10px;}
.boardDetail table tbody tr th{border-bottom: 1px solid rgb(224, 224, 224);padding: 10px;width:100px;}
.boardDetail input{width:950px;}
</style>