import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsersBulk = ({
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
      d="M2.111 12c0 5.535 4.504 10.039 10.04 10.039 5.534 0 10.038-4.504 10.038-10.04 0-5.534-4.504-10.038-10.039-10.038S2.111 6.465 2.111 12m1.5 0c0-4.708 3.831-8.54 8.54-8.54 4.707 0 8.538 3.832 8.538 8.54s-3.83 8.539-8.539 8.539-8.539-3.831-8.539-8.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.469 13.632a3.223 3.223 0 0 1-3.22-3.218 3.223 3.223 0 0 1 3.22-3.219 3.223 3.223 0 0 1 3.219 3.22 3.223 3.223 0 0 1-3.22 3.217M13.98 12.703a2.527 2.527 0 0 0 2.524 2.525 2.53 2.53 0 0 0 2.525-2.525 2.53 2.53 0 0 0-2.525-2.525 2.527 2.527 0 0 0-2.524 2.525"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M19.002 17.09a8.53 8.53 0 0 1-7.97 3.376l.01-.13c.228-1.776 1.758-3.648 5.372-3.648.974 0 1.843.135 2.588.402M10.044 20.276a8.57 8.57 0 0 1-4.93-3.442c.66-.768 1.936-1.633 4.346-1.633 1.508 0 2.573.335 3.322.773.2.117.165.403-.04.51-1.7.884-2.517 2.363-2.689 3.698l-.008.079z" />
    </G>
  </Svg>
);
export default IconlystUsersBulk;
