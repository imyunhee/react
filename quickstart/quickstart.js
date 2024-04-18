import { useState } from "react"; // Updating the screen

// Creating components
// function MyButton() {
//   return <button>I'm a button</button>;
// }

// Nesting components
// function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }

// Writing markup with JSX
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there.
        <br />
        How do you do?
      </p>
    </>
  );
}

// Displaying data
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}

// Conditioning rendering
// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }
// return (
//   <div>
//     {content}
//   </div>
// );
// }

//Rendering lists
const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
}

// Responding to events
// function MyButton() {
//   function handleClick() {
//     alert("You clicked me!");
//   }

//   return <button onClick={handleClick}>Click me</button>;
// }

//Updating the screen - Separately
// function MyButton_sep() {
//   const [count, setCount] = useState(0); // [something, setSomething]

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return <button onClick={handleClick}>Click {count} times</button>;
// }

// export default function MyApp_sep() {
//   return (
//     <div>
//       <h1>Counters that update separately</h1>
//       <MyButton_sep />
//       <MyButton_sep />
//     </div>
//   );
// }

// Sharing data between components - Updating the screen (together)
export default function MyApp_tog() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton_tog count={count} onClick={handleClick} />
      <MyButton_tog count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton_tog({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

// export default MyButton;
