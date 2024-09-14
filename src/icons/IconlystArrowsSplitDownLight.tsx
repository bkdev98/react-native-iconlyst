import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsSplitDownLight = ({
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
      d="M6 21v-5.397c0-1.632.956-3.16 2.56-4.096l.88-.514C11.044 10.057 12 8.529 12 6.897V3M18 21v-5.395c0-1.633-.956-3.162-2.562-4.098l-.876-.51C12.957 10.062 12 8.532 12 6.9V3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.5 18.5 18 21l2.5-2.5M3.5 18.5 6 21l2.5-2.5"
    />
  </Svg>
);
export default IconlystArrowsSplitDownLight;
