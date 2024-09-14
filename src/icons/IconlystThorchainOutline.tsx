import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThorchainOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.935 3.87 8.891 7.714l3.334 3.221zm-7.74 8.155-4.193-4.05a.75.75 0 0 1 .253-1.24l11.462-4.387c1.416-.542 2.582 1.21 1.54 2.308l-6.95 7.32 4.192 4.05a.75.75 0 0 1-.253 1.24L5.784 21.653c-1.417.542-2.583-1.211-1.54-2.31zm1.08 1.04-6.71 7.065 10.044-3.844z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThorchainOutline;
