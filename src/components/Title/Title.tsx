import { InputProps } from "../../types/types";
import {
  StyledInput,
  StyledTitleWrapper,
  StyledTypography,
} from "./Title.styles";

function Title({
  text,
  handleChange,
  handleFocus,
  isInteractive,
}: InputProps<HTMLInputElement>) {
  return (
    <StyledTitleWrapper>
      {isInteractive ? (
        <StyledInput
          name="title"
          value={text}
          onFocus={handleFocus}
          onChange={handleChange}
          disableUnderline
          inputProps={{
            "aria-label": "title",
          }}
        />
      ) : (
        <StyledTypography variant="h1">{text}</StyledTypography>
      )}
    </StyledTitleWrapper>
  );
}

export default Title;
