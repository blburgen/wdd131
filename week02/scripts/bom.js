const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector("#list");

const li = document.createElement('li');
const deletButton = document.createElement('button');

li.textContent = input.ariaValueMax;
deletButton.textContent = '❌';

li.append(deletButton);
list.append(li);