export class Coffee {
  id: number | string;
  name: string;
  brand: string;
  flavors: string[];
  [key: string]: any;
  status: boolean;
  description: string | null;
}
