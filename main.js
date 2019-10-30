// this autopopulates the heading with text provided in the name field
document.querySelector('.name-this-doggo-button').addEventListener ('click', function () {
  var dogNameInput = document.querySelector('.dog-name-input-field')
  var changeText = document.querySelector('.textt')
  changeText.innerHTML = dogNameInput.value;
  document.querySelector('.dog-name-input-field').value = ''
  })

// this makes the text in column one disappear
document.querySelector('.dog-button-one').addEventListener ('click', function() {
  document.querySelector('.dog-lingo-one').style.color='white';
})

// this makes the text in column two disappear
document.querySelector('.dog-button-two').addEventListener ('click', function() {
  document.querySelector('.dog-lingo-two').style.color='white';
})

// this makes the text in column three disappear
document.querySelector('.dog-button-three').addEventListener ('click', function() {
  document.querySelector('.dog-lingo-three').style.color='white';
})

// this autopopulates the text in column one from the dog lingo field
document.querySelector('.change-text').addEventListener ('click', function() {
  var changeParagraphInputField = document.querySelector('.change-paragraph-input-field')
  var dogLingoOne = document.querySelector('.dog-lingo-one')
  dogLingoOne.innerHTML = changeParagraphInputField.value;
  document.querySelector('.change-paragraph-input-field').value = ''
})
