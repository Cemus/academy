export interface RoomEffect {
  type: "gainXp" | "gainLoyalty";
  params: any;
}

export default interface Room {
  name: string;
}
