import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import save from './save';
import './sytles.scss';

registerBlockType('plz/register', {
  title: 'Register',
  category: 'widgets',
  icon: 'admin-users',
  attributes: {
    title: {
      source: 'html',
      selector: 'h1',
      default: 'Register',
    },
    nameLabel: {
      type: 'string',
      default: 'Name',
    },
    emailLabel: {
      type: 'string',
      default: 'Email',
    },
    passwordLabel: {
      type: 'string',
      default: 'Password',
    },
    text: {
      source: 'html',
      selector: 'p',
    },
  },
  edit,
  save,
});
