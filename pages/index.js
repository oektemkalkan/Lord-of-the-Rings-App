import { introduction } from ".//lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Lord of the Rings</h1>
        <p>{introduction}</p>
        <h2>All Volumes</h2>
        <ul>
          <Link href="/volumes/the-fellowship-of-the-ring">
            <li>the fellowship of the ring</li>
          </Link>
          <Link href="/volumes/the-two-towers">
            <li>the two towers</li>
          </Link>
          <Link href="/volumes/the-return-of-the-king">
            <li>the return of the king</li>
          </Link>
        </ul>
      </div>
    </>
  );
}
