import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlideUpBold = ({
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
      d="M11.927 9.599 11.86 5.15a1.72 1.72 0 0 0-3.44.026v9.863l-1.23-1.785a1.88 1.88 0 0 0-2.22-.688c-.915.35-1.406 1.345-1.072 2.266.624 1.72 1.612 3.638 2.882 5.218 2.003 2.492 8.122 2.326 10.311.136 1.716-1.716 2.68-5.214 1.7-7.856-.973-2.627-4.457-2.503-6.863-2.732M18.926 6.286v-1.47a.791.791 0 0 0 1.05-1.178l-1.278-1.28-.003-.001a.78.78 0 0 0-.538-.232h-.03900000000000001a.808.808 0 0 0-.521.213q0 0-.003.002l-.002.002-.003.003-.001.002-.003.003h-.002v.001q0 .002-.003.003 0 .003-.002.003l-1.283 1.28a.79.79 0 0 0 1.051 1.178v1.471a.79.79 0 0 0-1.05 1.177l1.284 1.284.001.001.003.002.002.002.002.002.002.002v.003h.002l.002.002.002.002h.001l.002.003h.002q.002.003.002.002l.002.002q.002.001.002.002l.002.002q0 .002.002.002.001.003.002.001l.001.003h.002l.001.002q.001.002.001 0l.002.003h.002l.003.003.002.001.002.002v.001l.003.002a.78.78 0 0 0 .485.183h.04a.798.798 0 0 0 .538-.232l.003-.002 1.279-1.28a.789.789 0 0 0-1.05-1.177"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlideUpBold;
