import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShuffleVerticalSquareLight = ({
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
      d="M16.218 3H7.783C4.836 3 3 5.081 3 8.026v7.947c0 2.945 1.836 5.026 4.784 5.026h8.434c2.947 0 4.782-2.081 4.782-5.026V8.026C21 5.081 19.156 3 16.218 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.8 9.136 1.324-1.324c.518.516 1.324 1.324 1.324 1.324M13.554 9.136l1.324-1.324 1.325 1.324"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.88 7.812c0 1.57 0 3.4-2.877 4.448-2.879 1.046-2.879 2.355-2.879 3.925"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.124 7.812c0 1.57 0 3.4 2.878 4.448 2.878 1.046 2.878 2.355 2.878 3.925"
    />
  </Svg>
);
export default IconlystShuffleVerticalSquareLight;
