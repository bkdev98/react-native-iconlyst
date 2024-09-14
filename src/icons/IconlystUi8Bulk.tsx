import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUi8Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.42 11.816v4.11c0 1-.54 1.93-1.41 2.43l-5.36 3.1c-.43.25-.91.37-1.4.37-.48 0-.97-.12-1.4-.37l-5.36-3.1a2.81 2.81 0 0 1-1.41-2.43v-5.73c0-1.02.54-1.95 1.42-2.43l5.35-3.1a2.8 2.8 0 0 1 2.8 0l.84.48c-.27.6-.41 1.26-.41 1.95a4.925 4.925 0 0 0 6.34 4.72"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.984 5.367c-.346 0-.627.245-.627.548 0 .295.28.534.627.534.345 0 .625-.24.625-.534 0-.303-.28-.548-.625-.548M16.357 8.297c0-.302.28-.547.627-.547.345 0 .625.245.625.547 0 .295-.28.535-.625.535-.346 0-.627-.24-.627-.535"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.49 5.146A4.9 4.9 0 0 1 17 2.176a4.93 4.93 0 0 1 4.92 4.92c0 2.22-1.48 4.11-3.5 4.72a4.925 4.925 0 0 1-6.34-4.72c0-.69.14-1.351.41-1.95m4.493 4.987c1.063 0 1.925-.824 1.925-1.836a1.8 1.8 0 0 0-.469-1.195c.288-.321.47-.732.47-1.187 0-1.02-.863-1.848-1.925-1.848s-1.928.829-1.928 1.848c0 .455.182.866.47 1.187-.288.323-.47.737-.47 1.195 0 1.012.866 1.836 1.928 1.836"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M10.646 10.31a.75.75 0 0 0-.75.75v2.73c0 .59-.48 1.07-1.068 1.07a1.07 1.07 0 0 1-1.068-1.07v-2.73a.75.75 0 0 0-1.5 0v2.73a2.573 2.573 0 0 0 2.568 2.57 2.573 2.573 0 0 0 2.568-2.57v-2.73a.75.75 0 0 0-.75-.75M13.37 11.48a.75.75 0 0 0-.75.75v3.29a.75.75 0 0 0 1.5 0v-3.29a.75.75 0 0 0-.75-.75"
    />
  </Svg>
);
export default IconlystUi8Bulk;
