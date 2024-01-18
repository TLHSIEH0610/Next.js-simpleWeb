import next from "next";

interface Ticket {
  id: string;
  title: string;
  content: string;
  priority: "high" | "low" | "middle";
}
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
  return tickets.map((ticket) => <div>{ticket.title}</div>);
};
