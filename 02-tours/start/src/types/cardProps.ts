export type CardProps = {
  image: string;
  name: string;
  info: string;
  price: string;
  id: string;
  handleDelete: (id: string) => void;
};
