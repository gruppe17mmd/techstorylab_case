const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("Category");

fetch("https://rzhyrlurvdibvkxkycpu.supabase.co/rest/v1/projekt_products", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6aHlybHVydmRpYnZreGt5Y3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTYwMTcsImV4cCI6MjA0MTUzMjAxN30.Xw7NBVRpvHDXbMvN0o0LzXZlvAyB5QfLDBdjwkaEhQk",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(data) {
  // const filteredProducts = data.filter((product) => product.Category === category);
  //console.log(filteredProducts);
  console.log(data);

  let filteredProducts = [];
  console.log(category);

  if (category === "FotoOglyd") {
    console.log("hej");

    filteredProducts = data.filter((product) =>
      [
        "Camera Mounts",
        "Camera Lenses",
        "Light kits and Reflectors",
        "Wheeled devices",
        "Camera with Lens",
        "Tripods and Monopods",
        "Microphones and Audio Recorders",
        "Camera Stabilisers",
        "Head-mounted Display (HMD)",
        "Camera with Lens and Stabiliser",
      ].includes(product.Type.trim())
    );
  } else if (category === "Studios") {
    console.log("hej");

    filteredProducts = data.filter((product) => ["Smartphones"].includes(product.Type.trim()));
  } else if (category === "EnhederKablerOgAdaptere") {
    filteredProducts = data.filter((product) => ["Accessories", "Wall chargers", "Converts connector types", "Development kits", "Smartphones"].includes(product.Type.trim()));
    //kode til VRAI
  } else if (category === "VROgAI") {
    filteredProducts = data.filter((product) => ["Artificial Intelligence", "Development Boards", "Peripheral Devices", "Board Games"].includes(product.Type.trim()));
  } else {
    console.log("nothing was found");
  }
  console.log(filteredProducts);

  //her skal der være en qs der indsætter en h2 overskrift til kategorier

  filteredProducts.forEach((element) => {
    console.log(element);

    const html = /*html*/ `
   
   <div class= "product_item">
   <img src="../img/Kamera_dummy.webp" alt="dummy" class="dummy_style">
   <div>
   <h3 class="produkt_navn">${element["Produktnavn og model"]}</h3>
          <p class="mærke">${element.Mærke}</p> </div>
          <div class="link_style">
          <a href="produkt.html?id=${element["Asset ID"]}" class="LæsMereBTN">Se Mere</a>
          </div>
          </div>
          `;
    document.querySelector("#product_container").insertAdjacentHTML("beforeend", html);
  });
}

// <p class="Taksonomi1">${element["Taksonomi 1"]}</p>
