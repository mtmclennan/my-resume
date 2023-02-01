import React, { useEffect, useState } from "react";
import useRemark from "../hooks/use-remark";
import coverLetter from "../assets/markdown/coverLetter.md";

const Letter = () => {
  const { postHtml, convertMd } = useRemark();

  // useEffect with an empty dependency array (`[]`) runs only once
  useEffect(() => {
    fetch(coverLetter)
      .then((response) => response.text())
      .then((text) => {
        // Logs a string of Markdown content.
        // Now you could use e.g. <rexxars/react-markdown> to render it.
        // console.log(text);
        convertMd(text);
      });
  }, []);

  //   useEffect(() => {}, [postMarkdown]);
  return (
    <article className="letter__container">
      {postHtml && <div dangerouslySetInnerHTML={postHtml}></div>}
    </article>
  );
};

export default Letter;
