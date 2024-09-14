import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlobeBroken = ({
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
      d="M5.34 9.226A5.62 5.62 0 1 0 6.826 5.42M4.73 15.46a8.81 8.81 0 0 0 12.46 0M19.06 12.702A8.81 8.81 0 0 0 17.19 3M10.96 18.058v2.467M14.782 20.526H7.16"
    />
  </Svg>
);
export default IconlystGlobeBroken;
