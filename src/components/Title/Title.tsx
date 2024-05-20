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
          required
          inputProps={{
            "aria-label": "title",
            maxLength: 20,
          }}
        />
      ) : (
        <StyledTypography variant="h1">{text}</StyledTypography>
      )}
    </StyledTitleWrapper>
  );
}

export default Title;
