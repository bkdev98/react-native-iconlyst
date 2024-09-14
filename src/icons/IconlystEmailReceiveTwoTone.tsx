import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailReceiveTwoTone = ({
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
      d="M21.5 10.594v-1.68c0-2.764-1.845-5.014-4.582-5.014H8.082C5.345 3.9 3.5 6.15 3.5 8.913v6.181c0 2.765 1.845 5.013 4.582 5.006h4.336"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.376 14.691-2.571 2.562 2.571 2.561M15.805 17.253H21.5M17.81 9.166l-3.998 3.252a2.07 2.07 0 0 1-2.574 0L7.205 9.166"
    />
  </Svg>
);
export default IconlystEmailReceiveTwoTone;
