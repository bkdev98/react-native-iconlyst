import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBreadTwoTone = ({
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
      d="M13.414 19.943c1.169.62 2.447 1.078 3.654.844 1.386-.27 2.37-1.508 3.063-2.63 3.767-6.092-.7-13.812-7.782-14.884-1.658-.251-3.471-.122-5.048.459-1.443.531-3.199 1.681-3.649 3.233-.53 1.825.417 3.648 1.401 5.136 2.165 3.274 4.87 5.99 8.36 7.842"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.137 4.664s-2.096-.358-3.873 1.614M15.022 9.397c1.682-1.836 3.664-2.027 4.354-1.991M21.1 11.143s-1.895-.071-3.79 1.717"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBreadTwoTone;
