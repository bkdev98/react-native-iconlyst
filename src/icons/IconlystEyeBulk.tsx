import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeBulk = ({
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
      d="M12.003 15.83A3.833 3.833 0 0 1 8.176 12a3.828 3.828 0 0 1 7.653 0 3.83 3.83 0 0 1-3.826 3.83m9.457-4.028c-1.993-4.636-5.53-7.404-9.462-7.404-3.93 0-7.465 2.768-9.457 7.404a.5.5 0 0 0 0 .394c1.99 4.634 5.526 7.402 9.456 7.404h.006c3.93-.002 7.465-2.77 9.457-7.404a.5.5 0 0 0 0-.394"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.003 9.68A2.326 2.326 0 0 0 9.676 12a2.33 2.33 0 0 0 2.327 2.33A2.33 2.33 0 0 0 14.329 12a2.326 2.326 0 0 0-2.326-2.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEyeBulk;
