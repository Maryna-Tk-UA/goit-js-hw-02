const blackListWord1 = "spam";
const blackListWord2 = "sale";

function checkForSpam(message) {
  const messageCheck = message.toLowerCase();
  if (
    messageCheck.includes(blackListWord1) ||
    messageCheck.includes(blackListWord2)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
