import Link from "next/link"
export default function Home() {
  return (
    <h1 className="text-3xl font-bold underline">
      <span>Hello world!</span>
        <Link href="/dashboard">   Dashboard</Link>
    </h1>
  )
}