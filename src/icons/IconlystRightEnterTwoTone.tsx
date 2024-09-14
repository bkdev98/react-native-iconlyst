import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightEnterTwoTone = ({
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
      d="M16.106 20.344h1.8a3.6 3.6 0 0 0 3.6-3.6v-9c0-1.988-1.61-3.6-3.6-3.6h-1.8"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.625 14.523 2.28-2.279-2.28-2.28M5.996 20.344a2.5 2.5 0 0 1-2.5-2.5v-11.2a2.5 2.5 0 0 1 2.5-2.5h2.17a2.5 2.5 0 0 1 2.5 2.5v11.2a2.5 2.5 0 0 1-2.5 2.5zM10.676 12.246H17.9"
    />
  </Svg>
);
export default IconlystRightEnterTwoTone;
