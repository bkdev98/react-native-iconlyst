import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinAddBold = ({
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
      d="M14.508 11.212h-1.759v1.758a.75.75 0 0 1-1.5 0v-1.758H9.49a.75.75 0 0 1 0-1.5h1.759V7.953a.75.75 0 0 1 1.5 0v1.759h1.759a.75.75 0 0 1 0 1.5M12 2.5c-4.425 0-8.026 3.6-8.026 8.026C3.974 16.162 10.566 21.5 12 21.5s8.026-5.338 8.026-10.974C20.026 6.1 16.425 2.5 12 2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinAddBold;
