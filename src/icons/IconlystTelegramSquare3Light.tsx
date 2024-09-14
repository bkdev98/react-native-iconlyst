import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelegramSquare3Light = ({
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
      d="M7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.577 13.049c-.466.439.063.936.6 1.335.938.67 1.868 1.35 2.804 2.021.35.247.928.463 1.1-.096l1.646-7.306c.073-.306.124-.638-.16-.854-.16-.124-.447-.29-.976-.106L6.78 11.496c-.536.234-.386.786-.138.878.609.233 1.433.578 2.043.806.624.216 1.364.205 1.893-.131m0 0 2.785-1.842"
    />
  </Svg>
);
export default IconlystTelegramSquare3Light;
