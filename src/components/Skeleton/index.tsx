import React from 'react';
import ContentLoader from 'react-content-loader/native';
import {useTheme} from 'styled-components/native';

interface SkeletonProps {
  loading: boolean;
  skeleton: React.ReactNode;
}

interface ContentLoaderStyledProps {
  width: number;
  height: number;
}

const Skeleton: React.FC<SkeletonProps> = ({children, loading, skeleton}) => {
  return loading ? <>{skeleton}</> : <>{children}</>;
};

export const ContentLoaderStyled: React.FC<ContentLoaderStyledProps> = ({
  height,
  width,
  children,
}) => {
  const theme = useTheme();

  return (
    <ContentLoader
      width={width}
      height={height}
      foregroundColor={theme.COLORS.SKELETON_FOREGROUND}
      backgroundColor={theme.COLORS.SKELETON}
      viewBox={`0 0 ${width} ${height}`}>
      {children}
    </ContentLoader>
  );
};

export default Skeleton;
