const item = new DragSelect({
  selectables: document.querySelectorAll(".item"),
  dropZones: [
    {
      element: document.querySelector("#zone-1"),
      id: "zone-1",
    },
    {
      element: document.querySelector("#zone-2"),
      id: "zone-2",
    },
    { element: document.querySelector("#zone-3"), id: "zone-3" },
    {
      element: document.querySelector("#zone-4"),
      id: "zone-4",
    },
    {
      element: document.querySelector("#zone-5"),
      id: "zone-5",
    },
    { element: document.querySelector("#zone-6"), id: "zone-6" },
    {
      element: document.querySelector("#zone-7"),
      id: "zone-7",
    },
    {
      element: document.querySelector("#zone-8"),
      id: "zone-8",
    },
    { element: document.querySelector("#zone-9"), id: "zone-9" },
    {
      element: document.querySelector("#zone-10"),
      id: "zone-10",
    },
    {
      element: document.querySelector("#zone-11"),
      id: "zone-11",
    },
    { element: document.querySelector("#zone-12"), id: "zone-12" },
  ],
  //   onDragStop: function (selectedElements, event) {
  //     centerItemInDropZone(selectedElements[0], event.target);
  //   },
});

// function centerItemInDropZone(item, dropZone) {
//   if (dropZone.classList.contains("garden-bed")) {
//     item.style.position = "absolute";
//     item.style.left = "50%";
//     item.style.top = "50%";
//     item.style.transform = "translate(-50%, -50%)";
//     item.style.margin = "auto";
//     dropZone.appendChild(item);
//   } else {
//     item.removeAttribute("style");
//   }
// }

//Plants image array
let url = "/images/",
  plants = [
    url + "1.png",
    url + "2.png",
    url + "3.png",
    url + "4.png",
    url + "5.png",
    url + "6.png",
    url + "14.png",
  ];

function getRandomImage(images) {
  return images[Math.floor(Math.random() * images.length)];
}

let items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.style.backgroundImage = `url(${getRandomImage(plants)})`;
});
