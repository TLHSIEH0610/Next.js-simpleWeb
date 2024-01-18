import Link from "next/link";
import { Ticket } from "./models";

const listTickets = async (): Promise<Ticket[]> => {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json());
  return res;
};

export default async () => {
  const tickets = await listTickets();
  return tickets.map((ticket) => (
    <div>
      <Link href={`/tickets/${ticket.id}`}>detail</Link>
      {ticket.title}
    </div>
  ));
};
