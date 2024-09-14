import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13 17.047a.75.75 0 0 1-1.5 0v-2.22a.75.75 0 0 1 1.5 0zm-.75-8.053c-1.503 0-2.764.111-3.81.354v-1.43A3.79 3.79 0 0 1 12.2 4.17h.047a3.845 3.845 0 0 1 3.656 2.707.75.75 0 1 0 1.434-.439c-.689-2.248-2.85-3.783-5.156-3.768A5.284 5.284 0 0 0 6.94 7.905v1.957c-2.033.97-2.849 2.821-2.849 5.903 0 5 2.136 6.772 8.16 6.772s8.16-1.772 8.16-6.772c0-4.999-2.136-6.77-8.16-6.77"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnlockBoldcurved;
