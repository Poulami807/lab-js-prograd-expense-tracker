let btn = document.getElementById("addBtn")


btn.addEventListener('click',()=>{
    let txt = document.getElementById("text").value
    let amt = document.getElementById("amount").value
    if (txt == '' || amt == '') {
        alert('The Text or Amount are empty');
      } else {
        localStorage.setItem(txt, amt);
      }
})

function history() {
    let incomeCount = 0,
      expenseCount = 0;
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        let text = localStorage.key(i);
        let amt = localStorage.getItem(text);
        if (amt.includes('-')) {
          expenseCount += Math.abs(parseFloat(amt));
        } else {
          incomeCount += parseFloat(amt);
        }
        let listUL = document.getElementById('list');
        let listItem = document.createElement('li');
        let liText = document.createElement('p');
        liText.textContent = text;
        listItem.appendChild(liText);
        let liAmt = document.createElement('p');
        liAmt.textContent = `${amt.includes('-') ? `` : `+`}${parseFloat(
          amt
        ).toFixed(2)}`;
        listItem.appendChild(liAmt);
        listUL.appendChild(listItem);
    }
    }
    document.getElementById('money-plus').textContent = `$${incomeCount.toFixed(
      2
    )}`;
    document.getElementById('money-minus').textContent = `$${Math.abs(
      expenseCount
    ).toFixed(2)}`;
    document.getElementById('balance').textContent = `$${(
      incomeCount - expenseCount
    ).toFixed(2)}`;
  }
  
  window.onload = () => {
    history();
  };