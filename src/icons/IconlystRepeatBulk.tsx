import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeatBulk = ({
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
      d="M15.385 6.38a4.615 4.615 0 0 1 3.54 7.577 1 1 0 1 0 1.532 1.284 6.615 6.615 0 0 0-5.072-10.86H8.614a6.614 6.614 0 0 0 0 13.229H11v-2H8.614a4.614 4.614 0 0 1 0-9.229z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.552 13.208a1 1 0 0 0-.552.894v5.017a1 1 0 0 0 1.598.8l3.36-2.508a1 1 0 0 0 0-1.603l-3.36-2.508a1 1 0 0 0-1.046-.092"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeatBulk;
