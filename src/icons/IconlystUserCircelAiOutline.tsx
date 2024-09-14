import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCircelAiOutline = ({
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
      d="M7.701 4.71a.75.75 0 0 1-.203 1.04 7.923 7.923 0 1 0 12.342 6.577.75.75 0 1 1 1.5 0 9.423 9.423 0 1 1-14.68-7.82.75.75 0 0 1 1.041.202"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.215 18.585c-.514.403-.756.916-.817 1.392a.75.75 0 0 1-1.488-.192 3.6 3.6 0 0 1 1.381-2.381c.84-.658 2.038-1.057 3.62-1.057 1.595 0 2.8.4 3.643 1.064a3.6 3.6 0 0 1 1.373 2.404.75.75 0 0 1-1.49.18 2.1 2.1 0 0 0-.811-1.405c-.516-.407-1.367-.743-2.716-.743-1.332 0-2.178.334-2.695.738M11.92 10.576a1.718 1.718 0 1 0 0 3.437 1.718 1.718 0 0 0 0-3.437M8.7 12.294a3.219 3.219 0 1 1 6.437 0 3.219 3.219 0 0 1-6.437 0M17.995 3.457a.75.75 0 0 1 .703.49l.101.273a3.01 3.01 0 0 0 1.78 1.782l.272.1a.75.75 0 0 1 0 1.407l-.273.101A3.01 3.01 0 0 0 18.8 9.392l-.1.273a.75.75 0 0 1-1.408 0l-.1-.273a3.01 3.01 0 0 0-1.78-1.782l-.272-.1a.75.75 0 0 1 0-1.407l.272-.101a3.01 3.01 0 0 0 1.78-1.782l.1-.273a.75.75 0 0 1 .704-.49m-.949 3.349c.362.267.682.588.949.95.267-.362.587-.683.948-.95a4.5 4.5 0 0 1-.948-.95 4.5 4.5 0 0 1-.949.95M12.684 2.214a.75.75 0 0 1 .718.532c.099.326.353.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-1.435 0 1.02 1.02 0 0 0-.678-.68.75.75 0 0 1 0-1.434 1.02 1.02 0 0 0 .678-.68.75.75 0 0 1 .717-.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserCircelAiOutline;
