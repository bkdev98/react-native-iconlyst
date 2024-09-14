import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScooterLight = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M5.466 19.179a2.216 2.216 0 1 0 0-4.432 2.216 2.216 0 0 0 0 4.432M19.035 19.179a2.216 2.216 0 1 0 0-4.432 2.216 2.216 0 0 0 0 4.432"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m6.264 14.895 2.61-9.237c.137-.492.6-.837 1.112-.837h1.585"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.75 17.284h-4.896a1 1 0 0 1-.999-.952l-.15-3.111a2 2 0 0 0-.684-1.412L7.72 9.804"
    />
  </Svg>
);
export default IconlystScooterLight;
