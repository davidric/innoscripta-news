import ContentLoader from 'react-content-loader';

const Skeletons = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <ContentLoader key={i} speed={2} width="100%" height={578} backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
          <rect x="1" y="1" rx="2" ry="2" width="100%" height="150" />

          <rect x="1" y="170" rx="2" ry="2" width="50%" height="10" />

          <rect x="1" y="210" rx="2" ry="2" width="80%" height="12" />
          <rect x="1" y="235" rx="2" ry="2" width="90%" height="12" />
          <rect x="1" y="260" rx="2" ry="2" width="80%" height="12" />
          <rect x="1" y="285" rx="2" ry="2" width="70%" height="12" />

          <rect x="1" y="325" rx="2" ry="2" width="50%" height="10" />

          <rect x="1" y="360" rx="2" ry="2" width="100%" height="10" />
          <rect x="1" y="380" rx="2" ry="2" width="100%" height="10" />
          <rect x="1" y="400" rx="2" ry="2" width="100%" height="10" />
          <rect x="1" y="420" rx="2" ry="2" width="100%" height="10" />
          <rect x="1" y="440" rx="2" ry="2" width="100%" height="10" />
          <rect x="1" y="460" rx="2" ry="2" width="100%" height="10" />
          <rect x="1" y="480" rx="2" ry="2" width="100%" height="10" />
        </ContentLoader>
      ))}
    </>
  );
};

export default Skeletons;
