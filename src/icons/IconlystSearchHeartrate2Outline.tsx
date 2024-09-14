import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchHeartrate2Outline = ({
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
      d="M11.63 3.792a7.63 7.63 0 0 0 0 15.261 7.57 7.57 0 0 0 5.194-2.046.75.75 0 0 1 1.04.018l3.412 3.402a.75.75 0 0 1-1.06 1.062l-2.919-2.911a9.06 9.06 0 0 1-5.667 1.975c-5.038 0-9.13-4.092-9.13-9.13 0-5.048 4.093-9.131 9.13-9.131 3.387 0 6.34 1.84 7.915 4.572a.75.75 0 0 1-1.3.749 7.62 7.62 0 0 0-6.615-3.821m-.95 4.109a.75.75 0 0 1 .65.423l2.196 4.549L15.59 9.88a.75.75 0 0 1 1.244.015l1.34 2.042.644-1.016a.75.75 0 0 1 .634-.349h1.797a.75.75 0 0 1 0 1.5h-1.385l-1.046 1.65a.75.75 0 0 1-1.26.01l-1.367-2.083-2.165 3.136a.75.75 0 0 1-1.292-.1l-2.132-4.417-1.182 2.096a.75.75 0 0 1-1.307-.737l1.888-3.346a.75.75 0 0 1 .677-.381"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchHeartrate2Outline;
