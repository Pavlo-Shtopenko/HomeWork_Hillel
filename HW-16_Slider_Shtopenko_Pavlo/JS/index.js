// Slider
// slide - title, description
//!!!! 1) next()
// !!!!2) prev()
//!!! 3) firstSlide()
//!!! 4) lastSlide()
//!!! 5) openSlide(number)
//!!! 6) addSlide(title, description) - to the end
// 7) insertSlide(number, title, description) - on the number positition
// 8) removeLastSlide()
// 9) removeSlide(number)

// Validate all fields!
// title and description are not empty!
// number param is number

const containerId1 = document.getElementById("slider-id1");
const containerId2 = document.getElementById("slider-id2");
const insertNewSlide = document.getElementById("newSlideItem").innerHTML;

function Slider(sliderId) {
  this.sliderId = sliderId;
  this.slider = document.getElementById(this.sliderId);
  let counter = 0;
  this.sliderBlock = this.slider.getElementsByClassName("carousel-inner")[0];
  this.sliderInner = this.slider.getElementsByClassName("carousel-item");
  this.sliderCount = this.sliderInner.length;
  this.firstSlide = this.sliderInner[0];

  this.next = function () {
    if (counter !== this.sliderInner.length - 1) {
      this.sliderInner[counter].classList.toggle("active");
      this.sliderInner[counter].nextElementSibling.classList.toggle("active");
      counter++;
    } else {
      this.firstSlide.classList.toggle("active");
      this.sliderInner[counter].classList.toggle("active");
      counter = 0;
    }
  };
  this.previous = function () {
    if (counter !== 0) {
      this.sliderInner[counter].classList.toggle("active");
      this.sliderInner[counter].previousElementSibling.classList.toggle(
        "active"
      );
      counter--;
    } else {
      this.sliderInner[this.sliderInner.length - 1].classList.add("active");
      this.sliderInner[0].classList.remove("active");
      counter = this.sliderInner.length - 1;
    }
  };
  this.toFirstSlide = function () {
    if (!this.firstSlide.classList.contains("active")) {
      this.firstSlide.classList.add("active");
      this.sliderInner[counter].classList.remove("active");
      counter = 0;
    }
  };
  this.toLastSlide = function () {
    if (
      !this.sliderInner[this.sliderInner.length - 1].classList.contains(
        "active"
      )
    ) {
      this.sliderInner[this.sliderInner.length - 1].classList.add("active");
      this.sliderInner[counter].classList.remove("active");
      counter = this.sliderInner.length - 1;
    }
  };
  this.addSlideToEnd = function (title, description) {
    this.title = title;
    this.description = description;
    this.sliderBlock.insertAdjacentHTML("beforeend", insertNewSlide);
    this.currentNumber = this.sliderInner.length;
    this.currentH5 =
      this.sliderInner[this.sliderInner.length - 1].getElementsByClassName(
        "number-item"
      )[0];
    this.currentH5.insertAdjacentHTML("beforeend", this.currentNumber);
    this.currentTitle =
      this.sliderInner[this.sliderInner.length - 1].getElementsByClassName(
        "title-item"
      )[0];
    this.currentTitle.insertAdjacentHTML("beforeend", this.title);
    this.currentTitle =
      this.sliderInner[this.sliderInner.length - 1].getElementsByClassName(
        "parag-item"
      )[0];
    this.currentTitle.insertAdjacentHTML("beforeend", this.description);
    this.toLastSlide();
    counter = this.sliderInner.length - 1;
  };

  this.insertSlide = function (numberSlide, title, description) {
    this.num = numberSlide;
    this.title = title;
    this.description = description;
    if (
      !Number.isNaN(this.num) &&
      this.num > 0 &&
      this.num < this.sliderInner.length
    ) {
      this.sliderInner[this.num - 1].insertAdjacentHTML(
        "beforebegin",
        insertNewSlide
      );
      this.currentNumber = this.num;

      this.currentH5 =
        this.sliderInner[this.num - 1].getElementsByClassName("number-item")[0];
      this.currentH5.insertAdjacentHTML("beforeend", this.currentNumber);
      this.currentTitle =
        this.sliderInner[this.num - 1].getElementsByClassName("title-item")[0];
      this.currentTitle.insertAdjacentHTML("beforeend", this.title);
      this.currentTitle =
        this.sliderInner[this.num - 1].getElementsByClassName("parag-item")[0];
      this.currentTitle.insertAdjacentHTML("beforeend", this.description);
      this.sliderInner[this.num - 1].classList.toggle("active");
      this.sliderInner[counter].classList.toggle("active");
      counter = this.num - 1;
    } else {
      console.log("неверный формат");
    }
  };
  this.openSlide = function (numberSlide) {
    this.num = numberSlide;
    if (!Number.isNaN(this.num)) {
      if (
        this.num !== 0 &&
        this.num <= this.sliderInner.length &&
        this.num !== counter
      ) {
        this.sliderInner[this.num - 1].classList.toggle("active");
        this.sliderInner[counter].classList.toggle("active");
        counter = this.num - 1;
      } else {
        console.log("Несуществующий номер слайда. Введите номер еще раз");
      }
    } else {
      console.log("Неверный формат ввода. Введите номер слайда");
    }
  };
  this.removeLastSlide = function () {
    this.sliderInner[this.sliderInner.length - 1].remove();
  };
  this.removeSlide = function (numberSlide) {
    this.num = numberSlide;
    if (this.num - 1 !== counter) {
      this.sliderInner[this.num - 1].remove();
    } else {
      if (counter !== this.sliderInner.length - 1) {
        this.sliderInner[counter].classList.toggle("active");
        this.sliderInner[counter].nextElementSibling.classList.toggle("active");
        counter++;
      } else {
        this.firstSlide.classList.toggle("active");
        this.sliderInner[counter].classList.toggle("active");
        counter = 0;
      }
      this.sliderInner[this.num - 1].remove();
    }
  };
}

const slider1 = new Slider("slider-id1");
const slider2 = new Slider("slider-id2");
