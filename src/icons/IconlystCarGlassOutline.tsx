import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarGlassOutline = ({
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
      d="M6.81 18.02a1.7 1.7 0 0 1-1.51-.94L2.65 9.77c-.38-.75-.06-1.76.76-2.18 5.38-2.76 12.3-2.76 17.69 0 .8.41 1.13 1.4.75 2.22L19.25 17c-.45.9-1.42 1.25-2.24.87-1.08-.5-3.31-.81-4.75-.81s-3.67.31-4.75.81c-.23.1-.46.15-.7.15m5.45-11.04c-2.86 0-5.68.67-8.16 1.95-.08.04-.12.17-.07.26l2.65 7.31s.12.06.2.01c1.5-.69 4.09-.94 5.38-.95 1.29 0 3.88.26 5.38.95.09.04.19 0 .24-.09l2.58-7.15s.02-.05.03-.08c.05-.09.01-.22-.07-.26a18 18 0 0 0-8.16-1.95"
    />
    <Path
      fill={props.color}
      d="M13.27 14.1a.748.748 0 0 1-.64-1.14l2.48-4.09a.75.75 0 0 1 1.28.78l-2.48 4.09c-.14.23-.39.36-.64.36M9.78 14.1a.748.748 0 0 1-.64-1.14l1.91-3.14c.21-.35.68-.47 1.03-.25.35.21.47.68.25 1.03l-1.91 3.14c-.14.23-.39.36-.64.36"
    />
  </Svg>
);
export default IconlystCarGlassOutline;
