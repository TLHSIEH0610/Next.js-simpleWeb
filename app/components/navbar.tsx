import Link from "next/link";

export default () => {
  return (
    <div>
      <h2>NavBar</h2>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/statistics">Statistics</Link>
    </div>
  );
};
