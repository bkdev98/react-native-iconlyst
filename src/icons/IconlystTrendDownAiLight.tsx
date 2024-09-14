import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendDownAiLight = ({
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
      d="M16.09 20.127H21v-4.909"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 20.126-7.773-7.772-4.09 4.09L3 10.308M11.14 9.072l-.1-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.102a3.76 3.76 0 0 0 2.222-2.225l.1-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.102-.273.1A3.76 3.76 0 0 0 11.242 8.8zM17.696 9.659A1.77 1.77 0 0 0 16.52 8.48a1.77 1.77 0 0 0 1.176-1.178 1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.179"
    />
  </Svg>
);
export default IconlystTrendDownAiLight;
