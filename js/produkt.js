const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://rzhyrlurvdibvkxkycpu.supabase.co/rest/v1/projekt_products?Asset ID=eq.${id}`, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6aHlybHVydmRpYnZreGt5Y3B1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NTYwMTcsImV4cCI6MjA0MTUzMjAxN30.Xw7NBVRpvHDXbMvN0o0LzXZlvAyB5QfLDBdjwkaEhQk",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(data) {
  console.log(data);

  const html = /*html*/ `
  <div class= "product_item">
  <h2>Produktnavn og model</h2>
         <p class="mærke">${data[0].Mærke}</p>
         <p class="Taksonomi1">${data[0]["Taksonomi 1"]}</p>
        
         </div>`;
  document.querySelector("#product_container").insertAdjacentHTML("beforeend", html);
}
