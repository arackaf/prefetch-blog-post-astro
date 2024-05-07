import type { FC } from "react";

export const PrefetchBooks: FC<{}> = (props) => {
  return (
    <>
      <link rel="prefetch" href="/api/books" as="fetch" />
      <link rel="prefetch" href="/api/books-count" as="fetch" />
    </>
  );
};
