import styled from "styled-components";

export const AssetWrapper = styled.div`
  border-radius: 12px;
  background-color: #d8d1d1c6;
  width: 200px;
  margin: 15px;
`;

export const AssetTitle = styled.h1`
  font-size: 25px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: rgba(141, 138, 139, 0.6);
  border-radius: 12px;
  padding: 10px;
`;

export const AssetImage = styled.img`
  width: 150px;
  height: auto;
  padding: 12px;
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
