import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockCheckBold = ({
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
      d="M15.702 9.1c-.3-.004-.63-.005-1.006-.005H9.304c-.374 0-.701.001-1 .005V7.488a3.68 3.68 0 0 1 3.653-3.633h.047a3.7 3.7 0 0 1 3.698 3.641zm-.63 4.976-3.417 3.42a.752.752 0 0 1-1.063-.002l-1.66-1.67a.75.75 0 1 1 1.065-1.057l1.128 1.136 2.885-2.889a.75.75 0 0 1 1.062 1.062m4.488-2.998a3.48 3.48 0 0 0-1.636-1.632 2.9 2.9 0 0 0-.722-.23V7.486c-.036-2.865-2.394-5.138-5.263-5.132a5.176 5.176 0 0 0-5.134 5.12v1.738a3 3 0 0 0-.724.23 3.5 3.5 0 0 0-1.642 1.636c-.345.723-.345 1.56-.345 3.226v2.13c0 1.675 0 2.517.344 3.226a3.53 3.53 0 0 0 1.644 1.646c.717.338 1.554.338 3.222.338h5.392c1.668 0 2.505 0 3.228-.34a3.52 3.52 0 0 0 1.635-1.64c.347-.713.347-1.555.347-3.23v-2.13c0-1.665 0-2.502-.346-3.227"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockCheckBold;
