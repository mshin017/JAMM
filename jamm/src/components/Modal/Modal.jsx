import React, { Component } from 'react'
import {label,input,button} from "react-bootstrap";

export default class Modal extends Component {
    render() {
        return (
        <div>
            <div> class="container"</div>
            <label>for="uname"><b>Username</b></label>
            <input>type="text" placeholder="Enter Username" name="uname" required </input>
      
            <label>for="psw"><b>Password</b></label>
            <input>type="password" placeholder="Enter Password" name="psw" required</input>
      
            <button>type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember"> Remember me </input>
            </label>
        </div>
        )
    }
}

