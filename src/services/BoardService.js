/* eslint-disable */
import http from "../http-common";
class BoardService {
    getBoard(){
        return http.get("/board/list");
    }
    enroll(boardData){
        return http.post("/board/enroll", boardData);
    }
    get(bno){
        return http.get(`/board/detail/${bno}`);
    }
}
export default new BoardService();