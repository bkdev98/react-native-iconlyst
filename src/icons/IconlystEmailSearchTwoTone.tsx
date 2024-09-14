import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailSearchTwoTone = ({
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
      d="M21.5 11.044V8.463c0-2.763-1.845-5.013-4.582-5.013H8.082C5.345 3.45 3.5 5.7 3.5 8.463v6.181c0 2.765 1.845 5.014 4.582 5.006h3.436"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.81 8.716-3.998 3.252a2.07 2.07 0 0 1-2.574 0L7.205 8.715M20.052 19.105l1.448 1.444m-3.406-6.429a2.877 2.877 0 1 1 0 5.755 2.877 2.877 0 0 1 0-5.755"
    />
  </Svg>
);
export default IconlystEmailSearchTwoTone;
