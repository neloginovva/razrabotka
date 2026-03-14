import { LibraryBook } from "./types/LibraryBook";

const book1 = new LibraryBook({title: "Война и мир", autor: "Л. Н. Толстой", year: 1846});
book1.borrow("Диана Хазикова");