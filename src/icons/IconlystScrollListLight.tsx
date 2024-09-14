import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScrollListLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.5 8.987 2.835-2.835m0 0 2.835 2.835M7.335 6.152v13.23M4.5 16.549l2.835 2.835m0 0 2.835-2.835M14.018 12.861H20.5m-6.483 5.709H20.5M14.018 6.96H20.5"
    />
  </Svg>
);
export default IconlystScrollListLight;
