import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEyeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.252 19.112h-.004c3.705 0 7.094-2.664 9.002-7.103-1.908-4.439-5.297-7.103-9.002-7.103-3.701 0-7.09 2.664-8.998 7.103 1.429 3.326 3.688 5.654 6.289 6.613"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.253 8.938a3.078 3.078 0 0 0 0 6.153 3.077 3.077 0 0 0 2.45-4.936"
    />
  </Svg>
);
export default IconlystEyeBroken;
