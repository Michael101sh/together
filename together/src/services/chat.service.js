import axios from "axios";
import swal from "sweetalert2";
const SERVER_LOCAL_PORT = 3003;
const SERVER_REMOTE = "https://weather-zeit.michael101sh.now.sh";
const { NODE_ENV } = process.env;
const baseUrl =
  NODE_ENV === "development"
    ? "http://localhost:" + SERVER_LOCAL_PORT
    : SERVER_REMOTE;
const chatsUrl = baseUrl + "/api/chats";

export const getChats = (callback, isPublic) => {
  const data = JSON.stringify({ isPublic: isPublic });
  axios
    .get(chatsUrl, {
      params: {
        query: data
      },
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

export const getSpecificChat = (id, callback) => {
  const url = chatsUrl + "/" + String(id);
  axios
    .get(url, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(res => {
      callback(res.data);
    })
    .catch(err => console.log(err));
  return {};
};

export const sendMessage = (messageData, callback, store) => {
  axios
    .post(chatsUrl, messageData, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(() => {
      callback(true);
      store.commit("setFeeling", messageData.feel);
    })
    .catch(err => {
      console.log(err);
      callback(false);
    });
};

export const sendReply = (chatId, message, callback) => {
  const url = chatsUrl + "/" + String(chatId);
  axios
    .patch(url, message, {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    .then(() => callback(true))
    .catch(err => {
      console.log(err);
      callback(false);
    });
};
