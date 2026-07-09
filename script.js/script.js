const nftImages = [
    "./assets/images/png/cartoon1.png",
    "./assets/images/png/cartoon2.png",
    "./assets/images/png/cartoon3.png",
    "./assets/images/png/cartoon4.png",
    "./assets/images/png/cartoon5.png",
    "./assets/images/png/cartoon6.png",
    "./assets/images/png/cartoon7.png",
    "./assets/images/png/cartoon8.png",
    "./assets/images/png/cartoon9.png",
    "./assets/images/png/cartoon10.png",
    "./assets/images/png/cartoon11.png",
    "./assets/images/png/cartoon12.png"
];

const grid = document.getElementById("nft-grid");

grid.innerHTML = nftImages.map(image => `
    <div class="card">
        <img class="images" width="275" height="275" src="${image}" alt="NFT">
    </div>
`).join("");