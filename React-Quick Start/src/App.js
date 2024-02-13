// export default function Square() {
//   return <button className="square">X</button>;
// }

//ex1
// const user = {
//   name: "Leo Messi",
//   imageUrl:
//     "https://img.a.transfermarkt.technology/portrait/big/28003-1694590254.jpg?lm=1",
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={"Photo of " + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize,
//         }}
//       />
//     </>
//   );
// }

//ex2
// const products = [
//   { title: "Banana", isFruit: false, id: 1 },
//   { title: "Apple", isFruit: false, id: 2 },
//   { title: "Strawberry", isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
//     >
//       {product.title}
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// }

//ex3
// export default function MyButton() {
//   function handleClick() {
//     alert("You clicked me");
//   }
//   return <button onClick={handleClick}>Click me</button>;
// }

//ex4
// import { useState } from "react";

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Clicked {count} times</button>;
// }

//ex5
import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
