let table1=document.getElementById("table1")

function isPrime(num) { // returns boolean
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for(let i = 3; i <= s; i += 2) { // start from 3, stop at the square, increment in twos
      if(num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}
function generateTable() {
    let c=0
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for (let i = 0; i < 100; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j <= 5; j++) {
      if(c===101){
        break;
    }
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`${c}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
        if(c%2==0){
          cell.addEventListener("mouseover" , function fun1(){
              cell.innerText="even" 
            })
          cell.style.backgroundColor="green"
        }
        else if(c%2!=0){
          cell.addEventListener("mouseover" , function fun1(){
            cell.innerText="odd" 
          })
            cell.style.backgroundColor="yellow"
        }
        if(isPrime(c)==true){
          cell.addEventListener("mouseover" , function fun1(){
            cell.innerText="prium" 
          })
          cell.style.backgroundColor="red"
        }
        c++
      }
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "5");
  }
  table1.textContent=generateTable()