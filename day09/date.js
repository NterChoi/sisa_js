const timetableSection = document.createElement("section");
timetableSection.classList.add("timetable");

const timetableData = [
  { day: "월", startTime: "10:00", endTime: "22:00" },
  { day: "화", startTime: "10:00", endTime: "22:00" },
  { day: "수", startTime: "10:00", endTime: "22:00" },
  { day: "목", startTime: "10:00", endTime: "22:00" },
  { day: "금", startTime: "10:00", endTime: "23:00" },
  { day: "토", startTime: "10:00", endTime: "23:00" },
  { day: "일", startTime: "", endTime: "" },
];

const today = new Date();

timetableData.forEach((x, i) => {
  const scheduleDiv = document.createElement("div");
  scheduleDiv.classList.add("schedule");

  const isToday = document.createElement("div");
  if (today.getDay() === i) {
    isToday.classList.add(isToday);
  }

  const dayDiv = document.createElement("div");
  dayDiv.classList.add("day");
  dayDiv.innerHTML = `${x.day}요일`;

  const timeDiv = document.createElement("div");
  timeDiv.classList.add("time");
  timeDiv.innerHTML = !!x.startTime
    ? `${x.startTime} - ${x.endTime}`
    : "쉬는날";

  scheduleDiv.append(dayDiv);
  scheduleDiv.append(timeDiv);
  timetableSection.append(scheduleDiv);
});

document.body.append(timetableSection);
