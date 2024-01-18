import { Ticket } from "../models";

const getTicket = async (id: string): Promise<Ticket> => {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json());
  return res;
};

export default async ({ params }: { params: { id: string } }) => {
  const ticket = await getTicket(params.id);
  return (
    <div>
      {ticket.id} {ticket.title}{" "}
    </div>
  );
};
