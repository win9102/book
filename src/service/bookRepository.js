import firebaseApp from './firebase'

class BookRepository{

    syncBooks(userId, onUpdate){
        const ref =firebaseApp.database().ref(`${userId}/books`);
        ref.on('value', snapshot => {
            const value = snapshot.val();
            value && onUpdate(value);
        })
        return () => ref.off();
    }

    saveBook(userId, book){
        firebaseApp.database().ref(`${userId}/books/${book.id}`).set(book);
    }

    removeBook(userId, book){
        firebaseApp.database().ref(`${userId}/books/${book.id}`).remove();
    }

  
}
export default BookRepository;