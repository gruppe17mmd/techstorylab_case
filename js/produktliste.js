const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

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
  data.forEach((element) => {
    console.log(element);
    const link = document.createElement("a");
    link.href = `produkt.html?id=${element.id}`;
    link.textContent = element.Mærke;
    link.textContent = element["Produktnavn og model"];
    document.body.appendChild(link);
  });
}
