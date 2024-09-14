import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelete2Bulksharp = ({
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
      d="M5.334 22.014 3.82 6.214h16.86l-1.511 15.8z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m8.58 6.215.806-2.451h5.73l.807 2.45h1.579l-1.3-3.95H8.3L7 6.214zM11.502 17.35h1.5v-6.474h-1.5z"
    />
  </Svg>
);
export default IconlystDelete2Bulksharp;
