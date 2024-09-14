import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag3TwoTonesharp = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.27 9.9V6.679a4.01 4.01 0 0 0-4.01-4.011 4.01 4.01 0 0 0-4.03 3.992v3.242"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12.25 21.61a9.25 9.25 0 0 0 9.25-9.25V7.424H3v4.938a9.25 9.25 0 0 0 9.25 9.25z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag3TwoTonesharp;
