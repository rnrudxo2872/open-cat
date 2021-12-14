import { IAsset } from "../interfaces/assets.interface";
import { AssetImage, AssetTitle, AssetWrapper } from "../styleds/Asset.styled";

function Asset({ asset }: { asset: IAsset }) {
  return (
    <AssetWrapper key={asset.id}>
      <AssetImage image={asset.image_url} />
      <AssetTitle>{asset.name}</AssetTitle>
    </AssetWrapper>
  );
}

export default Asset;
