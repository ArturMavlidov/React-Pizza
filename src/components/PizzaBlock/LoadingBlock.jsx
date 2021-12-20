import ContentLoader from "react-content-loader";

const LoadingBlock = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="249" rx="3" ry="3" width="280" height="24" />
    <rect x="0" y="282" rx="10" ry="10" width="280" height="84" />
    <rect x="0" y="382" rx="0" ry="0" width="89" height="27" />
    <rect x="129" y="382" rx="30" ry="30" width="151" height="44" />
    <circle cx="133" cy="120" r="120" />
  </ContentLoader>
);

export default LoadingBlock;