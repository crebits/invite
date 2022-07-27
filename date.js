(function () {
  const date = new Date(),
    utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000,
    kstGap = 9 * 60 * 60 * 1000,
    today = new Date(utc + kstGap),
    weddingDays = new Date(today.getFullYear(), 9, 8),
    startDays = new Date(today.getFullYear(), 9, 1),
    endDays = new Date(today.getFullYear(), 10, 0),
    weddingDay = weddingDays.getDate(),
    startDay = startDays.getDay(),
    endDay = endDays.getDate(),
    gap = weddingDays.getTime() - today.getTime(),
    result = Math.ceil(gap / (1000 * 60 * 60 * 24)),
    week = Math.ceil((startDay + endDay) / 7);

  let html = "",
    calendarDay = 1,
    posDay = 0;
  for (let i = 0; i < week; i++) {
    html += "<tr>";
    for (let j = 0; j < 7; j++) {
      html += "<td>";
      if (startDay <= posDay && calendarDay <= endDay) {
        html += '<span class="';
        if (calendarDay === weddingDay) {
          html += "today";
        }
        html += `">${calendarDay}</span>`;
        calendarDay++;
      }
      html += "</td>";
      posDay++;
    }
    html += "</tr>";
  }
  document
    .querySelector("#remain")
    .insertAdjacentHTML(
      "beforeend",
      `<p>선호 <span style="color:#ea7664;">♥</span> 미향의 결혼식이 <span><span style="color:#ea7664;">${result}일</span>${
        result < 0 ? "지났습니다." : "남았습니다."
      }</p>`
    );
  document.querySelector("#calendar").insertAdjacentHTML("afterbegin", html);
})();
