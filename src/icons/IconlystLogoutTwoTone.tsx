import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutTwoTone = ({
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
      d="M15.078 7.87v-.882a3.485 3.485 0 0 0-3.485-3.484h-4.61A3.485 3.485 0 0 0 3.5 6.988v10.524a3.484 3.484 0 0 0 3.483 3.484h4.62a3.475 3.475 0 0 0 3.475-3.473v-.892"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 12.249H10.115m11.385 0-2.769-2.757m2.77 2.757-2.77 2.757"
    />
  </Svg>
);
export default IconlystLogoutTwoTone;
