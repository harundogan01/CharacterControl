const textarea = document.getElementById('messageArea');
const totalCharacterCount = document.querySelector('.totalCharacterCount'); 
const remainderCharacterCount = document.querySelector('.remainderCharacterCount'); 


function checkCharacterCount() {
    const charLength = textarea.value.length

    totalCharacterCount.textContent = charLength
    remainderCharacterCount.textContent = textarea.getAttribute('maxlength') - charLength
}

textarea.addEventListener('input', checkCharacterCount)

checkCharacterCount()