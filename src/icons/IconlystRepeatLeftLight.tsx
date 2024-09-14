import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeatLeftLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.085 15.514c0 2.604 1.621 4.443 4.228 4.443h7.456c2.608 0 4.23-1.84 4.23-4.443V8.487c0-2.604-1.622-4.444-4.23-4.444H9.314c-2.598 0-4.228 1.84-4.228 4.444v3.627"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 10.008 2.105 2.105 2.093-2.093M13.876 14.818V9.18l-1.668 1.01"
    />
  </Svg>
);
export default IconlystRepeatLeftLight;
