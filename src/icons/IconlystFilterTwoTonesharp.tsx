import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterTwoTonesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M9.495 7.858h9.642"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M9.51 7.798a2.62 2.62 0 0 0-2.63-2.611 2.62 2.62 0 0 0-2.63 2.61 2.62 2.62 0 0 0 2.63 2.612c1.453 0 2.63-1.169 2.63-2.611Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M15.005 17.47H5.363"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M14.99 17.41a2.62 2.62 0 0 1 2.63-2.611c1.452 0 2.63 1.17 2.63 2.611a2.62 2.62 0 0 1-2.63 2.612 2.62 2.62 0 0 1-2.63-2.612Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterTwoTonesharp;
