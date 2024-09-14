import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBrokencurved = ({
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
      d="M6.809 21.278c-2.202-.3-3.757-1.038-3.757-2.604 0-2.224 3.117-4.228 6.809-4.228 3.672 0 6.808 1.985 6.808 4.208s-3.117 2.799-6.808 2.799M6.815 3.785a4.35 4.35 0 0 0-1.32 3.126 4.35 4.35 0 0 0 4.334 4.364h.03a4.364 4.364 0 0 0 0-8.728M17.102 10.076a3.289 3.289 0 0 0-.187-6.397M17.763 13.65c1.987 0 3.685 1.349 3.685 2.552 0 .709-.585 1.437-1.474 1.646"
    />
  </Svg>
);
export default IconlystUserBrokencurved;
