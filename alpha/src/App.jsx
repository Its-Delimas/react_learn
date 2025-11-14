import { useState } from 'react';

export default function MyForm() {
  // useState holds the values for all form controls (controlled components).
  // Initialize fields to proper types to avoid uncontrolled->controlled warnings.
  const [inputs, setInputs] = useState({
    firstname: '',   // text input value
    tomato: false,   // checkbox value
    onion: false     // checkbox value
  });

  // Generic change handler for both text inputs and checkboxes.
  const handleChange = (e) => {
    const target = e.target;
    // For checkboxes we use checked, otherwise use value.
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // Merge the new value into the inputs state (preserve other fields).
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // Form submit handler
  const handleSubmit = (event) => {
    // Prevent the default form submission (page reload).
    event.preventDefault();

    // Build a human-readable list of selected fillings.
    let fillings = '';
    if (inputs.tomato) fillings += 'tomato';
    if (inputs.onion) {
      if (inputs.tomato) fillings += ' and ';
      fillings += 'onion';
    }
    if (fillings === '') fillings = 'no fillings';

    // Show a simple alert with the collected data.
    alert(`${inputs.firstname} wants a burger with ${fillings}`);
  };

  // The returned JSX is a controlled form:
  // - text input uses "value" and onChange
  // - checkboxes use "checked" and onChange
  return (
    <form onSubmit={handleSubmit}>
      <label>
        My name is:
        <input
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
        />
      </label>

      <p>I want a burger with:</p>

      <label>
        Tomato:
        <input
          type="checkbox"
          name="tomato"
          checked={inputs.tomato}
          onChange={handleChange}
        />
      </label>

      <label>
        Onion:
        <input
          type="checkbox"
          name="onion"
          checked={inputs.onion}
          onChange={handleChange}
        />
      </label>

      {/* Properly closed submit button */}
      <button type="submit">Submit</button>
    </form>
  );
}