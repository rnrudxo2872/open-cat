import styled from "styled-components";
import { IAssetImage } from "../interfaces/assets.interface";

export const AssetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #d8d1d1c6;
  overflow: hidden;
  width: 15vw;
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
