import React from "react";

// A simple div confirming to the user that the form went through with no problems, it
// uses the email passed down to props in the message
export function SuccessMessage({ email }) {
  return (
    <div className="text-white text-2xl text-center p-4  py-12">
      <h2 className="font-bold text-3xl mb-3">Thanks for subscribing! </h2>
      <p>
        You'll soon receive an email at
        <span className="font-bold ">{email} </span>with all the proper
        instructions.
      </p>
    </div>
  );
}
