import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlackTwoTone = ({
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
      d="M13.63 18.234h1.382a1.382 1.382 0 1 1-1.382 1.382zM5.764 15.013v-1.38H4.381a1.382 1.382 0 1 0 1.383 1.38M18.236 10.374h1.383a1.38 1.38 0 1 0 0-2.765c-.764 0-1.383.62-1.383 1.383zM10.37 4.383v1.381H8.987a1.382 1.382 0 1 1 1.383-1.381"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.992 8.527c.761 0 1.378.62 1.377 1.381v.005a1.38 1.38 0 0 1-1.381 1.378H4.382a1.382 1.382 0 0 1 0-2.764zM15.007 12.71c-.762 0-1.38.62-1.378 1.382v.004c0 .762.62 1.378 1.382 1.377h4.605a1.382 1.382 0 0 0 0-2.762zM11.29 15.01a1.38 1.38 0 0 0-1.381-1.377h-.003a1.38 1.38 0 0 0-1.379 1.38v4.607a1.383 1.383 0 0 0 2.764 0zM12.709 8.993a1.38 1.38 0 0 0 1.382 1.378h.004a1.38 1.38 0 0 0 1.378-1.38V4.382a1.382 1.382 0 0 0-2.764 0z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSlackTwoTone;
