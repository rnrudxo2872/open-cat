import "./App.css";
import { retrieveAssets } from "./api";
import { useQuery } from "react-query";
import { IAssets } from "./interfaces/assets.interface";
import styled from "styled-components";
import Asset from "./components/Asset";

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

function App() {
  const { isLoading, data: Assets } = useQuery<IAssets>(
    ["retrieve", "assets"],
    retrieveAssets
  );

  return (
    <MainWrapper className="App">
      {isLoading
        ? "Now Loading..."
        : Assets?.assets.map((asset) => <Asset key={asset.id} asset={asset} />)}
      {isLoading ? null : console.log(Assets)}
    </MainWrapper>
  );
}

export default App;
