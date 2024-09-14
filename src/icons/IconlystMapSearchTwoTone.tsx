import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapSearchTwoTone = ({
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
      d="m11.822 19.738-2.164-.787a1.5 1.5 0 0 0-1.128.038L4.967 20.57a1.044 1.044 0 0 1-1.467-.954V6.955c0-.758.447-1.446 1.14-1.753l3.891-1.728c.356-.159.76-.173 1.127-.04L15.345 5.5c.367.134.77.12 1.128-.039l3.559-1.582a1.04 1.04 0 0 1 1.468.954v4.64"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.406 12.45a3.458 3.458 0 1 1 0 6.915 3.458 3.458 0 0 1 0-6.916"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.76 18.438 1.74 1.736"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.917 5.586v3.401M9.087 18.855v-15.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMapSearchTwoTone;
