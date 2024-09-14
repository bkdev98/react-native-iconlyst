import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinMapBold = ({
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
      d="m4.235 20.811.005.004c.55.37 1.2.56 1.87.56h11.78c.73 0 1.44-.23 2.02-.67q.003-.001.005-.004l-7.286-4.553zM16.04 12.515a.749.749 0 1 1-1.5 0v-1.68h1.5zm5.23 4.74-.93-4.65a3.46 3.46 0 0 0-3.38-2.77h-.92v-1.84a2.76 2.76 0 0 0 1.99-2.64c0-1.5-1.23-2.73-2.73-2.73-1.51 0-2.74 1.23-2.74 2.73 0 1.25.84 2.3 1.98 2.63v1.85h-7.5c-.45 0-.89.09-1.28.25l-.002.001 15.164 9.475c.378-.7.508-1.518.348-2.306M4.44 11.032v.003c-.39.44-.66.97-.78 1.57l-.93 4.65c-.17.84-.01 1.71.42 2.44v.002l8.025-4.457z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinMapBold;
