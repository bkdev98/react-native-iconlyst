import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystComputerCodeBold = ({
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
      d="M15.709 13.236h-3.047a.75.75 0 0 1 0-1.5h3.047a.75.75 0 0 1 0 1.5m-5.58 6.606.433-2.669h2.875l.434 2.67zM8.82 12.488a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28L9.417 9.77 7.76 8.112a.749.749 0 1 1 1.06-1.06l2.188 2.188a.75.75 0 0 1 0 1.06zm8.151-9.83H7.028A4.534 4.534 0 0 0 2.5 7.188v5.456a4.534 4.534 0 0 0 4.528 4.53h2.015l-.434 2.668H7.055a.75.75 0 0 0 0 1.5h9.889a.75.75 0 0 0 0-1.5h-1.553l-.435-2.669h2.015a4.535 4.535 0 0 0 4.529-4.529V7.187a4.535 4.535 0 0 0-4.529-4.529"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystComputerCodeBold;
