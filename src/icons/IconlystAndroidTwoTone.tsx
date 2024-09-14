import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAndroidTwoTone = ({
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
      d="M16.819 18.468H7.142a.763.763 0 0 1-.762-.763v-7.82c0-3.08 2.52-5.6 5.6-5.6s5.601 2.52 5.601 5.6v7.82a.763.763 0 0 1-.762.763"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.729 18.469v2.533M14.022 18.469v2.533M7.508 3l1.306 1.978M16.45 3l-1.36 1.978M3.105 10.527v5.59M20.897 10.527v5.59M6.38 10.21h11.203"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystAndroidTwoTone;
