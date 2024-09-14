import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDLock2Bulk = ({
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
      fillRule="evenodd"
      d="M16.217 2.824H7.782c-3.159 0-5.282 2.222-5.282 5.53v7.95c0 3.302 2.123 5.52 5.282 5.52h8.434c3.16 0 5.284-2.218 5.284-5.52v-7.95c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.768 17.475a2.504 2.504 0 0 0 2.503-2.5v-1.99c0-.986-.58-1.832-1.41-2.24v-.74a2.84 2.84 0 0 0-.867-2.017 2.8 2.8 0 0 0-2.024-.803 2.84 2.84 0 0 0-2.827 2.82v.74a2.49 2.49 0 0 0-1.411 2.24v1.99c0 1.379 1.123 2.5 2.503 2.5zm0-5.49h-3.533c-.553 0-1.003.448-1.003 1v1.99c0 .552.45 1 1.003 1h3.533c.553 0 1.003-.448 1.003-1v-1.99c0-.552-.45-1-1.003-1m-.407-1.97v.47h-2.718v-.467a1.364 1.364 0 0 1 2.306-.954c.26.253.408.594.412.951"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceIDLock2Bulk;
