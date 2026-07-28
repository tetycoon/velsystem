import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container content-section" style={{ textAlign: "center", paddingTop: 80 }}>
      <h1>Page Not Found</h1>
      <p>The page you're looking for doesn't exist. <Link href="/">Go back home</Link>.</p>
    </main>
  );
}
