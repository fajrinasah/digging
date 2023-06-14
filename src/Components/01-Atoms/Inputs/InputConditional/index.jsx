import { useState } from "react";

export default function InputConditional({}) {
  const [option, setOption] = useState();
  const selectedOption = document.getElementById("login-option-input").value;

  const RenderInputType = () => {
    if (option == "email") {
      return (
        <input
          className="input-for-label"
          type="email"
          required
          id="login-option-input"
          name="login-option-input-email"
          placeholder="youremail@gmail.com"
          minLength="10"
          pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
          title="Input your email"
        />
      );
    } else if (option == "username") {
      return (
        <input
          className="input-for-label"
          type="text"
          required
          id="login-option-input"
          name="login-option-input-username"
          placeholder="username"
          minLength="5"
          maxLength="15"
          title="Input your username"
        />
      );
    } else {
      return (
        <input
          className="input-for-label"
          type="tel"
          required
          id="login-option-input"
          name="login-option-input-phone-number"
          placeholder="0123456789"
          pattern="^[0-9]*$"
          title="Input your phone number"
        />
      );
    }
  };

  return (
    <div className={`input-conditional label-and-input d-flex-column`}>
      <label for="login-option-input" className="label-for-input">
        <select
          name="login-option"
          id="login-option"
          onChange={() => setOption(selectedOption)}
        >
          <option value="email" selected>
            Email
          </option>
          <option value="username">Username</option>
          <option value="phone-number">Phone Number</option>
        </select>
      </label>
      <RenderInputType />
    </div>
  );
}
