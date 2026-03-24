"use client";
import React, { useState } from "react";

// ✅ Type definitions
type Food = {
  name: string;
  protein: number;
  fat: number;
  carbs: number;
};

export default function CalorieApp() {
  const [query, setQuery] = useState<string>("");
  const [foods, setFoods] = useState<Food[]>([]);
  const [selected, setSelected] = useState<(Food & { grams: number })[]>([]);

  // ✅ FULL CLEAN DATASET (200 foods)
  const data: Food[] = [

    /* ===== PART 1 ===== */
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

{ name: "Agathi Leaves", protein: 8.01, fat: 1.35, carbs: 5.21 },
{ name: "Amaranth Leaves Green", protein: 3.29, fat: 0.65, carbs: 2.28 },
{ name: "Amaranth Leaves Red", protein: 3.93, fat: 0.63, carbs: 2.37 },
{ name: "Amaranth Leaves Red and Green Mix", protein: 3.09, fat: 0.53, carbs: 2.87 },
{ name: "Amaranth Spinosus Leaves Green", protein: 3.54, fat: 0.36, carbs: 1.61 },
{ name: "Amaranth Spinosus Leaves Red and Green Mix", protein: 2.8, fat: 0.34, carbs: 1.45 },

{ name: "Basella Leaves", protein: 1.57, fat: 0.45, carbs: 2.01 },
{ name: "Bathua Leaves", protein: 2.5, fat: 0.44, carbs: 2.56 },
{ name: "Beet Greens", protein: 2.38, fat: 0.75, carbs: 3.86 },

{ name: "Betel Leaves Big", protein: 2.51, fat: 0.75, carbs: 7.37 },
{ name: "Betel Leaves Small", protein: 2.62, fat: 0.75, carbs: 6.16 },

{ name: "Brussels Sprouts", protein: 4.26, fat: 0.5, carbs: 5.09 },

{ name: "Cabbage Chinese", protein: 1.58, fat: 0.13, carbs: 2.36 },
{ name: "Cabbage Collard Greens", protein: 3.63, fat: 0.27, carbs: 2.79 },
{ name: "Cabbage Green", protein: 1.36, fat: 0.12, carbs: 3.25 },
{ name: "Cabbage Violet", protein: 1.39, fat: 0.21, carbs: 3.54 },

{ name: "Cauliflower Leaves", protein: 3.9, fat: 0.42, carbs: 3.39 },
{ name: "Colocasia Leaves Green", protein: 3.42, fat: 1.38, carbs: 3.69 },

{ name: "Drumstick Leaves", protein: 6.41, fat: 1.64, carbs: 5.62 },
{ name: "Fenugreek Leaves", protein: 3.68, fat: 0.83, carbs: 2.17 },

{ name: "Garden Cress", protein: 5.62, fat: 0.8, carbs: 4.48 },

{ name: "Gogu Leaves Green", protein: 1.86, fat: 1.09, carbs: 4.06 },
{ name: "Gogu Leaves Red", protein: 1.85, fat: 1.07, carbs: 4.24 },

{ name: "Knol Khol Leaves", protein: 3.12, fat: 0.35, carbs: 6.16 },

{ name: "Lettuce", protein: 1.54, fat: 0.27, carbs: 3.01 },

{ name: "Mustard Leaves", protein: 3.52, fat: 0.51, carbs: 2.41 },
{ name: "Pak Choi Leaves", protein: 1.41, fat: 0.25, carbs: 1.78 },

{ name: "Parsley", protein: 5.55, fat: 1.14, carbs: 9.43 },
{ name: "Ponnaganni", protein: 5.29, fat: 0.71, carbs: 5.17 },

{ name: "Pumpkin Leaves Tender", protein: 4.21, fat: 0.74, carbs: 4.75 },
{ name: "Radish Leaves", protein: 2.22, fat: 0.51, carbs: 2.77 },
{ name: "Rumex Leaves", protein: 1.62, fat: 0.33, carbs: 2.33 },

{ name: "Spinach", protein: 2.14, fat: 0.64, carbs: 2.05 },

{ name: "Tamarind Leaves Tender", protein: 5.84, fat: 0.49, carbs: 10.04 },

{ name: "Almond", protein: 18.41, fat: 58.49, carbs: 3.04 },
{ name: "Arecanut Dried Brown", protein: 5.78, fat: 4.35, carbs: 70.42 }, 

/* ===== PART 2 ===== */
{ name: "Arecanut Dried Red Color", protein: 6.46, fat: 4.46, carbs: 70.27 },
{ name: "Arecanut Fresh", protein: 2.73, fat: 5.51, carbs: 45 },

{ name: "Cashew Nut", protein: 18.78, fat: 45.2, carbs: 25.46 },
{ name: "Coconut Kernel Dry", protein: 7.27, fat: 63.26, carbs: 8.01 },
{ name: "Coconut Kernel Fresh", protein: 3.84, fat: 41.38, carbs: 6.3 },

{ name: "Garden Cress Seeds", protein: 23.36, fat: 23.74, carbs: 33.66 },

{ name: "Gingelly Seeds Black", protein: 19.17, fat: 43.1, carbs: 10.29 },
{ name: "Gingelly Seeds Brown", protein: 21.61, fat: 43.22, carbs: 9.76 },
{ name: "Gingelly Seeds White", protein: 21.7, fat: 43.05, carbs: 10.83 },

{ name: "Groundnut", protein: 23.65, fat: 39.63, carbs: 17.27 },

{ name: "Mustard Seeds", protein: 19.51, fat: 40.19, carbs: 16.8 },
{ name: "Linseeds", protein: 18.55, fat: 35.67, carbs: 10.99 },

{ name: "Niger Seeds Black", protein: 18.92, fat: 38.61, carbs: 22.98 },
{ name: "Niger Seeds Gray", protein: 18.34, fat: 39.53, carbs: 20.59 },

{ name: "Pine Seed", protein: 12.55, fat: 48.79, carbs: 26.77 },
{ name: "Pistachio Nuts", protein: 23.35, fat: 42.49, carbs: 15.82 },

{ name: "Safflower Seeds", protein: 17.66, fat: 30.87, carbs: 30.18 },
{ name: "Sunflower Seeds", protein: 23.53, fat: 51.85, carbs: 6.85 },
{ name: "Walnut", protein: 14.92, fat: 64.27, carbs: 10.14 },

{ name: "Amul Protein Buttermilk", protein: 15, fat: 1, carbs: 8 },
{ name: "Paneer", protein: 23, fat: 11, carbs: 3 },

{ name: "Sunflower Oil", protein: 0, fat: 91, carbs: 0 },

{ name: "Ash Gourd", protein: 0.79, fat: 0.14, carbs: 2.84 },
{ name: "Bamboo Shoot Tender", protein: 1.33, fat: 0.35, carbs: 1.67 },

{ name: "Bean Scarlet Tender", protein: 2.86, fat: 0.99, carbs: 5.16 },

{ name: "Bitter Gourd Jagged Long", protein: 1.44, fat: 0.24, carbs: 2.82 },
{ name: "Bitter Gourd Jagged Short", protein: 1.34, fat: 0.24, carbs: 2.53 },
{ name: "Bitter Gourd Smooth Long", protein: 1.61, fat: 0.26, carbs: 2.29 },

{ name: "Bottle Gourd Elongate Pale Green", protein: 0.53, fat: 0.13, carbs: 1.68 },
{ name: "Bottle Gourd Round Pale Green", protein: 0.42, fat: 0.12, carbs: 2.53 },
{ name: "Bottle Gourd Elongate Dark Green", protein: 0.49, fat: 0.13, carbs: 2.25 },

{ name: "Brinjal 1", protein: 1.77, fat: 0.39, carbs: 3.49 },
{ name: "Brinjal 2", protein: 1.82, fat: 0.34, carbs: 2.71 },
{ name: "Brinjal 3", protein: 1.36, fat: 0.33, carbs: 3.38 },
{ name: "Brinjal 4", protein: 1.51, fat: 0.31, carbs: 3.19 },
{ name: "Brinjal 5", protein: 1.38, fat: 0.29, carbs: 4.02 },
{ name: "Brinjal 6", protein: 1.46, fat: 0.29, carbs: 3.29 },
{ name: "Brinjal 7", protein: 1.4, fat: 0.37, carbs: 3.1 },
{ name: "Brinjal 8", protein: 1.82, fat: 0.33, carbs: 3.75 },
{ name: "Brinjal 9", protein: 1.47, fat: 0.35, carbs: 3.52 },
{ name: "Brinjal 10", protein: 1.68, fat: 0.25, carbs: 4.08 },
{ name: "Brinjal 11", protein: 1.43, fat: 0.31, carbs: 3.53 },
{ name: "Brinjal 12", protein: 1.6, fat: 0.27, carbs: 2.73 },

/* ===== PART 3 ===== */
{ name: "Brinjal 13", protein: 1.49, fat: 0.31, carbs: 4.51 },
{ name: "Brinjal 14", protein: 1.56, fat: 0.35, carbs: 3.27 },
{ name: "Brinjal 15", protein: 1.58, fat: 0.29, carbs: 3.96 },
{ name: "Brinjal 16", protein: 1.26, fat: 0.34, carbs: 3.46 },
{ name: "Brinjal 17", protein: 1.18, fat: 0.36, carbs: 2.89 },
{ name: "Brinjal 18", protein: 1.47, fat: 0.33, carbs: 4.1 },
{ name: "Brinjal 19", protein: 1.26, fat: 0.31, carbs: 3.39 },
{ name: "Brinjal 20", protein: 1.44, fat: 0.34, carbs: 3.15 },
{ name: "Brinjal 21", protein: 1.36, fat: 0.35, carbs: 3.93 },
{ name: "Brinjal All Varieties", protein: 1.48, fat: 0.32, carbs: 3.52 },

{ name: "Broad Beans", protein: 3.85, fat: 0.15, carbs: 2.11 },

{ name: "Capsicum Green", protein: 1.11, fat: 0.34, carbs: 1.84 },
{ name: "Capsicum Red", protein: 1.47, fat: 0.47, carbs: 2.14 },
{ name: "Capsicum Yellow", protein: 1.35, fat: 0.41, carbs: 1.95 },

{ name: "Cauliflower", protein: 2.15, fat: 0.44, carbs: 2.03 },

{ name: "Celery Stalk", protein: 0.98, fat: 0.24, carbs: 2.33 },

{ name: "Cho-cho Marrow", protein: 0.66, fat: 0.15, carbs: 3.47 },

{ name: "Cluster Beans", protein: 3.55, fat: 0.37, carbs: 4.91 },

{ name: "Colocasia Stem Black", protein: 0.76, fat: 0.34, carbs: 3.83 },
{ name: "Colocasia Stem Green", protein: 0.91, fat: 0.22, carbs: 2.86 },

{ name: "Corn Baby", protein: 2.69, fat: 1.33, carbs: 11.66 },

{ name: "Cucumber Green Elongate", protein: 0.71, fat: 0.16, carbs: 3.48 },
{ name: "Cucumber Green Short", protein: 0.83, fat: 0.18, carbs: 2.82 },
{ name: "Cucumber Orange Round", protein: 0.98, fat: 0.24, carbs: 3.01 },

{ name: "Drumstick", protein: 2.62, fat: 0.12, carbs: 3.76 },

{ name: "Field Beans Tender Broad", protein: 3.06, fat: 0.64, carbs: 2.75 },
{ name: "Field Beans Tender Lean", protein: 3.71, fat: 0.6, carbs: 2.85 },

{ name: "French Beans Country", protein: 2.49, fat: 0.26, carbs: 2.68 },
{ name: "French Beans Hybrid", protein: 2.12, fat: 0.19, carbs: 2.63 },

{ name: "Jack Fruit Raw", protein: 1.98, fat: 0.35, carbs: 3.48 },
{ name: "Jack Fruit Seed Mature", protein: 5.79, fat: 0.44, carbs: 11.81 },

{ name: "Knol Khol", protein: 1.58, fat: 0.35, carbs: 1.39 },

{ name: "Kovai Big", protein: 1.39, fat: 0.24, carbs: 2.01 },
{ name: "Kovai Small", protein: 1.22, fat: 0.24, carbs: 2.41 },

{ name: "Ladies Finger", protein: 2.08, fat: 0.22, carbs: 3.62 },

{ name: "Mango Green Raw", protein: 0.69, fat: 0.08, carbs: 10.59 },

{ name: "Onion Stalk", protein: 2.07, fat: 0.26, carbs: 2.99 },

{ name: "Papaya Raw", protein: 0.5, fat: 0.23, carbs: 4.4 },

{ name: "Parwar", protein: 1.4, fat: 0.3, carbs: 3.54 },

{ name: "Peas Fresh", protein: 7.25, fat: 0.13, carbs: 11.88 },

{ name: "Plantain Flower", protein: 1.47, fat: 0.63, carbs: 2.15 },
{ name: "Plantain Green", protein: 1.18, fat: 0.23, carbs: 17.58 },
{ name: "Plantain Stem", protein: 0.35, fat: 0.16, carbs: 8.64 },

{ name: "Pumpkin Green Cylindrical", protein: 0.87, fat: 0.18, carbs: 4.22 },
{ name: "Pumpkin Orange Round", protein: 0.84, fat: 0.16, carbs: 4.0 },

{ name: "Red Gram Tender Fresh", protein: 8.09, fat: 0.92, carbs: 19.46 },

{ name: "Ridge Gourd", protein: 0.91, fat: 0.14, carbs: 1.72 },
{ name: "Ridge Gourd Smooth", protein: 0.98, fat: 0.13, carbs: 2.24 },

{ name: "Snake Gourd Long Pale Green", protein: 0.98, fat: 0.25, carbs: 1.27 },
{ name: "Snake Gourd Long Dark Green", protein: 0.89, fat: 0.25, carbs: 1.23 },
{ name: "Snake Gourd Short", protein: 0.54, fat: 0.26, carbs: 2.15 },

{ name: "Tinda Tender", protein: 1.02, fat: 0.17, carbs: 1.9 },

{ name: "Tomato Green", protein: 1.12, fat: 0.27, carbs: 3.18 },
{ name: "Tomato Ripe Hybrid", protein: 0.76, fat: 0.25, carbs: 3.2 },
{ name: "Tomato Ripe Local", protein: 0.9, fat: 0.47, carbs: 2.71 },

{ name: "Zucchini Green", protein: 1.1, fat: 0.51, carbs: 2.33 },
{ name: "Zucchini Yellow", protein: 1.31, fat: 0.44, carbs: 2.2 },

{ name: "Musk Melon Orange Flesh", protein: 0.42, fat: 0.35, carbs: 4.24 },
{ name: "Musk Melon Yellow Flesh", protein: 0.53, fat: 0.26, carbs: 5.4 },

{ name: "Sapota", protein: 0.92, fat: 1.26, carbs: 13.9 },

{ name: "Water Melon Dark Green", protein: 0.6, fat: 0.16, carbs: 3.86 },
{ name: "Water Melon Pale Green", protein: 0.59, fat: 0.16, carbs: 3.02 },

{ name: "Beet Root", protein: 1.95, fat: 0.14, carbs: 6.18 },
{ name: "Carrot Orange", protein: 0.95, fat: 0.47, carbs: 5.55 },

{ name: "Potato Brown Skin Big", protein: 1.54, fat: 0.23, carbs: 14.89 },
{ name: "Potato Brown Skin Small", protein: 1.35, fat: 0.22, carbs: 12.9 },

{ name: "Sweet Potato Pink Skin", protein: 1.27, fat: 0.95, carbs: 23.93 },

{ name: "Amul Whey Protein", protein: 78, fat: 5, carbs: 10.8 },
{ name: "Curd", protein: 3.3, fat: 3, carbs: 4.3 },
{ name: "Idli", protein: 7.6, fat: 0.66, carbs: 41.6 },
{ name: "Oats", protein: 13, fat: 10, carbs: 65 }

];

  // ✅ Handle search with TypeScript typing
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    const results = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setFoods(results);
  };

  // ✅ Add food to selected
  const addFood = (food: Food) => {
    setSelected([...selected, { ...food, grams: 100 }]);
  };

  // ✅ Update grams
  const updateGrams = (index: number, value: string | number) => {
    const updated = [...selected];
    updated[index].grams = Number(value);
    setSelected(updated);
  };

  // ✅ Remove food
  const removeFood = (index: number) => {
    const updated = [...selected];
    updated.splice(index, 1);
    setSelected(updated);
  };

  // ✅ Calculate totals
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
            className="p-2 border mb-2 cursor-pointer hover:bg-gray-100"
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
            placeholder="Enter grams"
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