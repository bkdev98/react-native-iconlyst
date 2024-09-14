import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrelloBulk = ({
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
      d="M16.217 2.5H7.782C4.622 2.5 2.5 4.723 2.5 8.03v7.94c0 3.307 2.122 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.1 11.999c0 .948-.772 1.72-1.722 1.72h-1.946c-.95 0-1.723-.772-1.723-1.72v-3.89c0-.954.773-1.73 1.723-1.73h1.946c.95 0 1.723.776 1.723 1.73zm-3.668-4.12h1.946c.123 0 .223.104.223.23v3.89a.22.22 0 0 1-.223.22h-1.946a.22.22 0 0 1-.223-.22v-3.89c0-.126.1-.23.223-.23M11.29 15.889c0 .949-.773 1.72-1.723 1.72H7.621c-.95 0-1.723-.771-1.723-1.72v-7.78c0-.954.773-1.73 1.723-1.73h1.946c.95 0 1.723.776 1.723 1.73zm-3.67-8.01h1.947c.123 0 .223.104.223.23v7.78c0 .124-.098.22-.223.22H7.62a.22.22 0 0 1-.223-.22v-7.78c0-.126.1-.23.223-.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrelloBulk;
