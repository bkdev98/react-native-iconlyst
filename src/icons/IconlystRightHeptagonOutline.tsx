import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightHeptagonOutline = ({
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
      d="M12.309 8.452a.75.75 0 0 0 .002 1.06l1.744 1.736H8.13a.75.75 0 0 0 0 1.5h5.926l-1.745 1.74a.75.75 0 1 0 1.059 1.063l3.03-3.022a.75.75 0 0 0 0-1.062L13.37 8.45a.75.75 0 0 0-1.061.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.564 2.739a3.31 3.31 0 0 1 2.872 0L18.6 5.226a3.31 3.31 0 0 1 1.791 2.246l1.276 5.588a3.31 3.31 0 0 1-.639 2.8l-3.575 4.482a3.31 3.31 0 0 1-2.587 1.247H9.134a3.31 3.31 0 0 1-2.588-1.247L2.973 15.86a3.3 3.3 0 0 1-.64-2.801L3.61 7.472a3.31 3.31 0 0 1 1.79-2.246zm.65 1.352L6.051 6.577c-.497.24-.857.692-.98 1.228l-1.275 5.589c-.123.537.005 1.1.349 1.53l3.574 4.483c.343.43.864.681 1.415.681h5.732a1.81 1.81 0 0 0 1.415-.681l3.574-4.482a1.81 1.81 0 0 0 .35-1.531l-1.276-5.589a1.81 1.81 0 0 0-.98-1.228l-5.164-2.486a1.81 1.81 0 0 0-1.57 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightHeptagonOutline;
