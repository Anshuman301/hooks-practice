import React, { useState } from "react";

const StateHooks2 = () => {
  const [fullName, setName] = useState({ fname: "", lname: "" });
  const { fname, lname } = fullName;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setName({ ...fullName, [name]: value });
  };
  return (
    <div>
      <div>
        <span>FirstName:</span>
        <input type="text" name="fname" onChange={handleChange} />
      </div>
      <div>
        <span>LastName:</span>
        <input type="text" name="lname" onChange={handleChange} />
      </div>
      <div>{`${fname} --- ${lname}`}</div>
    </div>
  );
};

export default StateHooks2;
