import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshLockOutline = ({
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
      d="M21.571 7.984a.75.75 0 0 1 .357.999l-1.333 2.816a.75.75 0 0 1-.998.357l-2.8-1.325a.75.75 0 1 1 .641-1.356l2.122 1.004 1.013-2.138a.75.75 0 0 1 .998-.357"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.175 3.92a9.17 9.17 0 0 1 10.51 7.346.75.75 0 0 1-1.474.278 7.672 7.672 0 0 0-15.107 2.677 7.67 7.67 0 0 0 8.822 6.316 7.66 7.66 0 0 0 5.69-4.304.75.75 0 1 1 1.357.64 9.171 9.171 0 0 1-17.348-2.407 9.17 9.17 0 0 1 7.55-10.547"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.898 11.532a2.76 2.76 0 0 1 5.52 0c0 .71-.27 1.351-.706 1.836l.47 1.415a1.603 1.603 0 0 1-1.52 2.106h-2.007a1.603 1.603 0 0 1-1.52-2.107l.47-1.414a2.73 2.73 0 0 1-.707-1.837m2.76-1.26a1.26 1.26 0 0 0-1.26 1.26c0 .411.2.776.516 1.008a.75.75 0 0 1 .267.841l-.623 1.873a.103.103 0 0 0 .097.135h2.006a.103.103 0 0 0 .097-.136l-.622-1.872a.75.75 0 0 1 .267-.84c.315-.233.515-.598.515-1.01a1.26 1.26 0 0 0-1.26-1.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRefreshLockOutline;
