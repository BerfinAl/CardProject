import CardComponent from "../Card/CardComponent";
import CardContentComponent from "../CardContent/CardContentComponent";

export default function DisplayCard() {
  return (
    <CardComponent>
      <CardContentComponent isInteractive={false} />
    </CardComponent>
  );
}
