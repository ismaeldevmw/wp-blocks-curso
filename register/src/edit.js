import { RichText, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, TextControl } from '@wordpress/components';

const Edit = (props) => {
  const { className, attributes, setAttributes } = props;
  const { title, nameLabel, emailLabel, passwordLabel } = attributes;
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
      <div className={className}>
        <div className="signin__container">
          <RichText
            tagName="h1"
            placeholder="Escribe un título..."
            className="signin_titulo"
            value={title}
            onChange={(newTitle) => setAttributes({ title: newTitle })}
          />
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
