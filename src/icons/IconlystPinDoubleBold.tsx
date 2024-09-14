import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinDoubleBold = ({
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
      d="M9.505 13.147c-1.41 0-2.56-1.15-2.56-2.56s1.15-2.56 2.56-2.56 2.56 1.15 2.56 2.56-1.15 2.56-2.56 2.56m7.77 6.02c-.62-.29-2.29-1.77-2.9-3.43-.15-.4-.24-.8-.24-1.2 0-1.29.78-2.4 1.89-2.89a3.15 3.15 0 0 1 4.4 2.89c0 2.11-2.38 4.27-3.15 4.63m0-9.28c-.13 0-.25.01-.37.02h-.002c-.372-3.753-3.546-6.695-7.395-6.695-4.099 0-7.433 3.334-7.433 7.432 0 5.21 6.104 10.144 7.433 10.144.84 0 2.678-1.391 4.199-3.098 1.11 1.718 2.808 3.007 3.568 3.007 1.2 0 4.65-3.13 4.65-6.16a4.66 4.66 0 0 0-4.65-4.65"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.245 13.417c-.53 0-.96.43-.96.95a.96.96 0 0 0 1.92 0c0-.52-.43-.95-.96-.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinDoubleBold;
