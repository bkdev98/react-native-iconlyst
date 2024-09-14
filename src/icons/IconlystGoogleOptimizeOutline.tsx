import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOptimizeOutline = ({
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
      d="M2.25 12.63a2.82 2.82 0 0 1 2.821-2.821h6.778a2.82 2.82 0 0 1 2.82 2.866v6.732a2.821 2.821 0 1 1-5.642 0v-3.956H5.071A2.82 2.82 0 0 1 2.25 12.63m2.821-1.321a1.321 1.321 0 1 0 0 2.642h4.706a.75.75 0 0 1 .75.75v4.706a1.321 1.321 0 1 0 2.642 0V12.63c0-.73-.59-1.321-1.32-1.321z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.32 10.559a.75.75 0 0 1 .75-.75 2.821 2.821 0 0 1 0 5.642.75.75 0 0 1 0-1.5 1.321 1.321 0 0 0 0-2.642.75.75 0 0 1-.75-.75M11.602 4.227a1.321 1.321 0 0 0 0 2.642h4.707a.75.75 0 0 1 .75.75v4.706a1.321 1.321 0 0 0 2.642 0V5.548c0-.73-.591-1.321-1.321-1.321zm-2.82 1.32a2.82 2.82 0 0 1 2.82-2.82h6.778a2.82 2.82 0 0 1 2.82 2.866v6.732a2.821 2.821 0 1 1-5.641 0V8.37h-3.957a2.82 2.82 0 0 1-2.82-2.821"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleOptimizeOutline;
