import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    author: "by Prince Harry The Duke of Sussex and Random House Audio",
    title: "Spare",
    img: "https://m.media-amazon.com/images/I/91NlZifnNEL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    author: "Mark Manson",
    title: "The Subtle Art of Not Giving a F*ck",
    img: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L._AC_UL900_SR900,600_.jpg",
  },
];

const names = ['Betisha', 'Ellaye', 'Rahwsh']

const newNames = names.map((name)=>{
  return <h1>{name}</h1>
})
function BookList() {
  return (
    <section className="booklist">
      {newNames}
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  const { img, author, title } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h5>{author.toUpperCase()}</h5>
    </article>
  );
};

ReactDOM.render(<BookList/>, document.getElementById("root"));
