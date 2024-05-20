import { TextField } from "@mui/material";
import { InputProps } from "../../types/types";
import { DescriptionWrapper, StyledTypography } from "./Description.styles";

function Description({
  text,
  isInteractive,
  handleChange,
  handleFocus,
}: InputProps<HTMLTextAreaElement>) {
  return (
    <DescriptionWrapper>
      {isInteractive ? (
        <TextField
          InputProps={{
            style: {
              height: "100%",
              fontSize: "14px",
            },
            disableUnderline: true,
          }}
          id="standard-multiline-static"
          multiline
          rows={4}
          fullWidth
          variant="standard"
          value={text}
          name="description"
          required
          onChange={handleChange}
          onFocus={handleFocus}
        />
      ) : (
        <StyledTypography paragraph={true}>{text}</StyledTypography>
      )}
    </DescriptionWrapper>
  );
}

export default Description;
