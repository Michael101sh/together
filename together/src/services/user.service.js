import axios from "axios";
import swal from "sweetalert2";
const SERVER_LOCAL_PORT = 3003;
const SERVER_REMOTE = "https://weather-zeit.michael101sh.now.sh";
const { NODE_ENV } = process.env;
const baseUrl =
  NODE_ENV === "development"
    ? "http://localhost:" + SERVER_LOCAL_PORT
    : SERVER_REMOTE;
const usersUrl = baseUrl + "/api/users";

export const getUsers = callback => {
  axios
    .get(usersUrl, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(res => {
      callback(res.data);
    })
    .catch(err => console.log(err));
  return [];
};

export const addUser = (user, callback) => {
  const data = JSON.stringify(user);
  axios
    .post(usersUrl, data, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(() => {
      callback();
      swal("!נרשמת בהצלחה", "המתן/המתיני לאישור הורים", "success");
    })
    .catch(err => {
      console.log(err);
      swal("...אופס", ".ההרשמה לא הצליחה, נסה/י שוב", "error");
    });
};

export const isExists = async user => {
  const url = usersUrl + "/isExists";
  const data = JSON.stringify(user);
  const res = await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  return res;
};

export const loginRequest = async existUser => {
  const url = usersUrl + "/login";
  const data = JSON.stringify(existUser);
  const res = axios.post(url, data, {
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  });
  return res;
};

export const sendPass = async (email, nickname) => {
  const url = usersUrl + "/sendPass";
  const data = JSON.stringify({
    email: email,
    nickname: nickname
  });
  axios
    .post(url, data, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(res => {
      if (res.data === "Ok") {
        swal("הסיסמא נשלחה למייל שלך", "", "success");
      } else {
        swal("...אופס", "הכינוי או כתובת המייל לא קיימים במערכת", "error");
      }
    })
    .catch(err => {
      console.log(err);
      swal("...אופס", "השחזור לא הצליח, נסה/י שוב מאוחר יותר", "error");
    });
};
