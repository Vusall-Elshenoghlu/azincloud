export interface IProducts  {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    type: "available" | "upcoming";
}