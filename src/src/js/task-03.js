const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
const galleryList = images
  .map((img) => `<li><img src="${img.url}" src="${img.alt}" width="500"/></li>`)
  .join("");
gallery.insertAdjacentHTML("afterbegin", galleryList);

gallery.style.listStyle = "none";
gallery.style.padding = "15px";
gallery.style.width = "100%";
gallery.style.display = "flex";
gallery.style.flexDirection = "column";
gallery.style.gap = "10px";
gallery.style.alignItems = "center";
gallery.style.justifyContent = "center";
gallery.style.background = "radial-gradient(#33312cc2, #e7c99e86)";
gallery.style.border = "2px solid #7244421f";
gallery.style.boxShadow = "3px 10px 15px #37514b47";
