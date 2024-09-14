import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownEnterTwoTone = ({
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
      d="M4.4 15.852v1.8a3.6 3.6 0 0 0 3.6 3.6h9c1.988 0 3.6-1.61 3.6-3.6v-1.8"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.22 15.371 2.28 2.28 2.28-2.28M4.4 5.742a2.5 2.5 0 0 1 2.5-2.5h11.2a2.5 2.5 0 0 1 2.5 2.5v2.17a2.5 2.5 0 0 1-2.5 2.5H6.9a2.5 2.5 0 0 1-2.5-2.5zM12.5 10.422v7.226"
    />
  </Svg>
);
export default IconlystDownEnterTwoTone;
