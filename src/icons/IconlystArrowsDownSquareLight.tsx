import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDownSquareLight = ({
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
      d="m13.426 12.945 2.138 2.13m0 0 2.139-2.13m-2.139 2.13V3M6.298 12.945l2.138 2.13m0 0 2.139-2.13m-2.139 2.13V3M7.782 21h8.435C19.165 21 21 18.92 21 15.974V8.027C21 5.08 19.165 3 16.216 3H7.782C4.834 3 3 5.081 3 8.027v7.947C3 18.919 4.843 21 7.782 21"
    />
  </Svg>
);
export default IconlystArrowsDownSquareLight;
