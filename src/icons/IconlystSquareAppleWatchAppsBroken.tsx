import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchAppsBroken = ({
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
      d="M18.246 10.448V8.864c.005-2.086-1.26-3.221-3.305-3.221H9.065c-2.038 0-3.31 1.135-3.31 3.221v6.28c0 2.12 1.272 3.281 3.31 3.281h5.87c2.044 0 3.31-1.141 3.31-3.228v-1.583M10.094 10.006v.087m0 3.726v.088m3.811-3.901v.087m0 3.726v.088"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.273 18.275-.478 2.251A1.86 1.86 0 0 1 13.977 22h-3.955a1.86 1.86 0 0 1-1.82-1.474l-.477-2.25M16.273 5.724l-.478-2.25A1.86 1.86 0 0 0 13.977 2h-3.955a1.86 1.86 0 0 0-1.82 1.474l-.477 2.25"
    />
  </Svg>
);
export default IconlystSquareAppleWatchAppsBroken;