import styled from "styled-components";
import { IAssetImage } from "../interfaces/assets.interface";

export const AssetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  width: 15vw;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3), 1px -1px 1px rgba(0, 0, 0, 0.3);
`;

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AssestContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: -30px;
`;

export const AssetOwnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const OwnerImgWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  overflow: hidden;
`;

export const OwnerImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const AssetTitle = styled.h1`
  font-size: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 12px;
  padding: 10px;
`;

export const AssetImage = styled.div<IAssetImage>`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid rgb(229, 232, 235);
`;

export const AssetTraitContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const AssetTrait = styled.div`
  width: 100%;
  font-size: 10px;
`;
