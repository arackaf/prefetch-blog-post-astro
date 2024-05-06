import { useEffect, useState, type FC } from "react";
import { type Book } from "../components/types";
import { BookCover } from "./BookCover";

import * as d3 from "d3";

export const Books: FC<{}> = (props) => {
  let [books, setBooks] = useState<Book[] | null>(null);
  let [count, setCount] = useState<number | null>(null);

  console.log(typeof d3);

  useEffect(() => {
    fetch("/api/books")
      .then((resp) => resp.json())
      .then((books) => {
        setBooks(books);
      });

    fetch("/api/books-count")
      .then((resp) => resp.json())
      .then((booksCountResp) => {
        setCount(booksCountResp.count);
      });
  }, []);

  return books && count != null ? (
    <div className="m-8">
      <h1 className="mb-3 text-lg">
        You have {count} book{count === 1 ? "" : "s"}
      </h1>
      <div className="flex flex-col gap-3">
        {books.map((book) => (
          <div key={book.id} className="flex gap-4">
            <BookCover book={book} />
            <div className="flex flex-col">
              <span className="leading-none text-base">{book.title}</span>
              <span className="text-sm italic">{(book.authors ?? []).join(", ")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="m-8">
      <h1>Loading...</h1>
    </div>
  );
};
