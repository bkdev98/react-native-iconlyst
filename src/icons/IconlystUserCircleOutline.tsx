import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCircleOutline = ({
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
      d="M12.4 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.65 12c0-5.384 4.365-9.75 9.75-9.75 5.386 0 9.75 4.366 9.75 9.75a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.65 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.378 18.169c-.584.456-.86 1.04-.929 1.582a.75.75 0 1 1-1.488-.191c.117-.91.581-1.86 1.493-2.573.91-.711 2.21-1.147 3.939-1.147 1.745 0 3.053.437 3.965 1.155a3.89 3.89 0 0 1 1.485 2.596.75.75 0 1 1-1.49.182 2.39 2.39 0 0 0-.922-1.6c-.585-.46-1.54-.833-3.038-.833-1.48 0-2.43.37-3.015.829M12.4 9.332a1.969 1.969 0 1 0 0 3.937 1.969 1.969 0 0 0 0-3.937M8.932 11.3a3.469 3.469 0 1 1 6.937 0 3.469 3.469 0 0 1-6.937 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserCircleOutline;
