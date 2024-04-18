import { useState } from "react"

function Form() {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
    

if (!email || !firstName) {
    setErrorMessage("Missing Information")
    return
}
setErrorMessage("")
alert(email + " " + firstName)
setEmail("")
setFirstName("")
}
const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if(inputName==="email"){
        setEmail(inputValue)
    }
    else if (inputName==="firstName"){
        setFirstName(inputValue)
    }

    setEmail(inputValue)
    console.log(inputName, inputValue)
}

return (
    <div className ="form">
     <h3> Want to get in contact?</h3>
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="email" onChange={handleInputChange}/> <br/>
            <input type="text" name="firstName" onChange={handleInputChange}/><br/>
            <button type ="submit"> ADD EMAIL</button>
            {errorMessage && (
                <div style={{color:"red"}}>ERROR: {errorMessage}</div>
            )}
        </form>
    </div>
    )
}

export default Form;




// export default function Contact() {
//     return (
//       <div>
//         <h1>Contact Page</h1>
//         <p>
//           Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
//           molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
//           magna a ultrices. Aenean pellentesque placerat lacus imperdiet
//           efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
//           mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
//           posuere, eget tristique dui dapibus. Maecenas fermentum elementum
//           faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
//           ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
//           dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
//           conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
//           rhoncus. Etiam vel condimentum magna, quis tempor nulla.
//         </p>
//       </div>
//     );
//   }
  