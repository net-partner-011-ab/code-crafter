import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

export default function ContentBlock({ title, subtitle, description }) {

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="has-text-black">{children}</p>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return <a className="has-text-black" href={node.data.uri}>{children}</a>
      },
    },
  };

    return (
      <section className="section is-small has-background-white">
        <div className="container">
          <div className="has-text-centered mb-6">
            <h2 className="title has-text-black p-4 is-size-2">{title}</h2>
            <h4 className="subtitle has-text-black is-size-5">
              {subtitle}
            </h4>
          </div>
          <div className="content">
            {documentToReactComponents(description, RICHTEXT_OPTIONS)}
          </div>
        </div>
      </section>
    );
  }
  