import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockOpenBold = ({
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
      d="M12.75 15.719a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 1.5 0zM12 7.805c-1.21 0-2.36.32-3.35.88v-1.47c.01-1.43.91-2.69 2.25-3.15.85-.29 1.76-.24 2.56.15.81.39 1.42 1.07 1.71 1.92.14.39.56.6.96.46.39-.13.6-.56.46-.95a4.847 4.847 0 0 0-6.18-3 4.85 4.85 0 0 0-3.26 4.56v2.6a6.87 6.87 0 0 0-2.06 4.91c0 3.81 3.1 6.91 6.91 6.91s6.91-3.1 6.91-6.91-3.1-6.91-6.91-6.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLockOpenBold;
