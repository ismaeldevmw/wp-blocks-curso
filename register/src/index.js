import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './sytles.scss';

registerBlockType('plz/register', {
  title: 'Register',
  category: 'widgets',
  icon: 'admin-users',
  edit,
  save: () => <h2>Save frontend</h2>,
});
