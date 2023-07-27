"use strict";

// Variables
let currentTipPercentage = 0;
let tipPercBtnStatus = false;

// buttons
const resetBtn = document.querySelector("#reset--btn");
const calculateBtn = document.querySelector("#calculate--btn");

// inputs
let bill = document.querySelector("#bill");
let people = document.querySelector("#people");
let customTipPercentage = document.querySelector("#custom-tip-percentage");

// Total amounts
let tipAmount = document.querySelector("#tip-amount");
let totalAmount = document.querySelector("#total-amount");

// Tip buttons
const btns = document.querySelectorAll(".tip--btn");
const btnsContainer = document.querySelector("#tip--btns");
/*
const tipBtn1 = parseInt(
  document.querySelector("#tip--btn-1").textContent.trim()
);
const tipBtn2 = parseInt(
  document.querySelector("#tip--btn-2").textContent.trim()
);

const tipBtn3 = parseInt(
  document.querySelector("#tip--btn-3").textContent.trim()
);

const tipBtn4 = parseInt(
  document.querySelector("#tip--btn-4").textContent.trim()
);

const tipBtn5 = parseInt(
  document.querySelector("#tip--btn-5").textContent.trim()
); */

// Percentage Buttons
btnsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".tip--btn");

  if (!clicked) return;

  currentTipPercentage = parseInt(clicked.textContent.trim());

  tipPercBtnStatus = true;
  console.log(currentTipPercentage);
});

// Calculating button

calculateBtn.addEventListener("click", function () {
  console.log("Calculate cliked");
  const currentBill = +bill.value;
  const currentPercentage = tipPercBtnStatus
    ? currentTipPercentage
    : +customTipPercentage.value;
  const currentPersons = +people.value;

  const tipAmt = (currentPercentage / 100) * currentBill;

  const tipAmountPer = tipAmt / currentPersons;
  tipAmount.textContent = tipAmountPer ? tipAmountPer.toFixed(2) : "0.00";
  const total = currentBill / currentPersons;
  totalAmount.textContent = total ? total.toFixed(2) : "0.00";

  console.log(currentBill);
  console.log(currentPercentage);
  console.log(currentPersons);
  tipPercBtnStatus = false;
});
// Reset Button
resetBtn.addEventListener("click", function () {
  console.log("Reset clicked");
  currentTipPercentage = 0;
  tipPercBtnStatus = false;
  bill.value = "";
  customTipPercentage.value = "";
  people.value = "";
  tipAmount.textContent = "0.00";
  totalAmount.textContent = "0.00";
});

/* 
<div class="operations__tab-container">
  <button class="btn operations__tab operations__tab--1" data-tab="1">
    <span>01</span>Instant Transfers
  </button>
  <button class="btn operations__tab operations__tab--2" data-tab="2">
    <span>02</span>Instant Loans
  </button>
  <button class="btn operations__tab operations__tab--3" data-tab="3">
      <span>03</span>Instant Closing
  </button>
</div>


const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');


tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  //Guard clause
  if (!clicked) return;

  //Remove Active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');

  //Area content area
  // console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
*/
