AFRAMEEE.registerComponent("infobanner", {
schema: {
    itemId: { default: "", type: "string" },
},
update: function () {
    this.createBanner();
},
createBanner: function () {
    postersInfo = {
        superman: {
            banner_url: "../assets/posters/superman-banner.jpg",
            title: "Superman",
            released_year: "1983", 
            description: "Superman is an active comic charactor, thats really famous in almost all ages. The character belongs to the DC comic book series. Here superman is the main charactor in these series, even today many movies are based on these comics and are recreations of the same",

        },
        "captain-aero": {
            banner_url: "../assets/posters/captain-aero-banner.jpg",
            title: "Captain Aero",
            released_year: "1942", 
            description: "Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942. Captain Aero Comics is a comic book from the Golden Age of Comics, originally published by Helnit Publishing and acquired by Holyoke Publishing in 1942.",

        },
        "outer-space": {
            banner_url: "../assets/posters/outer-space-banner.jpg",
            title: "Outer Space",
            released_year: "1952", 
            description: "Memories of Outer Space by French creator Enki Bilal is a series of short sci-fi themed stories. Each has its own sick little twist and turn which, coupled with Bilal’s detailed and brutal artwork, creates an often skin-twistingly strange feeling when read. Bilal’s approach at drawing people and characters is bold, prominent, and often proudly ugly. In other words, he is unafraid to show people’s wrinkles, blemishes and all bodily faults — in contrast to the very smooth and clean look of, say, most anime or North American cartoony styles.",

        },

    };
    const {itemId} = this.data;
    const fadeBackgroundEl = document.querySelector("#fadeBackground");
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("id", `${itemId}-banner`);
    entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.9,
        height: 1,
    });
    entityEl.setAttribute("material", { color: "#000" });
    entityEl.setAttribute("position", {x: 0, y:0.1, z: -1});
    const item = postersInfo[itemId];
    const imageEl = this.createImageEl(item);
    const titleEl = this.createTitleEl(item);
    const descriptionEl = this.createDescriptionEl(item);
    entityEl.appendChild(imageEl);
    entityEl.appendChild(titleEl);
    entityEl.appendChild(descriptionEl);

    fadeBackgroundEl.appendChild(entityEl);
  },
  createImageEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entityEl.setAttribute("material", { src: item.banner_url });
    entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entityEl;
  },
  createTitleEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entityEl;
  },
  createDescriptionEl: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    });
    entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entityEl;
},
});