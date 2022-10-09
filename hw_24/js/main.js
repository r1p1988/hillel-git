const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;
const imgUrl = `https://mc-astro.github.io/tesla-roadster-colors/img`;

const colorPicker = document.querySelector(".color-picker");
const slideshowContainer = document.querySelector(".slideshow-container");

$.ajax({
    url : URL,
    method: 'GET',
        error: error => console.log(error)
})
    .done(() => {
    let mySlides = document.createElement("div");
    mySlides.className = "mySlides";

    let title = document.createElement("div");
    title.className = "text";
                    
    let imgColors = document.createElement("img");
    $(imgColors).width("100%");

    mySlides.append(imgColors);
    mySlides.append(title);
    slideshowContainer.append(mySlides);
    }
    )
  .done(data=>{
      $.each(JSON.parse(data), function (index, item) {
        let spanColors = document.createElement("span");
          $(spanColors).css('background', `${item.color}`);
          $(spanColors).addClass(`dot`);

          $(`.mySlides > img`).attr('src', imgUrl + `/${JSON.parse(data)[0].img}` + `.jpg`);
          $(`.mySlides > img`).attr(`alt`, `${JSON.parse(data)[0].title}`);
          $(`.text`).text(`${JSON.parse(data)[0].title}`);

          colorPicker.append(spanColors);

        $(spanColors).on(`click`, () => {
            $(`.mySlides > img`).attr('src', imgUrl + `/${item.img}` + `.jpg`);
            $(`.mySlides > img`).attr(`alt`, `${item.title}`);
            $(`.text`).text(`${item.title}`);
        })
          
      })
  })
    