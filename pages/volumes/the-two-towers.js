import Link from "next/link";

export default function theTwoTowers() {
    return (
        <ul>
          <Link href="/">
            <li>HomePage</li>
          </Link>
          <Link href="/volumes/the-fellowship-of-the-ring">
            <li>the-fellowship-of-the-ring</li>
          </Link>
          <Link href="/volumes/the-return-of-the-king">
            <li>the return of the king</li>
          </Link>
        </ul>
    );
}