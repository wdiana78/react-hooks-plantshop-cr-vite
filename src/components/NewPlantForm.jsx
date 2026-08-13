import React from "react";

function NewPlantForm({ onAddPlant }) {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const newPlant = {
      name: form.elements.namedItem("name").value,
      image: form.elements.namedItem("image").value,
      price: form.elements.namedItem("price").value,
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((plant) => {
        onAddPlant(plant);
        form.reset();
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />

        <input type="text" name="image" placeholder="Image URL" />

        <input type="number" name="price" step="0.01" placeholder="Price" />

        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
