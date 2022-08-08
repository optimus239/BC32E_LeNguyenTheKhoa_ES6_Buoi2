let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];
// const infoGlasses = (val) => {
//   let info = `<span>${val.name} - ${val.brand} (${val.color})</span>
//   <br>
//   <span>${val.price} Stocking</span>
//   <br>
//   <span>${val.description}</span>
//   `;
// };

const getElement = (id) => document.getElementById(id);
// getElement("vglassesList").style. = "";

const renderGlasses = (arrGlasses) => {
  const content = arrGlasses.reduce((value, val) => {
    return (value += `
            <div class="col-4">
                <img style="width:100%" src="${val.src}" onclick="pickGls('${val.id}')">
            </div>
        `);
  }, "");
  getElement("vglassesList").innerHTML = content;
};
window.onload = () => {
  renderGlasses(dataGlasses);
};

window.pickGls = (i) => {
  let getGlasses = "";
  let info = "";
  dataGlasses.forEach((currentValue) => {
    if (currentValue.id === i) {
      getGlasses = `<img src="${currentValue.virtualImg}">`;
      getElement("glassesInfo").style.display = "block";
      info = `<span class="d-block mb-1">${currentValue.name} - ${currentValue.brand} (${currentValue.color})</span>
      <button class="btn btn-danger">${currentValue.price}$</button>
      <span class="text-success pl-1">Stocking</span>
      <span class="d-block mt-2">${currentValue.description}</span>
      `;
    }
  });
  getElement("avatar").innerHTML = getGlasses;
  // console.log("infoGlasses: ");

  getElement("glassesInfo").innerHTML = info;
};
