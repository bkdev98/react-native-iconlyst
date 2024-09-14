import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAttachBulk = ({
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
      d="M4 14c0 4.41 3.589 8 8 8s8-3.59 8-8V4.88a1 1 0 1 0-2 0V14c0 3.309-2.691 6-6 6s-6-2.691-6-6V7.65H4z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.65 2A5.657 5.657 0 0 0 4 7.65h2A3.654 3.654 0 0 1 9.65 4a3.654 3.654 0 0 1 3.65 3.65v6.194c0 .743-.604 1.348-1.347 1.348a1.35 1.35 0 0 1-1.348-1.348V7.999a1 1 0 1 0-2 0v5.845a3.35 3.35 0 0 0 3.348 3.348 3.35 3.35 0 0 0 3.347-3.348V7.65A5.657 5.657 0 0 0 9.65 2"
    />
  </Svg>
);
export default IconlystAttachBulk;
