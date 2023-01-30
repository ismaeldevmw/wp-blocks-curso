import {
  RichText,
  InspectorControls,
  BlockControls,
} from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const Edit = (props) => {
  const { className, attributes, setAttributes } = props;
  const { title, nameLabel, emailLabel, passwordLabel, text } = attributes;
  const [hasText, setHasText] = useState(false);

  return (
    <>
      <InspectorControls>
        <Panel>
          <PanelBody title="Labels" initialOpen={true}>
            <TextControl
              label="Name label"
              value={nameLabel}
              onChange={(newLabel) => setAttributes({ nameLabel: newLabel })}
            />
            <TextControl
              label="Email label"
              value={emailLabel}
              onChange={(newLabel) => setAttributes({ emailLabel: newLabel })}
            />
            <TextControl
              label="Password label"
              value={passwordLabel}
              onChange={(newLabel) =>
                setAttributes({ passwordLabel: newLabel })
              }
            />
          </PanelBody>
        </Panel>
      </InspectorControls>
      <BlockControls
        controls={[
          {
            icon: 'text',
            title: 'Add text',
            isActive: text || hasText,
            onClick: () => setHasText(!hasText),
          },
        ]}
      />

      <div className={className}>
        <div className="signin__container">
          <RichText
            tagName="h1"
            placeholder="Escribe un título..."
            className="signin__titulo"
            value={title}
            onChange={(newTitle) => setAttributes({ title: newTitle })}
          />
          {(text || hasText) && (
            <RichText
              tagName="p"
              placeholder="Escribe un párrafo..."
              value={text}
              onChange={(newText) => setAttributes({ text: newText })}
            />
          )}
          <form className="signin__form" id="signup">
            <div className="signin__name name--campo">
              <label for="Name">{nameLabel}</label>
              <input name="name" type="text" id="Name" />
            </div>
            <div className="signin__email name--campo">
              <label for="email">{emailLabel}</label>
              <input name="email" type="email" id="email" />
            </div>
            <div className="signin__pass name--campo">
              <label for="password">{passwordLabel}</label>
              <input name="password" type="password" id="password" />
            </div>
            <div className="signin__submit">
              <input type="submit" value="Create" />
            </div>
            <div className="msg"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
