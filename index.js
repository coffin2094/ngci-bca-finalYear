// const storage = [];
const button = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");
const ulEl = document.querySelector("#ul-l");

button.addEventListener("click", () => {
  const content = inputEl.value;
    //stor the data into localstorage instead of the storage array
  storage.push(inputEl.value);
  inputEl.value = "";
  render();
});

function render() {
  let listItems = "";
    //accesing the data from storage array
  storage.forEach((e) => {
    listItems += `
            <li>
             <a href = '${e}' target = '_blank'>${e}</a>
            </li>
        `;
  });
  ulEl.innerHTML = listItems;
}
