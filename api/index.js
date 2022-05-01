//index.js
const axios = require("axios");
const cheerio = require("cheerio");
const { addNewValue } = require("../services");
const notifier = require("node-notifier");

const MIN_BTC = 37500;
const MIN_ETC = 27500;

const msg = {
  ETH: {
    title: "COMPRAR ETH",
    message: `Ta na hora de comprar ETH menor ou iguau ${MIN_ETC}`,
  },
  BTC: {
    title: "COMPRAR BTV",
    message: `Ta na hora de comprar BTC menor ou iguau ${MIN_BTC}`,
  },
};

const response = (data, currency) => {
  try {
    const $ = cheerio.load(data); // Initialize cheerio
    const value = Number(
      $("#last_last").text().replace(".", "").replace(",", ".")
    );

    if (MIN_BTC <= value) {
      notifier.notify(msg[currency]);
    }

    if (MIN_ETC <= value) {
      notifier.notify(msg[currency]);
    }

    if (!isNaN(value))
      addNewValue({
        currency,
        value,
      });
  } catch (error) {
    console.log(error);
  }
};

setInterval(() => {
  axios.get("https://br.investing.com/crypto/bitcoin").then(({ data }) => {
    response(data, "BTC");
  });
  axios.get("https://br.investing.com/crypto/ethereum").then(({ data }) => {
    response(data, "ETH");
  });
}, 100 * 60);
