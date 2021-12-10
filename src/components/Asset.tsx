import styled from "styled-components";
import { IAsset } from "../interfaces/assets.interface";

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

function Asset({ asset }: { asset: IAsset }) {
  return (
    <AssetWrapper key={asset.id}>
      <AssetTitle>{asset.name}</AssetTitle>
      <AssetImage src={asset.image_url} alt={asset.description} />
    </AssetWrapper>
  );
}

export default Asset;
