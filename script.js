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
