import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack2Bulk = ({
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
      <Path d="M18.5 13.6H5.4c-1.71 0-2.9 1.15-2.9 2.8v2.2c0 1.65 1.19 2.8 2.9 2.8h13.2c1.71 0 2.9-1.15 2.9-2.8v-2.2c0-1.67-1.21-2.8-3-2.8M18.5 2.6H5.4c-1.71 0-2.9 1.15-2.9 2.8v2.2c0 1.65 1.19 2.8 2.9 2.8h13.2c1.71 0 2.9-1.15 2.9-2.8V5.4c0-1.67-1.21-2.8-3-2.8" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.6 18.25h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75M7.6 7.25h-1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1c.41 0 .75.34.75.75s-.34.75-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRack2Bulk;
