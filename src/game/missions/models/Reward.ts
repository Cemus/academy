export interface Reward {
  name: string;
  params: any;
  effect?: () => void;
}
