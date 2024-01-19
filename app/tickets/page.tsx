import { Suspense } from "react";
import TicketList from "./ticketList";
import Loading from "../loading";

export default () => {
  return (
    <>
      <h2>Tickets Page</h2>

      {/* only inside the suspense boundary we show
a loading screen  */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </>
  );
};
