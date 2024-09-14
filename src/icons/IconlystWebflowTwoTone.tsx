import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebflowTwoTone = ({
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
      d="M11.374 11.202c-1.65 3.044-1.799 6.989-6.346 7.191-.675-4.208-1.34-8.352-2.028-12.65C5.099 5.86 6.36 6.83 6.796 8.52c.395 1.531.39 3.165.582 4.932 1.749-2.91 1.555-7.193 6.26-7.843"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.374 11.202 1.09 7.12c1.705.169 3.118-.387 3.749-1.657 1.73-3.483 3.209-7.092 4.787-10.65-.193-.175-2.66.379-3.398 1.128-.736.747-1.146 1.85-1.577 2.85-.43.993-1.261 3.035-1.367 3.011l-1.02-7.395"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWebflowTwoTone;
