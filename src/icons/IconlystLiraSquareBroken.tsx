import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiraSquareBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.746 8.121v4.76c0 1.726 1.4 3.125 3.125 3.125h1.478M8.65 12.313h4.89M8.65 9.8h4.89"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 21.065H7.782C4.834 21.065 3 18.982 3 16.037V8.091c0-2.945 1.843-5.027 4.782-5.027h8.435C19.165 3.064 21 5.146 21 8.091v7.947c0 2.945-1.835 5.026-4.784 5.026h-.666"
    />
  </Svg>
);
export default IconlystLiraSquareBroken;
