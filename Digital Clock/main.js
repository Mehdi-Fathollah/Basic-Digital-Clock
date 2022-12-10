const time = document.querySelector(".time");
setInterval(() => {
  const dateTime = new Date();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  time.innerText = `${String(hours).padStart(2, "0")} : ${String(
    minutes
  ).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
});
