import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendUpBoxLight = ({
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
      d="M21.5 7.9v8.436c0 2.948-2.081 4.783-5.026 4.783H8.526c-2.945 0-5.026-1.835-5.026-4.785V7.901c0-2.948 2.081-4.782 5.026-4.782h7.948c2.945 0 5.026 1.842 5.026 4.782"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.455 8.961 3.124-.842.844 3.124"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.58 8.119 12.966 14.4 9.66 12.498l-2.084 3.623"
    />
  </Svg>
);
export default IconlystTrendUpBoxLight;
