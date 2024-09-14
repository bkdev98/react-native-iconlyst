import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24HourReturnGuaranteeTwoTone = ({
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
      d="m20.392 4.914.002 2.233-2.22.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.133 7.093A8.917 8.917 0 0 0 3.75 11.52M5.105 19.087l-.001-2.233 2.22-.002"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.367 16.905a8.917 8.917 0 0 0 16.383-4.428"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.249 14.405v-1.21h1.025-3.975l2.95-4.101v4.101M8.774 10.527a1.414 1.414 0 0 1 2.828 0c0 1.767-2.827 1.767-2.827 3.86h2.827"
      opacity={0.4}
    />
  </Svg>
);
export default Iconlyst24HourReturnGuaranteeTwoTone;
