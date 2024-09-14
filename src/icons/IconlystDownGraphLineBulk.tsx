import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownGraphLineBulk = ({
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
      d="M21 20H5.941C4.871 20 4 19.13 4 18.061V3a1 1 0 1 0-2 0v15.061A3.946 3.946 0 0 0 5.941 22H21a1 1 0 1 0 0-2"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.608 12.012a1 1 0 0 0 .668.38c.26.032.53-.04.74-.206l3.595-2.826 3.231 4.2a1 1 0 0 0 1.404.182 1 1 0 0 0 .182-1.402l-3.847-5a1.004 1.004 0 0 0-1.411-.177l-3.598 2.828-3.15-4.064a1 1 0 0 0-1.58 1.225z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownGraphLineBulk;
