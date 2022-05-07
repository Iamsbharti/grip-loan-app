import axios from "axios";
let baseUrl = "";
if (process.env.NODE_ENV === "development") {
  baseUrl = process.env.REACT_APP_BASE_API_URL_DEV;
} else {
  baseUrl = process.env.REACT_APP_BASE_API_URL_PROD;
}
export const getUserLocation = async () => {
  const res = await axios.get("https://geolocation-db.com/json/");
  console.log(res.data);
  return res.data;
};
export const saveLoanDetails = async (
  userName,
  loanAmount,
  loanPeriod,
  ip,
  geolocation
) => {
  console.debug(
    "save loan details::",
    userName,
    loanAmount,
    loanPeriod,
    ip,
    geolocation
  );

  try {
    let response = await axios.post(
      `${baseUrl}/api/v1/loan/save?userName=${userName}&loanAmount=${loanAmount}&loanPeriod=${loanPeriod}&ip=${ip}&geolocation=${geolocation}`
    );
    console.debug("res::", response.data);
    return response.data;
  } catch (error) {
    console.warn(error);
    return error;
  }
};
