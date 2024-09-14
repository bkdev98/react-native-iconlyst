import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiqualityTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 12a3 3 0 0 0 3 3c.96 0 2.074-.615 2.948-1.252a5.16 5.16 0 0 1 3.052-.998 5.16 5.16 0 0 1 3.053.998C16.426 14.385 17.54 15 18.5 15a3 3 0 0 0 3-3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 12a3 3 0 0 1 3-3c.96 0 2.074.615 2.948 1.252a5.16 5.16 0 0 0 3.052.998 5.16 5.16 0 0 0 3.053-.998C16.426 9.615 17.54 9 18.5 9a3 3 0 0 1 3 3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLiqualityTwoTone;
