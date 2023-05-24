import { Container } from "./styles";
import { formatPrice } from "../../utils/format-price";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

export function ProductCard({ image, title, price}: ProductCardProps) {
  const priceFormatted = formatPrice(price)

  return (
    <Container>
      <img src={image} />
      <div>
        <h3>{title}</h3>
        <div></div>
        <p>{priceFormatted}</p>
      </div>
    </Container>
  )
}