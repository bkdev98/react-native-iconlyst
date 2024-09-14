import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag3Outlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.48 7.156a4.76 4.76 0 0 1 4.781-4.74 4.76 4.76 0 0 1 4.758 4.762v3.973h-1.5V7.178a3.26 3.26 0 0 0-3.26-3.261h-.003A3.26 3.26 0 0 0 8.98 7.16v3.99h-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 22.86c-5.523 0-10-4.476-10-10V7.174h20v5.688c0 5.523-4.477 10-10 10m-8.5-10a8.5 8.5 0 0 0 17 0V8.674h-17z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag3Outlinesharp;
