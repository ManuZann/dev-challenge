import ContentLoader from "react-content-loader";

const CardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={250}
    viewBox="0 0 250 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="38" y="8" rx="10" ry="10" width="250" height="500" />
    <rect x="44" y="117" rx="0" ry="0" width="100" height="10" />
  </ContentLoader>
);

export default CardSkeleton;
