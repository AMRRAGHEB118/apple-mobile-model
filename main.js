// function imgSlider(anything){
//  document.querySelector('.apple-max-pro').Src = anything;
// }

// imgSlider()

let mainImg = document.getElementById("mainImg");

console.log(mainImg);
// let smallImgsArray = document.querySelectorAll(".imgIcon")
let smallImgsCollection =document.getElementsByClassName("imgIcon")
console.log(smallImgsCollection ,"collection");
// console.log(smallImgsArray , "array");
let smallImgsArray= Array.from(smallImgsCollection)

for(let i = 0 ; i <smallImgsArray.length;i ++){

        smallImgsArray[i].addEventListener("click", function(event){
            // console.log("click");
            // console.log(smallImgsArray[i].src);
            // let smallImgSrc =smallImgsArray[i].src
            // mainImg.src = smallImgSrc
                console.log(event.target.src);
                mainImg.src = event.target.src

        })
}

function colors(color){
    let colorImg = document.querySelector('.container')
    colorImg.style.background = color;
    colorImg.style.transition = 1
}