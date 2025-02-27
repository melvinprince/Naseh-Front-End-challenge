import { useState } from "react";
import "./css/faq.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quos vero nemo non perferendis veritatis hic quae eum sint praesentium?",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod soluta repudiandae minima, saepe ab dignissimos est! Quod, magnam est. ",
  },
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quos vero nemo non perferendis veritatis hic quae eum sint praesentium?",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod soluta repudiandae minima, saepe ab dignissimos est! Quod, magnam est. ",
  },
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quos vero nemo non perferendis veritatis hic quae eum sint praesentium?",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod soluta repudiandae minima, saepe ab dignissimos est! Quod, magnam est. ",
  },
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste quos vero nemo non perferendis veritatis hic quae eum sint praesentium?",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quod soluta repudiandae minima, saepe ab dignissimos est! Quod, magnam est. ",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col text-center py-25">
      <span className="text-(--color-logo-text) font-bold">FAQ</span>
      <h3 className="font-[900] text-4xl">Frequently Asked Questions</h3>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title + Math.random()}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title faq-title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
