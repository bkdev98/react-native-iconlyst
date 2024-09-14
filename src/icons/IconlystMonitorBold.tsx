import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorBold = ({
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
      d="M19.268 19.726h-1.812a.877.877 0 0 0-.875.875c0 .482.393.875.875.875h1.812a.877.877 0 0 0 .875-.875.877.877 0 0 0-.875-.875M13.703 19.726H4.719a.876.876 0 0 0 0 1.75h8.984a.877.877 0 0 0 .875-.875.877.877 0 0 0-.875-.875M17.412 2.524H6.588C4.143 2.524 2.5 4.24 2.5 6.795v5.962c0 2.555 1.643 4.271 4.088 4.271h10.823c2.446 0 4.089-1.716 4.089-4.27V6.794c0-2.555-1.643-4.27-4.088-4.27"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorBold;
