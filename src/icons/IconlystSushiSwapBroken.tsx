import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSushiSwapBroken = ({
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
      d="M16.112 6.37c-3.841-2.543-7.913-3.16-9.095-1.375-1.181 1.784.974 5.293 4.815 7.837 3.84 2.544 7.912 3.16 9.094 1.376.826-1.246.023-3.333-1.844-5.345"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.389 17.63c-3.842-2.544-5.997-6.053-4.816-7.837l3.444-4.797M20.926 14.209l-3.443 4.797c-.878 1.326-3.351 1.326-6.14.195"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.31 15.005c.59-.582.78-.805 1.518-1.174 1.037-.518 2.135-.308 2.907.546.808.894 1.447 2.453 2.912 2.293 1.201-.132 2.09-1.225 2.933-1.977M11.502 8.01c-.302.457.55 1.552 1.902 2.448 1.353.896 2.693 1.252 2.995.797.302-.457-.55-1.551-1.902-2.447"
    />
  </Svg>
);
export default IconlystSushiSwapBroken;
