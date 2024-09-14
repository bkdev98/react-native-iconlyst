import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteboardChartBold = ({
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
      d="M17.132 13.21a.75.75 0 0 1-1.5 0v-2.57a.75.75 0 0 1 1.5 0zm-3.88 0a.75.75 0 0 1-1.5 0V8.24a.75.75 0 0 1 1.5 0zm-3.88 0a.75.75 0 0 1-1.5 0V9.9a.75.75 0 0 1 1.5 0zm7.768-9.09h-3.89V3a.75.75 0 0 0-1.5 0v1.12H7.86A4.265 4.265 0 0 0 3.6 8.38v5.09a4.266 4.266 0 0 0 4.26 4.261h3.128l-2.695 2.744a.749.749 0 1 0 1.07 1.05l3.138-3.195 3.137 3.195a.747.747 0 0 0 1.06.01c.296-.29.3-.764.01-1.06l-2.694-2.744h3.126a4.266 4.266 0 0 0 4.261-4.261V8.38a4.265 4.265 0 0 0-4.26-4.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWhiteboardChartBold;
