import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreemZoomOut2Broken = ({
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
      d="M8.67 21v-2.511a3.075 3.075 0 0 0-3.076-3.075h-2.51M15.498 21v-2.511a3.075 3.075 0 0 1 3.076-3.075h2.51M8.67 3v2.511a3.075 3.075 0 0 1-3.076 3.076h-2.51M15.498 3v2.511a3.075 3.075 0 0 0 3.076 3.076h2.51"
    />
  </Svg>
);
export default IconlystScreemZoomOut2Broken;
