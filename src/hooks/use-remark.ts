import { useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import DOMPurify from "dompurify";
import rehypeStringify from "rehype-stringify";

interface Html {
  __html: string;
}

const useRemark = () => {
  const [postHtml, setPostHtml] = useState<Html>();

  const convertMd = (data: string) => {
    unified()
      .use(remarkParse) // Parse markdown content to a syntax tree
      .use(remarkRehype) // Turn markdown syntax tree to HTML syntax tree, ignoring embedded HTML
      .use(rehypeStringify) // Serialize HTML syntax tree
      .process(data)
      .then((file) =>
        setPostHtml({
          __html: DOMPurify.sanitize(String(file), {
            WHOLE_DOCUMENT: true,
          }),
        })
      )
      .catch((error) => {
        throw error;
      });
  };
  return {
    postHtml,
    convertMd,
  };
};

export default useRemark;
