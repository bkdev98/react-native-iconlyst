import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreemZoomOutBold = ({
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
      d="M17.408 10.58h-1.006a2.13 2.13 0 0 1-1.517-.63 2.13 2.13 0 0 1-.629-1.521l.002-1a.75.75 0 0 1 .75-.749h.002a.75.75 0 0 1 .748.752l-.002 1a.646.646 0 0 0 .646.648h1.006a.75.75 0 0 1 0 1.5m0 4.34h-1.007a.64.64 0 0 0-.456.19.64.64 0 0 0-.189.457l.002 1a.75.75 0 1 1-1.5.003l-.002-1a2.13 2.13 0 0 1 .627-1.519 2.13 2.13 0 0 1 1.518-.631h1.007a.75.75 0 0 1 0 1.5m-5.998 1.65a.75.75 0 0 1-.75.749h-.002a.75.75 0 0 1-.748-.752l.002-1a.64.64 0 0 0-.191-.457.64.64 0 0 0-.456-.19H8.26a.75.75 0 1 1 0-1.5h1.005c.574 0 1.112.223 1.518.63s.63.947.629 1.52zM8.258 9.08h1.006a.647.647 0 0 0 .646-.648l-.002-1a.75.75 0 1 1 1.5-.003l.002 1a2.13 2.13 0 0 1-.628 1.52 2.13 2.13 0 0 1-1.518.631H8.258a.75.75 0 0 1 0-1.5m8.549-6.58H8.86c-3.306 0-5.526 2.122-5.526 5.28v8.44c0 3.158 2.22 5.28 5.526 5.28h7.947c3.306 0 5.527-2.122 5.527-5.28V7.78c0-3.158-2.221-5.28-5.527-5.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScreemZoomOutBold;
