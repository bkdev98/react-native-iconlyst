import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M12 3.115c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.834 12.575a.5.5 0 0 1-.45.283h-1.072l1.013 1.755a.5.5 0 0 1-.432.75H12.75v1.753a.75.75 0 0 1-1.5 0v-1.753H9.108a.5.5 0 0 1-.433-.75l1.013-1.755h-1.07a.499.499 0 0 1-.391-.811l3.383-4.243a.517.517 0 0 1 .782 0l3.382 4.243c.12.15.144.355.06.528"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeCircleBulk;
