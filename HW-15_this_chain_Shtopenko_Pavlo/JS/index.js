let ladder = {
  step: 0,
  up: function () {
      this.step++;
      return this;
  },
  down: function () {
      this.step--;
      return this;
  },
  showStep: function () { // показывает текущую ступеньку
      alert(this.step);
  }
};

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();
// ladder.up().up().down().showStep();
// ladder.up().up().showStep();
// ladder.down();
// ladder.showStep();
// ladder.showStep();