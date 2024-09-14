import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsAscendLight = ({
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
      d="M21 5.25h-4.045a.47.47 0 0 0-.469.47v3.536c0 .26-.21.47-.469.47h-3.576a.47.47 0 0 0-.469.468v3.686c0 .26-.21.47-.469.47H7.927a.47.47 0 0 0-.469.468v3.463c0 .259-.21.469-.469.469H3M7.92 5.25 3 10.17m4.92-4.92-.004 3.117M7.92 5.25l-3.115.007"
    />
  </Svg>
);
export default IconlystStairsAscendLight;
