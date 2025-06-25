const debts = [];

const debt = {
  name: "Capital One",
  balance: 4574.14,
  apr: 24.24,
  type: "credit card",
  minDue: 170.00,
  dueDate: 13
};

const body = document.querySelector('.body');
const addButton = document.querySelector('.add-button');

debts.push(debt);

const renderDebtCards = () => {
  debts.forEach(debt => {
    const card = `<div class="card">
      <div class="card-inner">
        <p>${debt.name}</p>
      </div>
    </div>`;

    body.innerHTML += card;
  });
};

renderDebtCards();

addButton.addEventListener('click', () => {
  alert('click');
});
