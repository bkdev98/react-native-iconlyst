import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotspotDisconnectBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.103 11.207a8.96 8.96 0 0 1 2.575-5.318M5.678 18.609a8.96 8.96 0 0 1-2.154-3.453M8.862 15.429a4.5 4.5 0 0 1 0-6.36M15.227 9.068a4.5 4.5 0 0 1 1.317 3.18M18.406 5.887a9 9 0 0 1 2.285 3.872M21.018 12.916a9 9 0 0 1-.774 3.037M3.14 3.344l17.313 17.312"
    />
  </Svg>
);
export default IconlystHotspotDisconnectBroken;
