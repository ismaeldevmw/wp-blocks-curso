import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, SelectControl } from '@wordpress/components';

const Edit = (props) => {
  const { attributes, setAttributes } = props;
  const { category } = attributes;
  const blockProps = useBlockProps();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    let path = '/wp/v2/posts';
    if (category) path = `${path}?categories=${category}`;
    const newPosts = await apiFetch({ path });

    setPosts(newPosts);
    setIsLoading(false);
  };

  const fetchCategories = async () => {
    const path = '/wp/v2/categories/?hide_empty=true';
    const newCategories = await apiFetch({ path });
    const filteredCategories = newCategories.map((currentCategory) => {
      return {
        label: currentCategory.name,
        value: currentCategory.id,
      };
    });

    setCategories(filteredCategories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchPosts();
  }, [category]);

  const Loading = () => {
    return <p {...blockProps}>Cargando...</p>;
  };

  const Content = () => {
    return (
      <>
        {categories.length > 0 && (
          <InspectorControls>
            <Panel>
              <PanelBody title="categories" initialOpen={true}>
                <SelectControl
                  label="Current Category"
                  value={category || 1}
                  options={categories}
                  onChange={(newCategory) =>
                    setAttributes({ category: newCategory })
                  }
                />
              </PanelBody>
            </Panel>
          </InspectorControls>
        )}
        {posts.length > 0 && (
          <div {...blockProps}>
            <h3>Quizas te interese leer esto:</h3>
            <ul className="posts">
              {posts.map((post) => (
                <li key={post.id}>
                  <a href={post.link}>{post.title.rendered}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
  };

  return <>{isLoading ? <Loading /> : <Content />}</>;
};

export default Edit;
