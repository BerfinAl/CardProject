
import { PropsWithChildren } from 'react'
import Label from "../Label/Label";
import { StyledBox, StyledCard, StyledCardContent } from './Card.styles';


function CardComponent(props : PropsWithChildren ) {
  return (
    <StyledBox>
      <StyledCard>
        <Label />
        <StyledCardContent>{props.children}</StyledCardContent>
      </StyledCard>
    </StyledBox>
  );
}

export default CardComponent;