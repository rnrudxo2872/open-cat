import { IAsset } from "../interfaces/assets.interface";
import {
  AssetImage,
  AssetTitle,
  AssetTrait,
  AssetTraitContainer,
  AssetWrapper,
} from "../styleds/Asset.styled";

function Asset({ asset }: { asset: IAsset }) {
  return (
    <AssetWrapper key={asset.id}>
      <AssetTitle>{asset.name}</AssetTitle>
      <AssetImage src={asset.image_url} alt={asset.description} />

      <h1>특성</h1>
      <AssetTraitContainer>
        {asset.traits.map((trait) => (
          <AssetTrait>
            <h1 style={{ fontSize: "12px" }}>{trait.trait_type}</h1>
            <span style={{ fontSize: "20px" }}>{trait.value}</span>
          </AssetTrait>
        ))}
      </AssetTraitContainer>
    </AssetWrapper>
  );
}

export default Asset;
