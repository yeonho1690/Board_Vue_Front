<!-- eslint-disable -->
<template>
    <div>
        <h1>{{msg}}</h1>
        <div class="board">
                <table>
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td><input name="title" v-model="board.title"></td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td><textarea rows="3" v-model="board.content" name="content" style="width: 950px;"></textarea></td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td><input name="writer" v-model="board.writer"></td>
                        </tr>
                    </tbody>
                </table>
                <div class="sub_btn_menu">
                    <a class="btn_line btn_gray" @click="addBoard()">등록</a>
                    <a class="btn_line btn_gray" href="/">취소</a>
                </div>
        </div>
    </div>    
</template>
<!-- eslint-disable -->
<script> 
/* eslint-disable */
import BoardService from "../services/BoardService";
export default {
    name: "BoardEnroll",
    data(){
        return{
            msg: "등록 화면",
            board:{
                bno:"",
                title: "",
                content: "",
                writer: "",
                regDate:"",
                updateDate:""
            },
            submitted: false
        }
    },
    methods: {
        addBoard(){
            var boardData = {
                title : this.board.title,
                content : this.board.content,
                writer : this.board.writer
            }
            BoardService.enroll(boardData)
            .then(response => {
                console.log(response.data);
                this.submitted = true;
                alert("등록 성공!!!");
                this.$router.push("/").catch(()=>{}); 
            }).catch(()=>{}); 
        }
    },
    mounted(){

    }

}
</script>

<style>
/* eslint-disable */
.sub_btn_menu .btn_line {display: block;float: left;margin: 0 3px 3px 0;padding: 0 20px;min-width: 66px;width: auto;height: 30px;line-height: 28px;font-size: 1.2em}
.sub_btn_menu .btn_line {margin: 1.5px 3px 1.5px 0;padding: 0 17px;min-width: 50px;background: #fff}
.btn_line {text-decoration: none;display: block;width: 170px;height: 44px;line-height: 42px;text-align: center;font-size: 1.8em;color: #fff;font-weight: 300;border: 1px solid #fff;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box}
.btn_line:hover {color: #666;background: #fff}
.btn_line.btn_gray {color: #666;border-color: #999}
.btn_line.btn_gray:hover {color: #fff;background: #999}
.board table tbody tr th {background-color:#deddd9;font-size: 15px;font-family: '굴림';}
.board table {border-collapse: collapse;width: 100%;margin: auto;border-collapse: collapse;font-size: 14px;}
.board table tbody tr td {border-bottom: 1px solid rgb(224, 224, 224);padding: 10px;}
.board table tbody tr th {border-bottom: 1px solid rgb(224, 224, 224);padding: 10px;width: 100px;}
.board {width: 1100px;margin: auto;margin-bottom: 300px;padding-top: 70px;}
.board input {width: 950px;}
</style>