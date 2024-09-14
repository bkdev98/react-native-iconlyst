import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers4Outline = ({
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
      d="M16.104 22.38a5.7 5.7 0 0 1-3.643-1.309c-2.79-2.295-7.943-6.622-7.943-6.622a6.776 6.776 0 0 1-.047-9.6 6.754 6.754 0 0 1 9.555 0c.044.048 4.372 5.2 6.666 7.987a5.79 5.79 0 0 1-.43 7.8 5.86 5.86 0 0 1-4.158 1.744M5.531 13.344s5.11 4.288 7.883 6.568a4.357 4.357 0 0 0 6.12-6.122c-2.29-2.784-6.61-7.927-6.612-7.927a5.26 5.26 0 0 0-7.39.047 5.264 5.264 0 0 0 0 7.434"
    />
    <Path
      fill={props.color}
      d="M9.273 14.266a.75.75 0 0 1-.75-.73l-.076-2.944a.75.75 0 0 1 .584-.752l3.96-.9a.75.75 0 0 1 .333 1.463l-3.361.762.06 2.33a.75.75 0 0 1-.73.77z"
    />
    <Path
      fill={props.color}
      d="M9.207 11.307a.74.74 0 0 1-.53-.22l-.98-.981a.75.75 0 1 1 1.06-1.06l.98.98a.75.75 0 0 1-.53 1.28"
    />
  </Svg>
);
export default IconlystSlippers4Outline;
