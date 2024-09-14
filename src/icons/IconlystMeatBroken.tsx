import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMeatBroken = ({
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
      d="M5.907 17.953c-2.6-2.602-3.652-5.768-2.346-7.073s4.472-.255 7.074 2.345c2.6 2.601 3.652 5.768 2.346 7.074-.913.913-2.735.674-4.637-.44M16.056 6.448c-.415-.331-.69-.85-.69-1.436 0-1.03.84-1.872 1.871-1.872 1.04 0 1.929 1.086 1.57 2.193 1.095-.369 2.192.52 2.192 1.56 0 1.039-.84 1.88-1.88 1.88a1.86 1.86 0 0 1-1.437-.69l-1.71 1.711"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.66 10.782c3.751-3.751 8.9-4.684 11.502-2.083 1.69 1.692 1.888 4.46.789 7.221M7.348 14.668a4.18 4.18 0 0 1 1.844 1.844"
    />
  </Svg>
);
export default IconlystMeatBroken;
