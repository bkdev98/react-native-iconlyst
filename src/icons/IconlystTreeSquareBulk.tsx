import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeSquareBulk = ({
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
      d="M16.217 3.115H7.782C4.623 3.115 2.5 5.336 2.5 8.641v7.948c0 3.305 2.123 5.526 5.282 5.526h8.434c3.161 0 5.284-2.22 5.284-5.526V8.641c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.834 12.575a.5.5 0 0 1-.451.283h-1.07l1.012 1.755a.502.502 0 0 1-.432.75H12.75v1.753a.75.75 0 0 1-1.5 0v-1.753H9.107a.502.502 0 0 1-.433-.75l1.013-1.755h-1.07a.499.499 0 0 1-.391-.811l3.383-4.243a.52.52 0 0 1 .783 0l3.382 4.243c.12.15.143.355.06.528"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeSquareBulk;
