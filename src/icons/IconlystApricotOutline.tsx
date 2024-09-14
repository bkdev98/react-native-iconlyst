import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystApricotOutline = ({
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
      d="M9.605 21.74c-3.46 0-6.27-3.46-6.27-7.7s2.81-7.7 6.27-7.7c1.95 0 3.75 1.08 4.95 2.96.22.35.12.81-.23 1.04-.35.22-.81.12-1.04-.23-.91-1.44-2.26-2.26-3.68-2.26-2.63 0-4.77 2.78-4.77 6.2s2.14 6.2 4.77 6.2c1.43 0 2.77-.82 3.68-2.26.22-.35.69-.45 1.04-.23s.45.69.23 1.04c-1.2 1.88-3 2.96-4.95 2.96z"
    />
    <Path
      fill={props.color}
      d="M14.395 21.74c-.96 0-1.89-.26-2.75-.77a.75.75 0 0 1-.26-1.03c.21-.36.67-.47 1.03-.26.62.37 1.29.56 1.98.56 2.63 0 4.77-2.78 4.77-6.2s-2.14-6.2-4.77-6.2c-.69 0-1.35.19-1.98.56-.36.21-.82.09-1.03-.26a.76.76 0 0 1 .26-1.03c.86-.51 1.79-.77 2.75-.77 3.46 0 6.27 3.46 6.27 7.7s-2.81 7.7-6.27 7.7"
    />
    <Path
      fill={props.color}
      d="M12.175 8.559c-.36 0-.67-.26-.74-.62-.14-.8-.91-2.98-2.75-3.48a.75.75 0 0 1-.53-.92c.11-.4.52-.63.92-.53 2.5.68 3.6 3.35 3.84 4.67.07.41-.2.8-.61.87-.04 0-.09.01-.13.01"
    />
    <Path
      fill={props.color}
      d="M12.315 7.85h-.04c-.39 0-.71-.3-.74-.68-.14-1.59.24-2.83 1.13-3.7 1.51-1.47 3.89-1.22 3.99-1.2.34.04.61.3.66.64.01.08.26 1.99-1.01 3.43-.88 1-2.22 1.51-4 1.51zm3.51-4.1c-.61.04-1.51.2-2.12.8-.42.42-.66 1.01-.7 1.77.97-.1 1.7-.42 2.17-.96.45-.51.6-1.14.64-1.6z"
    />
  </Svg>
);
export default IconlystApricotOutline;
