/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
export const onPreRenderHTML = ({
  getHeadComponents,
  pathname,
  replaceHeadComponents,
}) => {
  if (pathname !== `/offline-plugin-app-shell-fallback/`) return;
  const headComponents = getHeadComponents();
  const filteredHeadComponents = headComponents.filter(
    ({ type, props }) =>
      !(
        type === `link` &&
        props.as === `fetch` &&
        props.rel === `preload` &&
        props.href.startsWith(`/static/id`)
      )
  );

  replaceHeadComponents(filteredHeadComponents);
};
