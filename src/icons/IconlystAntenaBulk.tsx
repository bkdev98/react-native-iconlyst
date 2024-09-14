import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaBulk = ({
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
      d="M3 14.09a1 1 0 0 0-1 1v5.65a1 1 0 1 0 2 0v-5.65a1 1 0 0 0-1-1M8.998 10.23a1 1 0 0 0-1 1v9.51a1 1 0 1 0 2 0v-9.51a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.975 6.19a1 1 0 0 0-1 1v13.55a1 1 0 1 0 2 0V7.19a1 1 0 0 0-1-1M21 2.26a1 1 0 0 0-1 1v17.48a1 1 0 1 0 2 0V3.26a1 1 0 0 0-1-1"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAntenaBulk;
