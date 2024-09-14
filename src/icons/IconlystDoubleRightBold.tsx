import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleRightBold = ({
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
      d="M13 18.002a.999.999 0 0 1-.707-1.707l4.293-4.294-4.293-4.294a.999.999 0 1 1 1.414-1.414l5 5.001a1 1 0 0 1 0 1.414l-5 5.001a1 1 0 0 1-.707.293"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6 18.002a.999.999 0 0 1-.707-1.707l4.293-4.294-4.293-4.294a.999.999 0 1 1 1.414-1.414l5 5.001a1 1 0 0 1 0 1.414l-5 5.001a1 1 0 0 1-.707.293"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleRightBold;
