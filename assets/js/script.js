//loading
window.addEventListener("load", () => {
  let randomNumber = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
  setTimeout(function () {
    document.querySelector(".loading__animation").style.display = "none";
  }, randomNumber);

  getData();
});

async function getData() {
  try {
    const respons = await fetch("assets/js/my_data_collection.json");
    const datas = await respons.json();
    createElement(datas);
  } catch (e) {
    alert("Erorr, please contact Developer!");
  }
}

function createElement(data) {
  // header element
  const headerWrapper = document.getElementById("headerWrapper");

  const headerImg = document.createElement("img");
  headerImg.classList.add("header__profil");
  headerImg.src = data.profileImg;

  const headerUsername = document.createElement("h1");
  headerUsername.classList.add("header__username");
  headerUsername.innerText = data.username;

  const headerName = document.createElement("p");
  headerName.classList.add("header__name");
  headerName.innerText = data.name;

  headerWrapper.append(headerImg, headerUsername, headerName);

  // link element
  const dataLink = data.link;
  dataLink.map((link) => {
    const linkList = document.getElementById("listLink");

    const linkItem = document.createElement("a");
    linkItem.classList.add("link__item");
    linkItem.innerText = link.name;
    linkItem.classList.add(link.color);

    linkList.appendChild(linkItem);
  });

  // gallery element
  const dataGallery = data.myGallery;
  dataGallery.map((gallery) => {
    const galleryList = document.getElementById("listGallery");

    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");

    const galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__img");
    galleryImg.setAttribute("alt", gallery.name);
    galleryImg.src = gallery.img;

    const galleryTitle = document.createElement("h3");
    galleryTitle.classList.add("gallery__title", gallery.color);
    galleryTitle.innerText = gallery.name;

    galleryItem.append(galleryImg, galleryTitle);

    galleryList.appendChild(galleryItem);
  });
}
