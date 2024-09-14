import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpEnterTwoTone = ({
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
      d="M4.4 8.64v-1.8A3.6 3.6 0 0 1 8 3.24h9c1.988 0 3.6 1.61 3.6 3.6v1.8"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.22 9.121 2.28-2.28 2.28 2.28M4.4 18.75a2.5 2.5 0 0 0 2.5 2.5h11.2a2.5 2.5 0 0 0 2.5-2.5v-2.17a2.5 2.5 0 0 0-2.5-2.5H6.9a2.5 2.5 0 0 0-2.5 2.5zM12.5 14.07V6.845"
    />
  </Svg>
);
export default IconlystUpEnterTwoTone;
