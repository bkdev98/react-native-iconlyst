import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowDownLeftMDOutline = ({
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
      d="M4.25 17A2.75 2.75 0 0 0 7 19.75h8a2.75 2.75 0 1 0 0-5.5h-1.36l5.305-5.305a2.75 2.75 0 1 0-3.89-3.89L9.75 10.361V9a2.75 2.75 0 0 0-5.5 0zM7 18.25c-.69 0-1.25-.56-1.25-1.25V9a1.25 1.25 0 1 1 2.5 0v3.172a.75.75 0 0 0 1.28.53l6.586-6.586a1.25 1.25 0 0 1 1.768 1.768l-6.586 6.586a.75.75 0 0 0 .53 1.28H15a1.25 1.25 0 1 1 0 2.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowDownLeftMDOutline;
