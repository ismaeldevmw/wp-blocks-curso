import { registerBlockType } from '@wordpress/blocks';

registerBlockType('plz/register', {
  title: 'Register',
  category: 'widgets',
  icon: 'admin-users',
  edit: () => <h2>Register backend</h2>,
  save: () => <h2>Save frontend</h2>,
});
