import React, {  useState } from "react";
import Collapsible from "react-collapsible";
import {  useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./faqs.css";


const FAQs = () => {
  const [open, setOpen] = useState(false);
  const { faqs } = useSelector((state) => state.dashboard);

  const onOpen = (data) => {
    setOpen(data);
  };
  return (
    <div className="accordion-wrapper" id="accordion">
      <div className="d-flex justify-content-between align-items-center">
        <p className="faq-title">FAQ</p>
        <Link to="/faqs" className="faq-link">
          View all
        </Link>
      </div>

      {faqs.slice(0,5).map((item) => {
        return (
          <Collapsible
            trigger={item.question}
            onTriggerOpening={() => onOpen(item._id)}
            open={item._id === open}
          >
            <p>{item.answer}</p>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default FAQs;
