const url =
  "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=50";

export const retrieveAssets = async () => {
  const options = {
    method: "GET",
  };

  return (await fetch(url, options)).json();
};
