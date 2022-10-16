const URL = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;
const imgUrl = `https://mc-astro.github.io/tesla-roadster-colors/img`;

const carImg = $(`#carImg`);
const carImgTitle = $(`#carImgTitle`);
const colorPicker = $(`.color-picker`);

const renderColorBtns = (data) => {
  $(data).each((index, item) => {
    let spanColors = $(
      `<span class="dot" style="background-color: ${item.color}"></span>`
    );
    spanColors.on(`click`, () => renderCar(item));
    colorPicker.append(spanColors);
  });
};

const renderCar = (item) => {
  carImg.width("100%");
  carImg.attr(
    `src`,
    imgUrl + `/${item.img}` + `.jpg`
  );
  carImg.attr(`alt`, item.title);

  carImgTitle.html(item.title);
};

$.ajax({
  url: URL,
  method: "GET",
  success: (data) => {
    data = JSON.parse(data);
    renderColorBtns(data);
    renderCar(data[0]);
  },
  error: (error) => console.log(error),
});
    