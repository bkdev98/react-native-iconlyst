import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagStarBulk = ({
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
      d="M13.974 19.378a.3.3 0 0 0-.087-.269l-.685-.657c-.922-.93-.921-2.387-.03-3.281l.085-.081a2.35 2.35 0 0 1 1.182-.566l.997-.145a.3.3 0 0 0 .225-.164l.425-.855a2.305 2.305 0 0 1 3.087-1.041c.444.222.795.564 1.022.995l.024.046.449.902a.203.203 0 0 0 .384-.09V8.026c0-3.305-2.123-5.526-5.284-5.526H7.333c-3.159 0-5.282 2.221-5.282 5.526v7.948c0 3.305 2.123 5.526 5.282 5.526h6.168c.21 0 .354-.21.316-.415a2.2 2.2 0 0 1-.01-.756z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.76 16.346a.93.93 0 0 0-.63-.374l-1.47-.213-.655-1.322q-.004-.005-.007-.012a1 1 0 0 0-.425-.417.96.96 0 0 0-.72-.05.95.95 0 0 0-.552.48l-.655 1.32-1.487.216c-.181.03-.35.111-.523.267a.953.953 0 0 0 .012 1.346l1.067 1.026-.256 1.448a.97.97 0 0 0 .105.62c.174.31.496.486.833.486a1 1 0 0 0 .44-.106l1.32-.69 1.327.695a.95.95 0 0 0 1.365-1.004l-.255-1.45 1.053-1.016a.933.933 0 0 0 .113-1.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.971 8.07a.75.75 0 0 0-.75.75 4.334 4.334 0 0 0 4.329 4.33 4.335 4.335 0 0 0 4.33-4.33.75.75 0 0 0-1.5 0c0 1.56-1.27 2.83-2.83 2.83a2.83 2.83 0 0 1-2.83-2.83.75.75 0 0 0-.75-.75"
    />
  </Svg>
);
export default IconlystShoppingBagStarBulk;
