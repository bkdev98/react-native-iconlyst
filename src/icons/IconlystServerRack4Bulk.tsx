import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack4Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M18.05 13.1H5.95a3.41 3.41 0 0 0-3.4 3.4v1.6c0 1.87 1.53 3.4 3.4 3.4h12.1c1.87 0 3.4-1.53 3.4-3.4v-1.6c0-1.87-1.53-3.4-3.4-3.4M18.05 2.5H5.95a3.41 3.41 0 0 0-3.4 3.4v1.6c0 1.87 1.53 3.4 3.4 3.4h12.1c1.87 0 3.4-1.53 3.4-3.4V5.9c0-1.87-1.53-3.4-3.4-3.4" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.75 18.05h-3.6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.6c.41 0 .75.34.75.75s-.34.75-.75.75m-8.8 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75M16.75 7.45h-3.6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.6c.41 0 .75.34.75.75s-.34.75-.75.75m-8.8 0h-.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRack4Bulk;
