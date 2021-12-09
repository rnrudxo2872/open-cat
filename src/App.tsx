import "./App.css";
import { retrieveAssets } from "./api";
import { useQuery } from "react-query";
import { IAssets } from "./interfaces/assets.interface";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

const AssetWrapper = styled.div`
  border-radius: 12px;
  background-color: #d8d1d1c6;
`;

const AssetTitle = styled.h1`
  font-size: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const AssetImage = styled.img`
  width: 200px;
  height: auto;
  padding: 12px;
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
        : Assets?.assets.map((asset) => (
            <AssetWrapper>
              <AssetTitle>{asset.name}</AssetTitle>
              <AssetImage
                key={asset.id}
                src={asset.image_url}
                alt={asset.description}
              />
            </AssetWrapper>
          ))}
    </MainWrapper>
  );
}

export default App;
