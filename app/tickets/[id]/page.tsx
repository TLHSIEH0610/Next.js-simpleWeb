import { notFound } from "next/dist/client/components/not-found";
import { Ticket } from "../models";

export const dynamicParams = true;

//static render
export const generateStaticParams = async () => {
  const tickets: Ticket[] = await fetch("http://localhost:4000/tickets").then(
    (res) => res.json()
  );
  return tickets.map((t) => t.id);
};

const getTicket = async (id: string): Promise<Ticket> => {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) return notFound();

  return res.json();
};

export default async ({ params }: { params: { id: string } }) => {
  const ticket = await getTicket(params.id);
  return (
    <div>
      {ticket.id} {ticket.title}{" "}
    </div>
  );
};
