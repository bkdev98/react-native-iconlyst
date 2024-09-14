import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLightOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.575 14.19c0 .41-.336.75-.75.75H14.8A2.864 2.864 0 0 1 12 17.19a2.86 2.86 0 0 1-2.798-2.25H7.175a.753.753 0 0 1-.75-.75 5.58 5.58 0 0 1 4.825-5.53V7.34c0-.41.336-.75.75-.75s.75.34.75.75v1.32a5.58 5.58 0 0 1 4.825 5.53m-6.794.75a1.365 1.365 0 0 0 2.438 0zm5.225-1.5A4.08 4.08 0 0 0 12 10.11a4.08 4.08 0 0 0-4.006 3.33z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.74 3.79c.984-1.06 2.386-1.65 4.042-1.65h8.435c1.659 0 3.062.59 4.046 1.65.978 1.05 1.487 2.5 1.487 4.13v7.94c0 1.63-.509 3.08-1.488 4.13-.984 1.06-2.387 1.65-4.046 1.65H7.782c-1.659 0-3.062-.59-4.046-1.65-.978-1.05-1.486-2.5-1.486-4.13V7.92c0-1.63.511-3.08 1.49-4.13m1.097 1.02C4.16 5.54 3.75 6.6 3.75 7.92v7.94c0 1.32.408 2.38 1.084 3.11.67.72 1.66 1.17 2.948 1.17h8.434c1.289 0 2.278-.45 2.949-1.17.676-.73 1.085-1.79 1.085-3.11V7.92c0-1.32-.41-2.38-1.085-3.11-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLightOutline;
