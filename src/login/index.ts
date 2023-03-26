import './index.css'

function submit(event: Event):void{
    console.log(event, event.target)
    event.preventDefault()
    event.stopPropagation()
}
const form = document.getElementById('form') as HTMLFormElement
form.addEventListener('submit', (event: Event)=>{
    event.preventDefault()
    new FormData(form)
})

form.addEventListener('formdata', (event: FormDataEvent)=>{
    const data = event.formData
    console.log(Object.fromEntries(data.entries()))
    
    
})
