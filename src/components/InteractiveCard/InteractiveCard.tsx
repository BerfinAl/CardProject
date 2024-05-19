import CardComponent from "../Card/CardComponent";
import CardContentComponent from "../CardContent/CardContentComponent";
import { SubmitFnType } from "../../types/types";

interface InteractiveCardProps  {
  handleSubmit: SubmitFnType
}

export default function InteractiveCard({
  handleSubmit,
}: InteractiveCardProps) {

  return (
    <CardComponent>
      <CardContentComponent handleSubmit={handleSubmit} isInteractive={true} />
    </CardComponent>
  );
}
