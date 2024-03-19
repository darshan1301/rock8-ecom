import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col gap-4">
        <Link href="/signup" className=" hover:text-blue-600">
          Signup
        </Link>
        <Link href="/login" className=" hover:text-blue-600">
          Login
        </Link>
        <Link href="/categories" className=" hover:text-blue-600">
          Categories
        </Link>
      </div>
    </main>
  );
}
