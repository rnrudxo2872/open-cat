import { IAsset } from "../interfaces/assets.interface";
import {
  AssestContainer,
  AssetImage,
  AssetOwnerContainer,
  AssetTitle,
  AssetWrapper,
  OwnerImg,
  OwnerImgWrapper,
} from "../styleds/Asset.styled";

function Asset({ asset }: { asset: IAsset }) {
  return (
    <AssetWrapper key={asset.id}>
      <AssetImage image={asset.image_url} />
      <AssestContainer>
        <AssetOwnerContainer>
          <OwnerImgWrapper>
            <OwnerImg
              src={asset.owner.profile_img_url}
              alt={`${asset.owner.user}'s profile image`}
            />
          </OwnerImgWrapper>
        </AssetOwnerContainer>
        <AssetTitle>{asset.name}</AssetTitle>
      </AssestContainer>
    </AssetWrapper>
  );
}

export default Asset;
