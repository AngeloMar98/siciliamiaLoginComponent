import React from "react";

/* 
The submit button is tied to the form using the attributes, its function is trying to fire the
submit event. That event is completely handled in the form
*/

export function SubmitButton() {
  return (
    <button
      className="font-bold rounded-md w-[100px] mx-auto mb-3 p-1 block bg-white text-center border-2 border-darkerGrayCyan transition-colors duration-200 hover:text-white hover:bg-darkerGrayCyan hover:border-white"
      form="submit-form"
      type="submit"
      value="Submit"
    >
      Subscribe!
    </button>
  );
}
