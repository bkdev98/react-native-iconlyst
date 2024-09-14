import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshSquare6Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.085 12.364V8.737c0-2.604 1.63-4.444 4.228-4.444h7.457c2.607 0 4.229 1.84 4.229 4.444v3.513M5.085 15.766c0 2.604 1.621 4.443 4.228 4.443h7.456c2.608 0 4.23-1.84 4.23-4.443"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 10.258 2.105 2.105 2.093-2.093"
    />
  </Svg>
);
export default IconlystRefreshSquare6Broken;
