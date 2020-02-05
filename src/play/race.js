import chalkWorker from "chalk-animation";

const ELEMENTS = [
  // ["rabbit", "兔兔"],
  ["rabbit", "🐰"],
  ["turtle", "乌龟"],
  ["turtleStep", 0],
  ["rabbitStep", 0],
  ["start", "|"],
  ["end", "》"],
  ["pad", "."],
  ["speed", 1],
  ["steps", 50],
  ["stopAt", 42]
];

class Race extends Object {
  constructor(props = {}) {
    super(props);
    ELEMENTS.forEach(elem => {
      const [key, value] = elem;
      if (!(key in props)) this[key] = value;
    });
    this.timer = undefined;
    this.racing = undefined;
  }

  getRaceTrack() {
    // 起始状态
    if (!this.turtleStep && !this.rabbitStep)
      return `${this.turtle}${this.rabbit}${this.start}${this.pad.repeat(
        this.steps
      )}${this.end}`;

    // 计算 谁在前  谁在后
    const [[minStr, min], [maxStr, max]] = [
      [this.turtle, this.turtleStep],
      [this.rabbit, this.rabbitStep]
    ].sort((a, b) => a[1] - b[1]);

    const prefix = `${this.pad.repeat((min || 1) - 1)}`;
    const middle = `${this.pad.repeat(max - min)}`;
    const suffix = `${this.pad.repeat(this.steps - max)}`;

    const _start = `${this.start}${prefix}${minStr}`;
    const _end = suffix
      ? `${maxStr}${suffix}${this.end}`
      : `${this.end}${maxStr}`;
    return `${_start}${middle}${_end}`;
  }

  updateRaceTrack(state, racing) {
    racing.replace(state);
  }

  updateSteps() {
    if (this.turtleStep >= this.steps) {
      setTimeout(() => {
        clearInterval(this.timer);
        this.racing.stop();
      }, 300);
      return;
    }

    if (this.rabbitStep <= this.stopAt) {
      this.rabbitStep += 1 * (3 * this.speed);
    }

    this.turtleStep += 1 * this.speed;
  }

  race() {
    // 初始化赛道
    const initState = this.getRaceTrack();

    // 画画
    this.racing = chalkWorker.rainbow(initState);

    // 倒计时
    let t = 0;
    this.timer = setInterval(() => {
      //
      if (t <= 6) {
        t += 1;
        return;
      }

      // 更新赛道状态
      const state = this.getRaceTrack();
      if (this.turtleStep >= this.steps) {
        state.replace("乌龟", "🐰");
        state.replace("🐰", "🐢");
      }

      // 重画
      this.updateRaceTrack(state, this.racing);

      // 计算龟兔的进程
      this.updateSteps();
    }, 150);
  }
}

const run = new Race();
run.race();
