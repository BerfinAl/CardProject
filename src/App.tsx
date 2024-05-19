import CssBaseline from "@mui/material/CssBaseline";
import InteractiveCard from "./components/InteractiveCard/InteractiveCard";
import DisplayCard from "./components/DisplayCard/DisplayCard";
import { saveCard, uploadImage } from "./utils";
import { ImageType } from "./types/types";
import { StyledBox } from "./App.styles";

function App() {

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    description: string,
    image: ImageType
  ) {
    e.preventDefault();
    const file = image.file;
    const imageUrl = await uploadImage(file as File);
    await saveCard(title, description, imageUrl);
  }

  return (
    <div>
      <CssBaseline />
      <StyledBox>
        {/* Active Card */}
        <InteractiveCard handleSubmit={handleSubmit} />
        {/* Empty Card */}
        <DisplayCard/>
      </StyledBox>
    </div>
  );
}

export default App;
