import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoriesOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.219 4.083a2.43 2.43 0 0 0-2.455 0L6.218 7.334a.85.85 0 0 0 0 1.466l5.546 3.25a2.43 2.43 0 0 0 2.455 0l5.545-3.25a.85.85 0 0 0 0-1.466zm.758-1.294a3.93 3.93 0 0 0-3.972 0L5.46 6.04c-1.548.908-1.548 3.146 0 4.054l5.545 3.25c1.226.72 2.746.72 3.972 0l5.545-3.25c1.55-.908 1.55-3.146 0-4.054z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.393 11.335a.75.75 0 0 1-.21 1.04L6.027 15.14a.85.85 0 0 0 .041 1.438l5.695 3.338a2.43 2.43 0 0 0 2.454 0l5.675-3.326a.85.85 0 0 0 .037-1.443l-4.185-2.735a.75.75 0 0 1 .82-1.256l4.187 2.736c1.457.956 1.405 3.11-.1 3.992l-5.674 3.326a3.93 3.93 0 0 1-3.973 0l-5.694-3.338c-1.497-.877-1.558-3.02-.114-3.98l4.158-2.766a.75.75 0 0 1 1.04.209"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCategoriesOutline;
