import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareAppleWatchAppsTwoTone = ({
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
      d="M9.565 5.643h5.876c2.044 0 3.31 1.135 3.305 3.221v6.333c0 2.087-1.267 3.229-3.311 3.229h-5.87c-2.038 0-3.31-1.163-3.31-3.282v-6.28c0-2.086 1.272-3.221 3.31-3.221"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.594 10.006v.087m0 3.726v.088m3.811-3.901v.087m0 3.726v.088M16.773 18.275l-.478 2.251A1.86 1.86 0 0 1 14.477 22h-3.955a1.86 1.86 0 0 1-1.82-1.474l-.477-2.25M16.773 5.724l-.478-2.25A1.86 1.86 0 0 0 14.477 2h-3.955a1.86 1.86 0 0 0-1.82 1.474l-.477 2.25"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSquareAppleWatchAppsTwoTone;
