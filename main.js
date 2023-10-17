let m = document.querySelector(".men").addEventListener('click', myMenu);

function myMenu(){
let n = document.querySelector(".menudropdown");
if (n.style.display === "block") {
  n.style.display = "none";
}else {
  n.style.display = "block";
}

}

function myFunction() {
  let x = document.getElementById("dropDown");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function closeNav() {
  let x = document.getElementById("dropDown");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function myReward() {
  let r = document.getElementById("rewardDrop");
  if (r.style.display === "block") {
    r.style.display = "none";
  } else {
    r.style.display = "block";
  }
}
function myRewards() {
    let r = document.getElementById("rewardDrop");
    if (r.style.display === "none") {
      r.style.display = "none";
    } else {
      r.style.display = "none";
    }
  }