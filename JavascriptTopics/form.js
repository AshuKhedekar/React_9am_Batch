document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  console.log(form);
  const sendMessageBtn = document.getElementById("sendMessageBtn");
  sendMessageBtn.addEventListener("click", function (e) {
e.preventDefault();
    // find the selected radio button
    const selectedRadio = document.querySelector("input[name='page']:checked");
    if (selectedRadio) {
      const selectedValue = selectedRadio.value;
      console.log(selectedValue)
      switch (selectedValue) {
        case "page1":
          window.location.href = "page1.htm";
          break;
        case "page2":
          window.location.href = "page2.htm";
          break;
        case "page3":
          window.location.href = "page3.htm";
          break;
        case "page4":
          window.location.href = "page4.htm";
          break;
        default:
          break;
      }
    } else {
      alert("Please select a page before sending the msg. ");
    }
  });
});
