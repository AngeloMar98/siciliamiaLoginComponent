import React, { useState } from "react";

/* 
This is the form the user interacts with, it has two fields: email and password.
The email needs to in a valid form, and the password needs to be 8 characters or longer.
We utilize states to handle the data input in the forms and setters to keep changing them as
new data gets input.
The validation of each field is done naturally with input elements available attributes, if any
of the two fields isn't valid an error message gets displayed and the border turns red.

Only when both the fields are valid the submit event is fired.
The submit event received as prop a function that will confirm the form as completed. 
Once the value is set true, the user will be shown a confirmation message.

*/

export function LoginForm({ setFormCompleted, email, setEmail }) {
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const [password, setPassword] = useState("");

  // This will change according to the password state, so we can yes store the password
  // but also display the hidden version to the screen
  const hiddenPassword = hidePassword(password);
  return (
    // the form contains two divs with the two fields, email and passowrd
    <div className="pt-6 pb-3 px-4">
      <h2 className="text-4xl font-bold mb-3 text-center">Register</h2>
      <form
        id="submit-form"
        // The event fired when the fields are valid
        onSubmit={(e) => {
          console.log("hello");
          e.preventDefault();
          // Sets the value to true, in <LoginBox/> the content will swap with the confirmation message
          setFormCompleted(true);
        }}
      >
        <div className="flex flex-col mb-3">
          <div className="flex flex-row justify-between mb-1">
            <label
              htmlFor="formEmail"
              className="text-xs font-bold tracking-wide"
            >
              Email
            </label>
            {/* This span will only display with an error occurs, it has two possible values it can show.
      Either the field being empty or the format being invalid */}
            <span
              className={` text-xs font-bold ${
                emailInvalid ? "" : "hidden"
              } text-red-600`}
            >
              {`${email.length > 0 ? "Invalid email format" : "Empty field"}`}
            </span>
          </div>
          {/* The input element, as I said, has its content stored in the state, and having any change
        here will modify the state. It's a way to sync the "internal memory" of the element and the state */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[20px] top-[3px] translate-y-1/2 absolute left-[10px]"
            >
              <rect
                x="48"
                y="96"
                width="416"
                height="320"
                rx="40"
                ry="40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M112 160l144 112 144-112"
              />
            </svg>
            <input
              id="formEmail"
              required
              placeholder="e.g. johndoe@gmail.com"
              className={`border-2 border-darkerGrayCyan pl-8 w-full rounded-md py-2 px-4  font-medium hover:cursor-pointer ${
                emailInvalid ? "border-red-600" : ""
              }`}
              value={email}
              type="email"
              onChange={(e) => {
                // on change we change the value of course, and check if we need to remove
                // the invalidation, as soon as the user inserts the data in the right format
                // it's reset to false
                if (e.target.validity.valid) setEmailInvalid(false);
                setEmail(e.target.value);
              }}
              onInvalid={(e) => {
                e.preventDefault();
                setEmailInvalid(true);
              }}
            />
          </div>
        </div>

        {/* The password fields is identical to the email field, it has its own custom messages */}
        <div className="flex flex-col mb-3">
          <div className="flex flex-row justify-between mb-1">
            <label
              htmlFor="formPassword"
              className="text-xs font-bold tracking-wide"
            >
              Password
            </label>
            <span
              className={` text-xs font-bold   ${
                passwordInvalid ? "" : "hidden"
              } text-red-600`}
            >
              {`${password.length > 0 ? "Password too short" : "Empty field"}`}
            </span>
          </div>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-[20px] top-[3px] translate-y-1/2 absolute left-[10px]"
            >
              <path
                d="M336 208v-95a80 80 0 00-160 0v95"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <rect
                x="96"
                y="208"
                width="320"
                height="272"
                rx="48"
                ry="48"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
            </svg>
            <input
              id="formPassword"
              required
              placeholder="8 or more characters"
              minLength={8}
              pattern=".{8,}"
              className={`border-2
             border-darkerGrayCyan w-full rounded-md py-2 px-4 pl-8  font-medium hover:cursor-pointer ${
               passwordInvalid ? "border-red-600" : ""
             }`}
              // the value is the hidden version, it's not a problem since we are still storing
              // the normal password in the state
              value={hiddenPassword}
              type="text"
              onChange={(e) => {
                if (e.target.validity.valid) setPasswordInvalid(false);
                setPassword(e.target.value);
              }}
              onInvalid={(e) => {
                e.preventDefault();
                setPasswordInvalid(true);
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
// the function used to created the censored password, for each letter in the string it adds a "*"
// keeping the same length
const hidePassword = function (string) {
  let hiddenPassword = "";
  for (const _ of string) {
    hiddenPassword += "*";
  }
  return hiddenPassword;
};
