
const fullNameInput = document.querySelector("#namee")


document.querySelector("#submit").addEventListener("click", (e) => {
    e.preventDefault()
    const emailMessage = getEmailMessage({
        name: fullNameInput.value,
    })

    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "mostaphataha@onmail.com", // replace it with your email address (the email you want to receive messages at)
            subject: "Message From Your Website",
            message: emailMessage,
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            fullNameInput.value = ""
        })
})

const getEmailMessage = ({ name } = {}) => {
    return `
        <p>You Have Received A New Message From Your Birth Website:</p>
        <div style="background-color: #101010; color: #fbfbfb; padding: 12px">
            <p style="margin: 0;">Name: ${name}</p>

        </div>
    `
}
