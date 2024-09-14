import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCubeOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.825 3.365a3.8 3.8 0 0 1 2.69-1.115h9.68A2.805 2.805 0 0 1 22 5.055v9.68c0 1.01-.401 1.977-1.115 2.69l-3.21 3.21a3.8 3.8 0 0 1-2.69 1.115h-9.68A2.805 2.805 0 0 1 2.5 18.945v-9.68c0-1.01.401-1.977 1.115-2.69zm2.69.385c-.61 0-1.197.243-1.63.675l-3.21 3.21A2.3 2.3 0 0 0 4 9.265v9.68c0 .72.584 1.305 1.305 1.305h9.68c.61 0 1.197-.243 1.63-.675l3.21-3.21a2.3 2.3 0 0 0 .675-1.63v-9.68c0-.72-.584-1.305-1.305-1.305z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.251 15.747a.75.75 0 1 1 0-1.5h12.99a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.725 14.416a.75.75 0 0 1 .107 1.055l-4.399 5.4a.75.75 0 0 1-1.163-.948l4.4-5.4a.75.75 0 0 1 1.055-.107"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.25 2.527a.75.75 0 0 1 .75.75v11.72a.75.75 0 1 1-1.5 0V3.277a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.31 9.438a.75.75 0 0 1 0-1.5h12.73a.75.75 0 1 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.131 3.03a.75.75 0 0 1 .055 1.06l-4.32 4.789a.3.3 0 0 0-.077.208v11.73a.75.75 0 0 1-1.5 0V9.087a1.8 1.8 0 0 1 .463-1.212l4.32-4.79a.75.75 0 0 1 1.06-.055"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCubeOutline;
