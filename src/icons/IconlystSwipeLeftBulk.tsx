import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwipeLeftBulk = ({
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
      d="m12.393 8.953-.07-4.586a1.773 1.773 0 0 0-3.546.026v10.17l-1.268-1.84a1.94 1.94 0 0 0-2.29-.71c-.944.362-1.449 1.388-1.105 2.338.642 1.773 1.66 3.75 2.972 5.38 2.065 2.568 8.373 2.396 10.63.14 1.77-1.77 2.764-5.376 1.754-8.101-1.003-2.708-4.595-2.58-7.077-2.817"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.203 3.955h-3.116l.214-.213a.791.791 0 0 0-1.12-1.12l-1.564 1.565a.8.8 0 0 0-.174.264.8.8 0 0 0-.057.266v.008l-.001.003v.048a.8.8 0 0 0 .058.266.8.8 0 0 0 .174.263L16.18 6.87a.792.792 0 0 0 1.12 0c.309-.31.309-.81 0-1.12l-.214-.213h3.116a.792.792 0 0 0 0-1.582"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwipeLeftBulk;
