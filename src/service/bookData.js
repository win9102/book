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

    searchBook(query){
        return this.bookdata.get('book',{
            params:{
                target : 'title',
                query : query
            }
        }).then(response => response.data)
   }

}

export default BookData;