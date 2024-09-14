import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBreadBroken = ({
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
      d="M4.553 12.101c-.984-1.488-1.93-3.31-1.401-5.136.45-1.552 2.206-2.702 3.649-3.233 1.577-.581 3.39-.71 5.048-.46 7.081 1.073 11.549 8.793 7.782 14.885-.694 1.122-1.677 2.36-3.063 2.63-1.208.234-2.485-.224-3.654-.844-2.552-1.353-4.684-3.17-6.492-5.327"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.637 4.664s-2.096-.358-3.873 1.614M14.522 9.397c1.682-1.836 3.664-2.027 4.354-1.991M20.6 11.143s-1.895-.071-3.79 1.717"
    />
  </Svg>
);
export default IconlystBreadBroken;
