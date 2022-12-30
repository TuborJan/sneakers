import axios from "axios";

export async function postData(to, item) {
  await axios.post(`https://63a57287318b23efa793b328.mockapi.io/${to}`, item);
}

export async function deleteData(from, item) {
  await axios.delete(
    `https://63a57287318b23efa793b328.mockapi.io/${from}/${item}`
  );
}

export async function fetchItemsData(from, to, setError) {
  const response = await axios
    .get(`https://63a57287318b23efa793b328.mockapi.io/${from}`)
    .catch((error) => {
      setError(error.message);
    });
  to(response.data);
}
