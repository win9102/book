import axiox from 'axios';

class BookData{
    constructor(key){
       
        this.bookdata = axiox.create({
            baseURL:'https://dapi.kakao.com/v3/search/',
            headers:{
                Authorization : `KakaoAK ${key}`
             }
        })
    }

    searchBook(){
        return this.bookdata.get('book',{
            params:{
                target : 'title',
                query : '모모'
            }
        }).then(response => response.data)
   }

}

export default BookData;