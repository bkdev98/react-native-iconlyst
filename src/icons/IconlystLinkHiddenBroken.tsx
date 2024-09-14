import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkHiddenBroken = ({
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
      d="m6.818 9.955-1.026 1.026c-2.053 2.053-2.059 5.418 0 7.476a5.31 5.31 0 0 0 5.444 1.263M17.682 14.046l1.026-1.025c2.053-2.054 2.059-5.418 0-7.477a5.3 5.3 0 0 0-5.444-1.263M12.135 12.19 9.038 5.007M15.231 19.372l-1.548-3.59"
    />
  </Svg>
);
export default IconlystLinkHiddenBroken;
