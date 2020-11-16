window.onload = initialize;

var seats = [
  {
    name: "Adrián Ceniza",
    seat: 1
  },
  {
    name: "Antonio Gil",
    seat: 2
  },
  {
    name: "Adrián Lorenzo",
    seat: 3
  },
  {
    name: "Nobody",
    seat: 4
  },
  {
    name: "Nobody",
    seat: 5
  },
  {
    name: "Nobody",
    seat: 6
  },
  {
    name: "Nobody",
    seat: 7
  },
  {
    name: "Nobody",
    seat: 8
  },
  {
    name: "Nobody",
    seat: 9
  },
  {
    name: "Nobody",
    seat: 10
  },
  {
    name: "Nobody",
    seat: 11
  },
  {
    name: "Nobody",
    seat: 12
  },
  {
    name: "Nobody",
    seat: 13
  },
  {
    name: "Nobody",
    seat: 14
  },
  {
    name: "Nobody",
    seat: 15
  },
  {
    name: "Nobody",
    seat: 16
  }
];

function initialize() {
  var seatElements = document.getElementsByClassName("seat");
  for(var i = 0; i < seatElements.length; i++){
    showTooltipInfoSeat(seatElements[i]);
  }

  var formSeat = document.getElementById("form-seat");
  formSeat.addEventListener("submit", addSeat);
}

function addSeat(event){
  event.preventDefault();
  var formSeat = event.target;

  console.log(parseInt(formSeat.seat.value) - 1)

  seats[parseInt(formSeat.seat.value) - 1] = {
    name: formSeat.name.value,
    seat: parseInt(formSeat.seat.value)
  }

  console.log(seats)

  showTooltipInfoSeat(document.getElementById(`seat-${parseInt(formSeat.seat.value)}`));
}

function showTooltipInfoSeat(seatElement) {
  var posString = seatElement.id.substring(5);
  var pos = parseInt(posString);

  if(seats[pos - 1].name == "Nobody"){
    seatElement.style.fill = "white";
  } else {
    seatElement.style.fill = "greenyellow";
  }

  $(`#seat-${posString}`).tooltip("dispose");

  $(`#seat-${posString}`).tooltip({
    container: 'body',
    title: `<p>Seat nº${pos}</p><h3><strong>${seats[pos - 1].name}</strong> sitting here.</h3>`,
    html: true,
    placement: "bottom"
  });
}