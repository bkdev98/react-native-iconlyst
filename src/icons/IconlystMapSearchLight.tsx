import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapSearchLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.322 19.738-2.164-.787a1.5 1.5 0 0 0-1.128.038L4.467 20.57A1.044 1.044 0 0 1 3 19.617V6.955c0-.758.447-1.446 1.14-1.753l3.891-1.728c.356-.159.76-.173 1.127-.04L14.845 5.5c.367.134.77.12 1.128-.039l3.559-1.582A1.04 1.04 0 0 1 21 4.833v4.64"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.906 12.45a3.458 3.458 0 1 1 0 6.915 3.458 3.458 0 0 1 0-6.916"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.26 18.438 21 20.174M15.417 5.586v3.401M8.587 18.855v-15.5"
    />
  </Svg>
);
export default IconlystMapSearchLight;
