import React from 'react'

import './SignUpForm.css'

function SignUpForm(props){
    return(
        <form className="SignUpForm">
        <input name="email" placeholder="Email" type="email" />
        <input name="guests" placeholder="# of guests" type="number" />
        <button>RSVP</button>
        </form>
    )

}

export default SignUpForm