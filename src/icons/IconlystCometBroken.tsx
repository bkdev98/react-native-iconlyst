import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCometBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.566 13.508 2.163-2.078a.886.886 0 0 0-.499-1.515l-2.99-.431A.9.9 0 0 1 16.562 9l-1.337-2.672a.906.906 0 0 0-1.61 0L12.278 9a.9.9 0 0 1-.679.486l-2.99.43a.886.886 0 0 0-.499 1.515l2.165 2.079c.212.202.31.497.259.786l-.512 2.934a.898.898 0 0 0 1.307.936L14 16.78a.91.91 0 0 1 .839 0l2.672 1.386a.898.898 0 0 0 1.307-.936M4.987 16.137c.941-.362 1.958-.59 2.939-.514M3.001 12.548c.686-.312 1.43-.569 2.184-.697M4.31 8.032c1.653-1.001 3.596-1.6 5.62-1.544"
    />
  </Svg>
);
export default IconlystCometBroken;
