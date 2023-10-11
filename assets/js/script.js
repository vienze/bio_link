//loading
window.addEventListener("load", () => {
  let randomNumber = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
  setTimeout(function () {
    document.querySelector(".loading__animation").style.display = "none";
  }, randomNumber);
});

const getData = async () => {
  try {
    const respons = await fetch("assets/js/data.json");
    const datas = await respons.json();
    return datas;
  } catch (e) {
    alert("Erorr, please contact Developer!");
  }
};

//scroll to top
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTop").style.visibility = "visible";
  } else {
    document.getElementById("btnTop").style.visibility = "hidden";
  }
};

document.getElementById("btnTop").addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
