import { Book } from "./Book";
import { Borrowable } from "./Borrowable";

export  class LibraryBook implements Borrowable{
    borrow: (userName: string) => void = (userName) => {
        console.log(
            "Книга" + 
            this.info.title +
            "выдана пользователю" +
            userName
            )
    };

    info: Book;
    constructor(book:Book) {
        this.info = book;
    }
}
const book1 = new LibraryBook({title: "Война и мир", autor: "Л. Н. Толстой", year: 1846});
book1.borrow("Диана Хазикова");
