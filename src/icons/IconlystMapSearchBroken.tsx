import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapSearchBroken = ({
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
      d="M21.25 9.47v-4.64a1.04 1.04 0 0 0-1.468-.953l-3.56 1.582c-.356.159-.76.173-1.127.04L9.408 3.432a1.5 1.5 0 0 0-1.127.039L4.391 5.2A1.92 1.92 0 0 0 3.25 6.953v3.165M11.572 19.737l-2.164-.787a1.5 1.5 0 0 0-1.128.038L4.717 20.57a1.044 1.044 0 0 1-1.467-.954v-6.33"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.156 12.448a3.458 3.458 0 1 1 0 6.916 3.458 3.458 0 0 1 0-6.916"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.51 18.439 1.74 1.736M15.667 5.584v3.402M8.837 18.856V7.468"
    />
  </Svg>
);
export default IconlystMapSearchBroken;
