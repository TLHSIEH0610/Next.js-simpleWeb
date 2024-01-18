export interface Ticket {
  id: string;
  title: string;
  content: string;
  priority: "high" | "low" | "middle";
}
