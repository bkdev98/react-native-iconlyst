import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeatportLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.482 9.926c.335.925.518 1.922.518 2.962 0 1.242-.26 2.424-.73 3.493M3.518 9.93A8.7 8.7 0 0 0 3 12.892c0 1.242.26 2.424.73 3.493M7.71 17.177a6.067 6.067 0 1 1 8.58 0"
    />
  </Svg>
);
export default IconlystBeatportLight;
