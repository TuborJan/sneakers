import axios from "axios";

export const postData = async (to, item) => {
  await axios
    .post(`https://63a57287318b23efa793b328.mockapi.io/${to}`, item)
    .catch((error) => {
      alert(error.message);
    });
};

export const deleteData = async (from, item) => {
  await axios
    .delete(`https://63a57287318b23efa793b328.mockapi.io/${from}/${item}`)
    .catch((error) => {
      alert(error.message);
    });
};

export const fetchItemsData = async (from, to, setError) => {
  const response = await axios
    .get(`https://63a57287318b23efa793b328.mockapi.io/${from}`)
    .catch((error) => {
      setError(error.message);
    });
  to(response.data);
};
