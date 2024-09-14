import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTinderOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.457 2.482a.75.75 0 0 1 .78-.194c2.904.969 5.563 3.419 6.96 6.233 1.507 2.85 1.564 6.034.359 8.581-1.215 2.567-3.694 4.439-7.117 4.647l-.046.001C3.561 21.75.445 11.23 7.414 6.393a.75.75 0 0 1 1.178.616c0 .86.09 1.47.222 1.883.132.417.284.566.355.613.048.03.116.056.266.008.17-.054.405-.196.672-.465.532-.536 1.053-1.437 1.325-2.5.27-1.057.28-2.215-.132-3.277a.75.75 0 0 1 .157-.789m1.622 1.795a7.3 7.3 0 0 1-.194 2.642c-.328 1.283-.966 2.433-1.713 3.186-.372.374-.807.686-1.282.838-.494.157-1.045.14-1.537-.18-.469-.304-.777-.812-.969-1.417a5.6 5.6 0 0 1-.19-.832c-4.311 4.255-1.66 11.72 5.177 11.736 2.86-.181 4.849-1.718 5.83-3.79.99-2.095.97-4.785-.334-7.246l-.01-.018c-1.015-2.05-2.794-3.873-4.778-4.919"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTinderOutline;
