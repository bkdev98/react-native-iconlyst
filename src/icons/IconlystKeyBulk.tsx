import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M14.758 6.812c1.328 1.33 1.442 3.447.299 4.921l-3.244 3.3c-1.46 1.395-3.785 1.38-5.216-.047l-2.662-2.67A3.68 3.68 0 0 1 2.847 9.69c0-.994.386-1.928 1.088-2.628l2.905-2.9a3.726 3.726 0 0 1 5.255 0l2.662 2.65"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.313 7.93-2.328 2.33a.75.75 0 0 1-1.06 0 .75.75 0 0 1-.002-1.06L9.25 6.867a.75.75 0 0 1 1.063 1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m15.057 11.733 4.974 4.97a3.86 3.86 0 0 1 1.123 2.716v1.72a.25.25 0 0 1-.235.25l-2.802.18a1.285 1.285 0 0 1-1.244-.719l-.81-1.629a.79.79 0 0 0-.583-.425l-.978-.16a1.3 1.3 0 0 1-1.077-1.09l-.11-.792a.8.8 0 0 0-.226-.448l-1.277-1.274z"
    />
  </Svg>
);
export default IconlystKeyBulk;
