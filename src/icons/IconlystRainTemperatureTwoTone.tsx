import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainTemperatureTwoTone = ({
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
      d="M5.615 6v6.022c-1.208.913-2 2.347-2 3.978a5 5 0 0 0 10 0c0-1.63-.793-3.065-2-3.978V6a3 3 0 0 0-6 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.087 16a1.473 1.473 0 1 1-2.947 0 1.473 1.473 0 0 1 2.947 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.614 8v6.527M19.047 10.15s-1.59 1.465-1.566 2.936v.002c-.017.838.79 1.448 1.566 1.438.776.01 1.583-.6 1.567-1.438v-.002c.023-1.47-1.567-2.936-1.567-2.936M16.262 3.717s-1.549 1.427-1.525 2.86v.001c-.016.815.77 1.41 1.525 1.4.755.01 1.541-.585 1.525-1.4v-.002c.023-1.432-1.525-2.86-1.525-2.86"
    />
  </Svg>
);
export default IconlystRainTemperatureTwoTone;
