import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowOutline = ({
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
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.385 4.365-9.75 9.75-9.75S22 6.615 22 12s-4.365 9.75-9.75 9.75S2.5 17.385 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.125 8.25c-.621 0-1.125.504-1.125 1.125v1.875h2.25a.75.75 0 0 1 0 1.5H13v1.5a3 3 0 1 1-3-3h1.5V9.375a2.625 2.625 0 0 1 2.625-2.625h2.625a.75.75 0 0 1 0 1.5zm-2.625 4.5H10a1.5 1.5 0 1 0 1.5 1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowOutline;
