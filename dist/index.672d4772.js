impo;
// let heading=document.createElement("h1");
// heading.innerHTML=("Hi Karan , i am react")
// let show=document.getElementById("main")
// show.appendChild(heading);
let heading = React.createElement("h1", {
    id: "heading"
}, "Hi Karan I am Reactjs!");
let heading_display = ReactDOM.createRoot(document.getElementById("main"));
heading_display.render(heading); // 1:13:00

//# sourceMappingURL=index.672d4772.js.map
