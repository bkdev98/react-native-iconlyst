import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdmobOutline = ({
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
      d="M15.513 18.158a3.118 3.118 0 1 1 6.237 0 .75.75 0 1 1-1.5 0 1.618 1.618 0 0 0-3.237 0 .75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.776 3.473a.75.75 0 0 1 .75-.75h.948a9.276 9.276 0 0 1 9.276 9.276v6.158a3.118 3.118 0 0 1-6.237 0v-6.158a3.04 3.04 0 0 0-3.04-3.04h-.947a.75.75 0 0 1 0-1.5h.948a4.54 4.54 0 0 1 4.54 4.54v6.158a1.618 1.618 0 0 0 3.236 0v-6.158a7.776 7.776 0 0 0-7.776-7.776h-.948a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.526 4.223a7.776 7.776 0 0 0 0 15.552 1.618 1.618 0 0 0 0-3.237 4.54 4.54 0 1 1 0-9.078 1.618 1.618 0 0 0 0-3.237m0-1.5a9.276 9.276 0 0 0 0 18.552 3.118 3.118 0 1 0 0-6.237 3.04 3.04 0 1 1 0-6.078 3.118 3.118 0 1 0 0-6.237"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdmobOutline;
