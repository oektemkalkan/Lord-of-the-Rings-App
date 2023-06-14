import Link from "next/link";
import { volumes } from "../lib/data";

export default function theFellowship() {
    const book1 = volumes.find(({slug}) => slug === "the-fellowship-of-the-ring");
    return (
        <>
        <h1>{book1.title}</h1>
        <p>{book1.description}</p>
        <ul>
            <li>{book1.books}</li>
        </ul>
        <ul>
          <Link href="/">
            <li>HomePage</li>
          </Link>
          <Link href="/volumes/the-two-towers">
            <li>the two towers</li>
          </Link>
          <Link href="/volumes/the-return-of-the-king">
            <li>the return of the king</li>
          </Link>
        </ul>
        </>
    );
}