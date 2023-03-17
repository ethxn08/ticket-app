export const getLast = async () => {
  const resp = await fetch("http://localhost:8080/last13");
  const data = await resp.json();
  console.log(data);

  return data.last;
};
