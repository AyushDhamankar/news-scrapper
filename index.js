const cheerio = require("cheerio");
const axios = require("axios");

const TheHinduLatestNewsUrl = "https://www.thehindu.com/latest-news/";
const getTheHinduLatestNews = async () => {
  try {
    const response = await axios.get(TheHinduLatestNewsUrl);
    const $ = cheerio.load(response.data);
    const TheHinduLatestNewsData = [];

    $("div.latest-news li").each(function (el, index) {
      let url = $(this).find(".element a").attr("href");
      let img = $(this)
        .find("img.media-object.adaptive.placeholder")
        .attr("data-src-template");
      let title = $(this).find(".title a").text().trim();
      let type = $(this).find(".label a").text().trim();
      let time = $(this).find(".news-time.time").attr("data-published");

      if (img == undefined) {
        let new_img =
          "https://w7.pngwing.com/pngs/9/608/png-transparent-india-the-hindu-hinduism-editorial-om-hindu-label-text-service.png";
        TheHinduLatestNewsData.push({
          url: url,
          img: new_img,
          title: title,
          type: type,
          time: time,
        });
      } else {
        TheHinduLatestNewsData.push({
          url: url,
          img: img,
          title: title,
          type: type,
          time: time,
        });
      }
    });

    return TheHinduLatestNewsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // rethrow error for further handling if needed
  }
};

// This code is for getting more data from Hindustan Times
// const HindustanTimesLatestNewsUrl =
//   "https://www.hindustantimes.com/latest-news";
// const HindustanTimesNewsUrl = "https://www.hindustantimes.com";
// const getHindustanTimesLatestNews = async (url) => {
//   try {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);
//     let HindustanTimesLatestNewsData = [];

//     $("section.listingPage .cartHolder").each(function (el, index) {
//       let url =
//         "https://www.hindustantimes.com" + $(this).find(".hdg3 a").attr("href");
//       let img = $(this).find("img.lazy").attr("data-src");
//       let title = $(this).find(".hdg3").text();
//       let type = $(this).find(".secName a").text();
//       let time = $(this)
//         .find(".dateTime")
//         .text()
//         .replace("Published on", "")
//         .trim();
//       time = time.replace("Updated on", "").trim();

//       if (img == undefined) {
//         let new_img = $(this).find("figure span a img").attr("src");
//         HindustanTimesLatestNewsData.push({
//           url: url,
//           img: new_img,
//           title: title,
//           type: type,
//           time: time,
//         });
//       } else {
//         HindustanTimesLatestNewsData.push({
//           url: url,
//           img: img,
//           title: title,
//           type: type,
//           time: time,
//         });
//       }
//     });

//     // Check if there's a next page and fetch its data recursively
//     if (HindustanTimesLatestNewsData.length < 100) {
//       let next_page = HindustanTimesNewsUrl + $(".next a").attr("href");
//       await getHindustanTimesLatestNews(next_page);
//     }

//     // Return the data once all pages are fetched
//     return HindustanTimesLatestNewsData;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error; // Rethrow error for further handling if needed
//   }
// };

const HindustanTimesLatestNewsUrl = "https://www.hindustantimes.com/latest-news";

const getHindustanTimesLatestNews = async () => {
  try {
    const response = await axios.get(HindustanTimesLatestNewsUrl);
    const $ = cheerio.load(response.data);
    let HindustanTimesLatestNewsData = [];

    $("section.listingPage .cartHolder").each(function (index, el) {
      let url = "https://www.hindustantimes.com" + $(this).find(".hdg3 a").attr("href");
      let img = $(this).find("img.lazy").attr("data-src");
      let title = $(this).find(".hdg3").text();
      let type = $(this).find(".secName a").text();
      let time = $(this)
        .find(".dateTime")
        .text()
        .replace("Published on", "")
        .replace("Updated on", "")
        .trim();

      if (img == undefined) {
        let new_img = $(this).find("figure span a img").attr("src");
        HindustanTimesLatestNewsData.push({
          url: url,
          img: new_img,
          title: title,
          type: type,
          time: time,
        });
      } else {
        HindustanTimesLatestNewsData.push({
          url: url,
          img: img,
          title: title,
          type: type,
          time: time,
        });
      }
    });

    // Return the data once all pages are fetched
    return HindustanTimesLatestNewsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow error for further handling if needed
  }
};

const TheIndianExpressLatestNewsUrl = "https://indianexpress.com/latest-news/";
const getTheIndianExpressLatestNews = async () => {
  try {
    const response = await axios.get(TheIndianExpressLatestNewsUrl);
    const $ = cheerio.load(response.data);
    const TheIndianExpressLatestNewsData = [];

    $("div.nation div.articles").each(function (el, index) {
      let url = $(this).find("div.snaps a").attr("href");
      let img = $(this).find("img.attachment-thumbnail").attr("src");
      let title = $(this).find(".title h2 a").text().trim();
      // let type = $(this).find(".label a").text().trim();
      let time = $(this).find(".date").text();
      time = time.replace("Updated:", "").trim();
      TheIndianExpressLatestNewsData.push({
        url: url,
        img: img,
        title: title,
        type: "the indian express",
        time: time,
      });
    });

    return TheIndianExpressLatestNewsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // rethrow error for further handling if needed
  }
};

const TrendingNewsUrl = "https://indianexpress.com/section/trending/";
const getTrendingNews = async () => {
  try {
    const response = await axios.get(TrendingNewsUrl);
    const $ = cheerio.load(response.data);
    const TrendingNewsData = [];

    $("div.articles li").each(function (el, index) {
      let url = $(this).find("figure a").attr("href");
      let img = $(this).find("img.attachment-medium").attr("src");
      let title = $(this).find("h3 a").text().trim();
      // let type = $(this).find(".label a").text().trim();
      const currentDate = new Date();

      // Get day, month, and year
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const year = currentDate.getFullYear();

      // Format the date
      const time = `${day} ${month} ${year}`;

      TrendingNewsData.push({
        url: url,
        img: img,
        title: title,
        type: "the indian express",
        time: time,
      });
    });

    return TrendingNewsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // rethrow error for further handling if needed
  }
};

const TimesOfIndiaLatestNewsUrl = "https://timesofindia.indiatimes.com/news";
const getTimesOfIndiaLatestNews = async () => {
  try {
    const response = await axios.get(TimesOfIndiaLatestNewsUrl);
    const $ = cheerio.load(response.data);
    const TimesOfIndiaLatestNewsData = [];

    $("ul.HytnJ li").each(function (el, index) {
      let url = $(this).find("a.VeCXM").attr("href");
      let img = $(this)
        .find("div.oo7Ma img")
        .attr("data-src");
      let title = $(this).find("p.CRKrj").text().trim();
      const currentDate = new Date();

      // Get day, month, and year
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const year = currentDate.getFullYear();

      // Format the date
      const time = `${day} ${month} ${year}`;

      TimesOfIndiaLatestNewsData.push({
        url: url,
        img: img,
        title: title,
        type: "Times Of India",
        time: time,
      });
      
    });

    return TimesOfIndiaLatestNewsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // rethrow error for further handling if needed
  }
};

const NewYorkTimesLatestNewsUrl = "https://www.nytimes.com/international/section/us";
const getNewYorkTimesLatestNews = async () => {
  try {
    const response = await axios.get(NewYorkTimesLatestNewsUrl);
    const $ = cheerio.load(response.data);
    const NewYorkTimesLatestNewsData = [];

    $("ol li.css-18yolpw").each(function (el, index) {
      let url = "https://www.nytimes.com" + $(this).find("a.css-8hzhxf").attr("href");
      let img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrYJ8yYY3wICkgF8ZD-yvmjhUcZoOrSmTTt50eybJz8w&s";
      let title = $(this).find("h3.css-1kv6qi").text().trim();
      const currentDate = new Date();

      // Get day, month, and year
      const day = currentDate.getDate();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const year = currentDate.getFullYear();

      // Format the date
      const time = `${day} ${month} ${year}`;

      NewYorkTimesLatestNewsData.push({
        url: url,
        img: img,
        title: title,
        type: "New York Times",
        time: time,
      });
    });

    return NewYorkTimesLatestNewsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // rethrow error for further handling if needed
  }
};

const NBCLatestNewsUrl = "https://www.nbcnews.com/us-news";
const getNBCLatestNews = async () => {
  try {
    const response = await axios.get(NBCLatestNewsUrl);
    const $ = cheerio.load(response.data);
    const NBCLatestNewsData = [];

    $("div.styles_itemsContainer__saJYW div.wide-tease-item__wrapper").each(function (el, index) {
      let url = $(this).find("div.wide-tease-item__info-wrapper a").attr("href");
      let img = $(this)
      .find("picture img")
      .attr("src");
      let title = $(this).find("h2.wide-tease-item__headline").text();
      let time = $(this).find(".wide-tease-item__timestamp").text();

      NBCLatestNewsData.push({
        url: url,
        img: img,
        title: title,
        type: "NBC",
        time: time,
      });
    });

    return NBCLatestNewsData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // rethrow error for further handling if needed
  }
};

// For Testing the functions
// Using async/await
// (async () => {
//   try {
//     const data = await getTheWashingtonPostLatestNews();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// })();

module.exports = { getTheHinduLatestNews, getHindustanTimesLatestNews, getTheIndianExpressLatestNews, getTimesOfIndiaLatestNews, getTrendingNews, getNewYorkTimesLatestNews, getNBCLatestNews };
