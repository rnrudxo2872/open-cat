import { retrieveAssets } from "./api";
import { useQuery } from "react-query";
import { IAssets } from "./interfaces/assets.interface";
import styled from "styled-components";
import Asset from "./components/Asset";
import { GlobalStyle } from "./styleds/global.styled";
import { useState } from "react";

const MainWrapper = styled.div``;

const AssetSlider = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100vw;
`;

const RefreshSvg = styled.svg`
  width: 200px;
  height: 100px;
`;

function App() {
  const [slideIdx, setSlideIdx] = useState(0);
  const {
    isLoading,
    data: Assets,
    refetch,
  } = useQuery<IAssets>(["retrieve", "assets"], retrieveAssets, {
    refetchInterval: false,
  });

  const OnClickRefresh = () => refetch();

  return (
    <MainWrapper className="App">
      <GlobalStyle />
      <button onClick={OnClickRefresh}>
        <RefreshSvg
          aria-hidden="true"
          focusable="false"
          role="img"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z"
          ></path>
        </RefreshSvg>
      </button>
      {isLoading ? (
        "Now Loading..."
      ) : (
        <AssetSlider>
          {Assets?.assets.map((asset) => (
            <Asset key={asset.id} asset={asset} />
          ))}
        </AssetSlider>
      )}
      {isLoading ? null : console.log(Assets)}
    </MainWrapper>
  );
}

export default App;
