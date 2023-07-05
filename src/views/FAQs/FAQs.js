import React, { useState } from "react";
import Collapsible from "react-collapsible";
import Header from "../../components/Header/Header";
import PageTitleSection from "../../components/PageTitleSection/PageTitleSection";
import "./faqs.css";
import { useSelector } from "react-redux";
import "../Dashboard/dashboard.css";

const FAQs = () => {
  const [open, setOpen] = useState(false);
  const { faqs } = useSelector((state) => state.dashboard);
  console.log(faqs);
  const onOpen = (data) => {
    setOpen(data);
  };
  return (
      <div className="container">
        <div className="accordion-wrapper" id="accordion">
          <div id="page_title" className="mb-40">
            <PageTitleSection showTitle="FAQs" />
          </div>

          {faqs.map((item) => {
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
    </div>
  );
};

export default FAQs;
