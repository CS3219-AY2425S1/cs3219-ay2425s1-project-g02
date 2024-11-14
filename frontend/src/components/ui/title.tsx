// Define the props interface
interface TitleProps {
  title: string;
}

// Update the Title component to accept props
export function Title({ title }: TitleProps) {
  return <h1>{title}</h1>;
}
