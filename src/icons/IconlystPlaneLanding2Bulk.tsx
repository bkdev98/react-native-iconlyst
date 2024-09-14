import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneLanding2Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.081 15.31a599 599 0 0 0 10.004-4.138c1.33-.57 2.56-1.91 2.112-3.5-.192-.686-.608-1.212-1.206-1.519-1.148-.59-2.526-.2-3.064-.005-1.07.387-2.134.855-3.127 1.265a192 192 0 0 0-3.509-3.133c-.81-.71-1.643-.969-2.475-.766-.458.107-.89.274-1.308.435q-.272.106-.556.208a.76.76 0 0 0-.434.401.75.75 0 0 0-.008.591l2.01 4.871-1.74.735-1.795.76-.077-.187-.218-.527a.75.75 0 0 0-.982-.398.75.75 0 0 0-.398.983l.211.512c.125.305.264.641.315.76.86 2.016 2.342 3.087 4.148 3.087.66 0 1.365-.143 2.097-.435"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.545 17.42a.75.75 0 0 0-1.06-.03l-.71.671v-3.577a.75.75 0 0 0-1.5 0v3.58l-.714-.675a.751.751 0 0 0-1.032 1.09l1.977 1.87c.045.043.1.067.152.097.028.016.051.038.08.051a.8.8 0 0 0 .284.057c.01 0 .018-.005.027-.005a.7.7 0 0 0 .254-.05c.055-.024.1-.06.148-.095.028-.02.06-.03.086-.055l.013-.012.006-.005 1.96-1.853a.75.75 0 0 0 .03-1.06M13.313 19.055H4.907a.75.75 0 0 0 0 1.5h8.406a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneLanding2Bulk;
