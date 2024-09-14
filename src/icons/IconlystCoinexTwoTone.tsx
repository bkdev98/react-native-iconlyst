import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinexTwoTone = ({
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
      d="M20.983 7.824A8.96 8.96 0 0 0 13.018 3c-4.977 0-9 4.032-9 9a8.998 8.998 0 0 0 16.948 4.211"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.502 10.307 2.482-2.483m-.018 8.387-4.185-4.183-2.009-2.004a2.8 2.8 0 0 0-3.955.003 2.79 2.79 0 0 0 0 3.947 2.79 2.79 0 0 0 3.947 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCoinexTwoTone;
