import React, { useState } from 'react'

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cont, setCont] = useState('');
  const [pass, setPass] = useState('');

  const SubmitValue = (event) => {
    event.preventDefault()
    var nameVal = document.getElementById("name").value;
    var emailVal = document.getElementById("email").value;
    var contVal = document.getElementById("cont").value;
    var passVal = document.getElementById("pass").value;

    var nm = /^[A-Za-z]+$/;   //name validation...

    var pw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,15}$/;  //password validation...

    if ((nameVal == "") && (emailVal == "") && (contVal == "") && (passVal == "")) {
      alert("all fields are required...");
    }
    else if (nameVal.length == "") {
      alert("enter full name");
    }
    else if (!nameVal.match(nm)) {
      alert("name is not valid");
    }
    else if (emailVal.length == "") {
      alert("enter email...");
    }
    else if ((!emailVal.includes('@')) || (!emailVal.includes('.'))) {
      alert("invalid email...");
    }
    else {
      var cont_len = contVal.length;  //contact number validation...
      if ((cont_len == "") || (cont_len < 10) || (cont_len > 10)) {
        alert("invalid, number must be 10")
      }
      else {
        var passLen = passVal.length;
        if ((passLen == "") || (passLen < 8) || (passLen > 15)) {
          alert("password length must be 8-15");
        }
        else if (!passVal.match(pw)) {
          debugger
          alert("invalid password... Hint= (?=.*a-zA-Z)")
        }
      }
    }
    console.log(nameVal, emailVal, contVal, passVal)
  }

  const nameKey = () => {
    if (name == "") {
      document.getElementById("nameerror").style.display = "block"
    } else {
      document.getElementById("nameerror").style.display = "none"
    }
  }
  const emailKey = () => {
    if (email == "") {
      document.getElementById("emailerror").style.display = "block"
    }
    else {
      document.getElementById("emailerror").style.display = "none"
    }
  }
  const contKey = () => {
    if (cont == "") {
      document.getElementById("conterror").style.display = "block"
    }
    else {
      document.getElementById("conterror").style.display = "none"
    }
  }
  const passKey = () => {
    if (pass == "") {
      document.getElementById("passerror").style.display = "block"
    }
    else {
      document.getElementById("passerror").style.display = "none"
    }

  }

  return (
    <div className="container">
      <br />
      <br />
      <form style={{ backgroundColor: "#e4ebf7", marginLeft: "-20px", marginRight: "-20px", boxShadow: "8px 8px 22px darkgray" }} className='form-control container'>
        <br />
        <h1 class="h1 text-primary">Sign UP</h1>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <input type="text" id="name" className="form-control" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} onKeyUp={nameKey} />
            <p style={{ color: "red", display: "none" }} id='nameerror'>fill this field</p>
          </div>
          <div className="col">
            <input type="email" id="email" className="form-control" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} onKeyUp={emailKey} />
            <p style={{ color: "red", display: "none" }} id="emailerror">fill this field</p>
          </div>
        </div>
        <br /><br />
        <div className="row">
          <div className="col">
            <input type="number" id="cont" className="form-control" value={cont} placeholder="contact" onChange={(e) => setCont(e.target.value)} onKeyUp={contKey} />
            <p style={{ color: "red", display: "none" }} id="conterror">fill this field</p>
          </div>
          <div className="col">
            <input type="password" id="pass" className="form-control" value={pass} placeholder="password" onChange={(e) => setPass(e.target.value)} onKeyUp={passKey} />
            <p style={{ color: "red", display: "none" }} id="passerror">fill this field</p>
          </div>
        </div>
        <br /><br />
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary form-control" style={{ float: "right" }} onClick={SubmitValue}>Submit</button>
          </div>
          <br />
          <br />
        </div>
        <br />
      </form>
      <br />
    </div>
  )
}


export default Form
