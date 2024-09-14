import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserContactBold = ({
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
      d="m15.171 17.916-6.04.008a.35.35 0 0 1-.351-.35c0-1.277 1.042-2.565 3.37-2.565 2.33 0 3.371 1.284 3.371 2.556a.35.35 0 0 1-.35.351m-3.02-8.365a2.19 2.19 0 0 1 2.187 2.187 2.19 2.19 0 0 1-2.188 2.188 2.19 2.19 0 0 1-2.187-2.188 2.19 2.19 0 0 1 2.187-2.187m-1-5.35h.004c0-.1.1-.2.2-.2h1.595c.1 0 .2.1.2.2v2.2l-1 .5-1-.5zm4.75.6h-1.2v-.6c0-1-.8-1.8-1.8-1.8h-1.5c-1 0-1.8.8-1.8 1.8v.6H8.4c-2.8 0-4.7 2-4.7 4.9v7c0 2.9 1.9 4.9 4.7 4.9h7.5c2.8 0 4.7-2 4.7-4.9v-7c0-2.9-1.9-4.9-4.7-4.9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserContactBold;
