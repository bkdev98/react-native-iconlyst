import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrobeBold = ({
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
      d="M15.357 9.68a.9.9 0 0 0-.902.9.903.903 0 0 0 1.804 0c0-.496-.405-.9-.902-.9"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.779 15.099-.547.841a.75.75 0 0 1-1.037.22.75.75 0 0 1-.221-1.039l.547-.84a.751.751 0 0 1 1.258.818m-4.824-4.519c0-1.323 1.077-2.4 2.402-2.4a2.404 2.404 0 0 1 2.402 2.4 2.404 2.404 0 0 1-2.402 2.401 2.404 2.404 0 0 1-2.402-2.401m1.133 6.404a2.76 2.76 0 0 1-2.425 1.428 2.74 2.74 0 0 1-1.33-.345.751.751 0 0 1 .728-1.313c.293.164.633.2.958.108a1.27 1.27 0 0 0 .757-.605.75.75 0 0 1 1.312.727m-4.014-4.416a.75.75 0 0 1 1.061.004l.707.711a.75.75 0 0 1-.532 1.278.75.75 0 0 1-.532-.222l-.707-.711a.75.75 0 0 1 .003-1.06m-.821-2.446a.751.751 0 0 1-.947-.477 2.765 2.765 0 0 1 1.755-3.486.747.747 0 0 1 .947.476.75.75 0 0 1-.476.947 1.265 1.265 0 0 0-.801 1.594.75.75 0 0 1-.478.946m-1.785 5.097a.747.747 0 0 1-1.06.002.75.75 0 0 1-.002-1.06 1.27 1.27 0 0 0-.001-1.791.75.75 0 0 1 1.064-1.059 2.775 2.775 0 0 1-.001 3.908m5.554-10.037a.75.75 0 0 1 1.038.22l.547.84a.75.75 0 0 1-1.257.818l-.547-.84a.75.75 0 0 1 .219-1.038M12 2.5c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrobeBold;
