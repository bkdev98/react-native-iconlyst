import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlowBrightnessBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.364 6.552-1.857 1.857m-9.013 9.013-1.857 1.857m0-12.727 1.857 1.857m9.014 9.013 1.857 1.857M11.999 3.916v2.627m0 12.746v2.627m-8.999-9h2.627m12.746 0H21"
    />
  </Svg>
);
export default IconlystGlowBrightnessBroken;
