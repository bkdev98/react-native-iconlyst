import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardShieldBroken = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.542 18.906H7.215c-2.444 0-3.965-1.725-3.965-4.167V8.152c0-2.443 1.528-4.168 3.965-4.168h1.363M21.25 11.445V8.152c0-2.443-1.52-4.168-3.965-4.168H12.25M6.637 9.281H21.25M20.525 16.952c0 2.722-3.262 3.71-3.262 3.71S14 19.675 14 16.952s-.118-2.637.145-2.898c.26-.262 2.69-1.109 3.116-1.109s3.119 1.11 3.119 1.11"
    />
  </Svg>
);
export default IconlystCardShieldBroken;
