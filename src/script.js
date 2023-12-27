function buy() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  alert(
    `Thank you ${name}. You've just signed up for a free music sampling course, we will be in touch!`
  );
}
let button = document.querySelector("button");
button.addEventListener("click", buy);
