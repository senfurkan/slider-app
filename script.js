var models = [
  {
    name: "BMW",
    image: "image/bmw.jpg",
    link: "https://www.bmw.com.tr/tr/index.html?tl=sea-goog-seao-pro-ccy-.-sear-.-.-brandbmw&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIPWB2vzLqQHAn1SMF8rbB48BTMgK_oYjekrVDScBp9XfyyutVEsCFYaAtLeEALw_wcB&adfcd=1699191202.d2kRw-9E4UWK2JOVin7omA.MTE2Njg1NSwxNDI1NTI0",
  },
  {
    name: "AUDİ",
    image: "image/audi.jpg",
    link: "https://www.audi.com.tr/tr/web/tr.html",
  },
  {
    name: "MERCEDES",
    image: "image/mercedes.jpg",
    link: "https://www.mercedes-benz.com.tr/?gagcmid=GA_20739445150_155538493575_679161451432&gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIODoJOmfPpITCKB3SjItTKUh-C6gpQsw5EJTniT8m8duywI-ZMAd_UaAngKEALw_wcB&gclsrc=aw.ds&group=all&subgroup=all.saloon&view=BODYTYPE",
  },
  {
    name: "SUBARU",
    image: "image/subaru.jpg",
    link: "https://www.subaru.com.tr/?gclid=Cj0KCQjw-pyqBhDmARIsAKd9XIPivVLSvYxOMMenYZ3bKLSKvUeDBXTBG7qV7AyEQsV6UZT6O9tGLTsaAqRhEALw_wcB",
  },
  {
    name: "DODGE",
    image: "image/dodge.jpg",
    link: "https://www.dodge.com/",
  },
];
var index = 4;

document.querySelector(".card-title").textContent = models[index].name;

document
  .querySelector(".card-img-top")
  .setAttribute("src", models[index].image);

document.querySelector(".card-link").setAttribute("href", models[index].link);
