const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
 
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!== '').map(tag => tag.trim())
    // here we split in values entered in inputbox with comma
    // but by seperating it by comma there is some space left
    //so to remove that space we use filter function i.e tag.trim()!== ''
    //i.e trim is not equal to any space
    //then, to map the trimmed words we use map function
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const ABC = document.createElement('span')
        ABC.classList.add('tag')
        ABC.innerText = tag
        tagsEl.appendChild(ABC)
    })
}
