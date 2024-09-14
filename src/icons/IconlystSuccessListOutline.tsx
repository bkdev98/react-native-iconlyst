import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSuccessListOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.339 11.379a.75.75 0 0 1 .172 1.047l-4.666 6.503a.75.75 0 0 1-1.116.115l-2.446-2.246a.75.75 0 0 1 1.014-1.104l1.823 1.673 4.172-5.816a.75.75 0 0 1 1.047-.172M3.75 6.984a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m12.036 5.685a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5h-3.964a.75.75 0 0 1-.75-.75m-2.492 5.877a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5h-6.456a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSuccessListOutline;
