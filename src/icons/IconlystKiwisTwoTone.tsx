import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKiwisTwoTone = ({
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
      d="m10.196 6.043-.259.689M6.736 8.573l-.258.69M6.106 15.397l-.258.69"
    />
    <Circle
      cx={6.381}
      cy={6.381}
      r={6.381}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 21 7.945)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.619 10.8c-.354 1.568-1.29 1.793-2.493 1.033.858 1.36.355 2.18-1.033 2.493 1.568.354 1.793 1.29 1.033 2.494 1.359-.859 2.18-.356 2.493 1.032.354-1.568 1.29-1.792 2.493-1.032-.858-1.36-.355-2.18 1.033-2.494-1.388-.313-1.891-1.134-1.033-2.493-1.359.858-2.18.355-2.493-1.033"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.133 8.413c-.245-2.347-2.074-4.13-4.697-4.833-3.357-.9-6.743.31-7.643 3.667L3.196 13.21c-.9 3.357 1.406 6.235 4.763 7.135 1.439.386 2.838.345 4.037-.092"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystKiwisTwoTone;
