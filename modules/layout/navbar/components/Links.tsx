import React from "react";
import LinkList from "./LinkList";
import LinkButton from "./LinkButton";

const Links = () => {
  return (
    <div className="">
      <LinkList>
      <LinkButton name="Home" href="/" />
      <LinkButton name="Shop NMN" href="/nmn" />
      <LinkButton name="Our story" href="/about" />
    </LinkList>
    </div>
  );
};

export default Links;
