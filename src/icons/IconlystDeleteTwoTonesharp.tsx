import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteTwoTonesharp = ({
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
      d="M4.876 8.007h14.748l-1.327 13.847H6.202z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M8.062 3.354h8.376M12.25 12.604v4.653"
    />
  </Svg>
);
export default IconlystDeleteTwoTonesharp;