export const requestSankeyData = () => {
  return fetch("/datasets/sankey.json").then((response) => {
    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    return response.json();
  });
};
