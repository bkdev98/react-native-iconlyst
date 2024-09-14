import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumberedListBroken = ({
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
      d="M4.25 16a2 2 0 1 1 4 0c0 .481-.214 1.214-.95 1.877C6.564 18.539 4.56 20 4.56 20h3.69M6.25 10V4L4.402 5.488M11.584 6h8.666m-8.666 6h3.346m5.32 0h-2.166m-6.5 5.999h8.666"
    />
  </Svg>
);
export default IconlystNumberedListBroken;
