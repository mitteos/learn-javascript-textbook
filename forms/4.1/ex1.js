const genres = document.querySelector("#genres")

// 1
let selectedOption = genres.options[genres.selectedIndex];
alert( selectedOption.value );
alert( selectedOption.text );

// 2
let newOption = new Option("Классика", "classic");
genres.append(newOption);

// 3
newOption.selected = true;
