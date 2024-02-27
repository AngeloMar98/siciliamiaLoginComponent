import React, { useState } from "react";
import { SubmitButton } from "./SubmitButton";
import { LoginForm } from "./LoginForm";
import { SuccessMessage } from "./SuccessMessage";

/* 
The LoginBox servers two purposes:
- display either the form or the success message depending on the state;
- raising the state so LoginForm and SuccessMessage can share data easily

*/

export function LoginBox() {
  const [formCompleted, setFormCompleted] = useState(false);
  const [email, setEmail] = useState("");
  return (
    <div className="max-w-[450px] custom-shadow mx-auto mt-6 p-2 bg-darkCyan rounded-md border-2 border-darkerGrayCyan ">
      {/* Depending whether or not the form has been completed we will display either the form or the
     success message*/}
      {!formCompleted ? (
        <>
          <LoginForm
            email={email}
            setEmail={setEmail}
            setFormCompleted={setFormCompleted}
          />
          <SubmitButton />
        </>
      ) : (
        <SuccessMessage email={email} />
      )}
    </div>
  );
}
