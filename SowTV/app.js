const form = document.querySelector("#search-form");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", async () => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelectorAll("img").forEach((img) => img.remove());
    const keyword = form.elements.query.value;
    const config = {
      params: { q: keyword },
    };
    const req = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    console.log(req.data);
    getImages(req.data);
  });
});

const getImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
