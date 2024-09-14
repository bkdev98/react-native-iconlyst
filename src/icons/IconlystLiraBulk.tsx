import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiraBulk = ({
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
      d="M17.097 17.063h-2.248a3.75 3.75 0 0 1-3.743-3.62l-.013-2v-5.38a1 1 0 1 0-2 0v5.38l.007 2a5.756 5.756 0 0 0 5.749 5.62h2.248a1 1 0 1 0 0-2"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.594 13.442H6.903a1 1 0 1 1 0-2h6.691000000000001a1 1 0 1 1 0 2M13.594 10.252h-6.69a1 1 0 1 1 0-2h6.69a1 1 0 1 1 0 2"
    />
  </Svg>
);
export default IconlystLiraBulk;
