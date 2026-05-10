const targetDate = new Date("Jul 7, 2026");

const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minutesEl = document.querySelector('[data-value="mins"]');
const secondsEl = document.querySelector('[data-value="secs"]');

const id = setInterval(() => {
    const currentDate = new Date();
    const time = targetDate - currentDate;

    if (time <= 0) {
        clearInterval(id);
        daysEl.textContent = '0';
        hoursEl.textContent = '00';
        minutesEl.textContent = '00';
        secondsEl.textContent = '00';
        return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);





        daysEl.textContent = days;
    hoursEl.textContent = String(hours);
    minutesEl.textContent = String(mins);
    secondsEl.textContent = String(secs);
}, 1000);
