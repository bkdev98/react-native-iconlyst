import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChart3BarSearchTwoTone = ({
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
      d="M7.834 11.01v6.174m4.2-9.128v9.128m4.13-2.911v2.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.218 3.618H7.783C4.843 3.618 3 5.7 3 8.646v7.946c0 2.946 1.835 5.026 4.783 5.026h8.434c2.949 0 4.783-2.08 4.783-5.026v-3.946"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.447 7.172a2.668 2.668 0 1 0 3.772-3.773 2.668 2.668 0 0 0-3.773 3.773"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.653 8.965 1.792-1.792"
    />
  </Svg>
);
export default IconlystChart3BarSearchTwoTone;
