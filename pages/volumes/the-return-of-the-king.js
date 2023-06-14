import Link from "next/link";

export default function theReturn() {
    return (
        <ul>
          <Link href="/">
            <li>HomePage</li>
          </Link>
          <Link href="/volumes/the-fellowship-of-the-ring">
            <li>the-fellowship-of-the-ring</li>
          </Link>
          <Link href="/volumes/the-two-towers">
            <li>the two towers</li>
          </Link>
        </ul>
    );
}