import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnkrBold = ({
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
      d="M8.953 11.98A3.05 3.05 0 0 1 12 8.931a3.05 3.05 0 0 1 3.048 3.047A3.05 3.05 0 0 1 12 15.027a3.05 3.05 0 0 1-3.047-3.048M20.3 13.07a1 1 0 0 0-1 1v1.35a2 2 0 0 1-1.123 1.8l-5.178 2.52v-2.814a5.056 5.056 0 0 0 4.049-4.947A5.053 5.053 0 0 0 12 6.932a5.053 5.053 0 0 0-5.047 5.047 5.056 5.056 0 0 0 4.046 4.947v2.813l-5.17-2.516a2.01 2.01 0 0 1-1.129-1.804v-1.35a1 1 0 0 0-2 0v1.35c0 1.535.86 2.913 2.249 3.6L10.25 21.6a4.02 4.02 0 0 0 3.5-.002l5.306-2.582A3.99 3.99 0 0 0 21.3 15.42v-1.35a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m19.107 5.107-5.3-2.68a4.03 4.03 0 0 0-3.615 0l-5.298 2.68A3.98 3.98 0 0 0 2.7 8.68v1.27a1 1 0 1 0 2 0V8.68c0-.749.43-1.45 1.096-1.787l5.298-2.68a2.01 2.01 0 0 1 1.81 0l5.301 2.68A2.02 2.02 0 0 1 19.3 8.68v1.27a1 1 0 1 0 2 0V8.68a3.98 3.98 0 0 0-2.193-3.572"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAnkrBold;
