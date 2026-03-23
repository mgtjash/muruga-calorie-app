"use client";
import { useState } from "react";

export default function CalorieApp() {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const [selected, setSelected] = useState([]);

  // ✅ FULL CLEAN DATASET (separate line, no error)
  const data = [
  { name: "Amaranth Seed Black", protein: 14.59, fat: 5.74, carbs: 59.98 },
  { name: "Amaranth Seed Pale Brown", protein: 13.27, fat: 5.56, carbs: 61.46 },
  { name: "Bajra", protein: 10.96, fat: 5.43, carbs: 61.78 },
  { name: "Barley", protein: 10.94, fat: 1.3, carbs: 61.29 },
  { name: "Jowar", protein: 9.97, fat: 1.73, carbs: 67.68 },
  { name: "Maize Dry", protein: 8.8, fat: 3.77, carbs: 64.77 },
  { name: "Maize Tender Local", protein: 3.57, fat: 1.4, carbs: 22.69 },
  { name: "Maize Tender Sweet", protein: 4.16, fat: 1.35, carbs: 16.42 },
  { name: "Quinoa", protein: 13.11, fat: 5.5, carbs: 53.65 },
  { name: "Ragi", protein: 7.16, fat: 1.92, carbs: 66.82 },
  { name: "Rice Flakes", protein: 7.44, fat: 1.14, carbs: 76.75 },
  { name: "Rice Puffed", protein: 7.47, fat: 1.62, carbs: 77.68 },
  { name: "Rice Raw Brown", protein: 9.16, fat: 1.24, carbs: 74.8 },
  { name: "Rice Parboiled Milled", protein: 7.81, fat: 0.55, carbs: 77.16 },
  { name: "Rice Raw Milled", protein: 7.94, fat: 0.52, carbs: 78.24 },
  { name: "Samai", protein: 10.13, fat: 3.89, carbs: 65.55 },
  { name: "Varagu", protein: 8.92, fat: 2.55, carbs: 66.19 },

  { name: "Wheat Flour Refined", protein: 10.36, fat: 0.76, carbs: 74.27 },
  { name: "Wheat Flour Atta", protein: 10.57, fat: 1.53, carbs: 64.17 },
  { name: "Wheat Whole", protein: 10.59, fat: 1.47, carbs: 64.72 },
  { name: "Wheat Bulgur", protein: 10.84, fat: 1.45, carbs: 69.06 },
  { name: "Wheat Semolina", protein: 11.38, fat: 0.74, carbs: 68.43 },
  { name: "Wheat Vermicelli", protein: 9.7, fat: 0.45, carbs: 70.39 },
  { name: "Wheat Vermicelli Roasted", protein: 10.37, fat: 0.49, carbs: 71.42 },

  { name: "Bengal Gram Dal", protein: 21.55, fat: 5.31, carbs: 46.72 },
  { name: "Bengal Gram Whole", protein: 18.77, fat: 5.11, carbs: 39.56 },
  { name: "Black Gram Dal", protein: 23.06, fat: 1.69, carbs: 51.0 },
  { name: "Black Gram Whole", protein: 21.97, fat: 1.58, carbs: 43.99 },
  { name: "Cowpea Brown", protein: 20.36, fat: 1.15, carbs: 54.62 },
  { name: "Cowpea White", protein: 21.25, fat: 1.14, carbs: 53.77 },
  { name: "Field Bean Black", protein: 19.93, fat: 0.92, carbs: 43.46 },
  { name: "Field Bean Brown", protein: 19.9, fat: 0.98, carbs: 45.24 },
  { name: "Field Bean White", protein: 19.84, fat: 0.94, carbs: 44.53 },
  { name: "Green Gram Dal", protein: 23.88, fat: 1.35, carbs: 52.59 },
  { name: "Green Gram Whole", protein: 22.53, fat: 1.14, carbs: 46.13 },
  { name: "Horse Gram Whole", protein: 21.73, fat: 0.62, carbs: 57.24 },
  { name: "Lentil Dal", protein: 24.35, fat: 0.75, carbs: 52.53 },
  { name: "Lentil Whole Brown", protein: 22.49, fat: 0.64, carbs: 48.47 },
  { name: "Lentil Whole Yellowish", protein: 22.87, fat: 0.61, carbs: 47.91 },
  { name: "Moth Bean", protein: 19.75, fat: 1.76, carbs: 52.09 },
  { name: "Peas Dry", protein: 20.43, fat: 1.89, carbs: 48.93 },
  { name: "Rajmah Black", protein: 19.01, fat: 1.62, carbs: 49.59 },
  { name: "Rajmah Brown", protein: 19.5, fat: 1.68, carbs: 48.83 },
  { name: "Rajmah Red", protein: 19.91, fat: 1.77, carbs: 48.61 },
  { name: "Red Gram Dal", protein: 21.7, fat: 1.56, carbs: 55.23 },
  { name: "Red Gram Whole", protein: 20.47, fat: 1.38, carbs: 42.48 },
  { name: "Ricebean", protein: 19.97, fat: 0.74, carbs: 51.26 },
  { name: "Soya Bean Brown", protein: 35.58, fat: 19.82, carbs: 12.79 },
  { name: "Soya Bean White", protein: 37.8, fat: 19.42, carbs: 10.16 },

  { name: "Spinach", protein: 2.14, fat: 0.64, carbs: 2.05 },
  { name: "Drumstick Leaves", protein: 6.41, fat: 1.64, carbs: 5.62 },
  { name: "Fenugreek Leaves", protein: 3.68, fat: 0.83, carbs: 2.17 },
  { name: "Cabbage Green", protein: 1.36, fat: 0.12, carbs: 3.25 },
  { name: "Cauliflower Leaves", protein: 3.9, fat: 0.42, carbs: 3.39 },
  { name: "Lettuce", protein: 1.54, fat: 0.27, carbs: 3.01 },

  { name: "Almond", protein: 18.41, fat: 58.49, carbs: 3.04 },
  { name: "Cashew Nut", protein: 18.78, fat: 45.2, carbs: 25.46 },
  { name: "Coconut Dry", protein: 7.27, fat: 63.26, carbs: 8.01 },
  { name: "Coconut Fresh", protein: 3.84, fat: 41.38, carbs: 6.3 },
  { name: "Groundnut", protein: 23.65, fat: 39.63, carbs: 17.27 },
  { name: "Mustard Seeds", protein: 19.51, fat: 40.19, carbs: 16.8 },
  { name: "Linseeds", protein: 18.55, fat: 35.67, carbs: 10.99 },
  { name: "Sunflower Seeds", protein: 23.53, fat: 51.85, carbs: 6.85 },
  { name: "Walnut", protein: 14.92, fat: 64.27, carbs: 10.14 }
];
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFoods(results);
  };

  const addFood = (food) => {
    setSelected([...selected, { ...food, grams: 100 }]);
  };

  const updateGrams = (index, value) => {
    const updated = [...selected];
    updated[index].grams = Number(value);
    setSelected(updated);
  };

  const removeFood = (index) => {
    const updated = [...selected];
    updated.splice(index, 1);
    setSelected(updated);
  };

  const calculateTotals = () => {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    selected.forEach((food) => {
      const factor = food.grams / 100;

      const protein = food.protein * factor;
      const carbs = food.carbs * factor;
      const fat = food.fat * factor;

      const calories = protein * 4 + carbs * 4 + fat * 9;

      totalProtein += protein;
      totalCarbs += carbs;
      totalFat += fat;
      totalCalories += calories;
    });

    return {
      calories: totalCalories.toFixed(2),
      protein: totalProtein.toFixed(2),
      carbs: totalCarbs.toFixed(2),
      fat: totalFat.toFixed(2),
    };
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Muruga Final Calorie App 🔥</h1>

      <input
        type="text"
        placeholder="Search food..."
        value={query}
        onChange={handleSearch}
        className="w-full p-2 border rounded mb-4"
      />

      <div className="mb-4 max-h-40 overflow-y-scroll">
        {foods.map((food, index) => (
          <div
            key={index}
            className="p-2 border mb-2 cursor-pointer"
            onClick={() => addFood(food)}
          >
            {food.name}
          </div>
        ))}
      </div>

      <h2 className="font-bold">Selected Foods:</h2>

      {selected.map((food, i) => (
        <div key={i} className="border p-2 mb-2 rounded">
          <div className="flex justify-between">
            <strong>{food.name}</strong>
            <button onClick={() => removeFood(i)}>❌</button>
          </div>

          <input
            type="number"
            value={food.grams}
            onChange={(e) => updateGrams(i, e.target.value)}
            className="w-full mt-2 p-1 border rounded"
          />
        </div>
      ))}

      <div className="mt-6 p-4 border rounded bg-gray-50">
        <h2 className="text-xl font-bold">
          Calories: {calculateTotals().calories} kcal
        </h2>
        <p>Protein: {calculateTotals().protein} g</p>
        <p>Carbs: {calculateTotals().carbs} g</p>
        <p>Fat: {calculateTotals().fat} g</p>
      </div>
    </div>
  );
}