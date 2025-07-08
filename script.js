
const markAllReadBtn = document.querySelector(".mark-all-read");
const unreadNotifications = document.querySelectorAll(".notify-item--unread");
const notifyCount = document.querySelector(".notify-count");

markAllReadBtn.addEventListener("click", () => {
  unreadNotifications.forEach(item => {
    item.classList.remove("notify-item--unread");
    const dot = item.querySelector(".notify-dot");
    if (dot) dot.remove();
  });
  notifyCount.textContent = "0";
});
 