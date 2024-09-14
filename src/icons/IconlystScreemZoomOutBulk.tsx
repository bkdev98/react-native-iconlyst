import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreemZoomOutBulk = ({
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
      d="M16.807 2.5H8.86c-3.306 0-5.526 2.122-5.526 5.28v8.44c0 3.158 2.22 5.28 5.526 5.28h7.947c3.306 0 5.527-2.122 5.527-5.28V7.78c0-3.158-2.221-5.28-5.527-5.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.402 10.58h1.006a.75.75 0 0 0 0-1.5h-1.006a.646.646 0 0 1-.646-.648l.002-1a.75.75 0 0 0-.748-.752h-.002a.75.75 0 0 0-.75.749l-.002 1a2.13 2.13 0 0 0 .629 1.52c.406.407.945.63 1.517.63M16.4 14.92h1.008a.75.75 0 0 0 0-1.5H16.4c-.573 0-1.112.223-1.518.63a2.13 2.13 0 0 0-.627 1.52l.002 1a.75.75 0 0 0 1.5-.003l-.002-1a.64.64 0 0 1 .189-.457.64.64 0 0 1 .456-.19M10.66 17.319a.75.75 0 0 0 .75-.75l.002-1a2.13 2.13 0 0 0-.63-1.52 2.13 2.13 0 0 0-1.517-.63H8.26a.75.75 0 1 0 0 1.5h1.005c.172 0 .334.068.456.19a.64.64 0 0 1 .19.458l-.001 1a.75.75 0 0 0 .748.752zM9.264 9.08H8.258a.75.75 0 0 0 0 1.5h1.006c.574 0 1.113-.224 1.518-.631.406-.407.629-.947.628-1.52l-.002-1a.75.75 0 0 0-1.5.003l.002 1a.647.647 0 0 1-.646.648"
    />
  </Svg>
);
export default IconlystScreemZoomOutBulk;
