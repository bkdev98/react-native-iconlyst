import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlideUpBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.427 9.599 12.36 5.15a1.72 1.72 0 0 0-3.44.026v9.863l-1.23-1.785a1.88 1.88 0 0 0-2.22-.688c-.915.35-1.406 1.345-1.072 2.267.624 1.718 1.611 3.637 2.882 5.217 2.003 2.492 8.121 2.326 10.311.136 1.716-1.716 2.68-5.214 1.7-7.856-.973-2.627-4.457-2.503-6.863-2.732"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.427 6.286v-1.47a.791.791 0 0 0 1.05-1.178l-1.28-1.28-.002-.001a.78.78 0 0 0-.538-.232h-.039a.807.807 0 0 0-.521.213l-.003.002-.002.002-.003.003-.001.002-.003.003h-.001l-.002.001-.002.003-.002.003-1.283 1.28a.79.79 0 0 0 1.052 1.178v1.471a.79.79 0 0 0-1.052 1.177l1.285 1.284.002.001.002.002.002.002.002.002.002.002v.003h.002l.002.002.002.002h.001l.002.003h.003v.002l.003.002q.002.001.002.002l.002.002.002.002q.002.003.002.001l.001.003h.002l.001.002h.001l.002.003h.002l.003.003.002.001.002.002v.001l.003.002a.78.78 0 0 0 .486.183h.039a.798.798 0 0 0 .538-.232l.003-.002 1.279-1.28a.789.789 0 0 0-1.05-1.177"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlideUpBulk;
