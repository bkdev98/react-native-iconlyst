import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoElectricScooterOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.275 5.478a.75.75 0 0 1 .75-.75h1.928a1.75 1.75 0 0 1 1.7 1.335L19.16 16.32a.75.75 0 1 1-1.457.356L15.196 6.42a.25.25 0 0 0-.243-.191h-1.928a.75.75 0 0 1-.75-.75M4.524 13.757a.75.75 0 0 1 .75-.75c2.646 0 4.843 1.936 5.207 4.486h2.876a.75.75 0 0 1 0 1.5H9.784a.75.75 0 0 1-.75-.75 3.74 3.74 0 0 0-3.76-3.736.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.494 13.696a.75.75 0 0 1-.408.979l-.465.19a3.8 3.8 0 0 0-1.63 1.472.75.75 0 1 1-1.287-.771 5.3 5.3 0 0 1 2.33-2.08l.481-.198a.75.75 0 0 1 .98.408M5.23 17.08a1.23 1.23 0 1 0 0 2.461 1.23 1.23 0 0 0 0-2.461M2.5 18.31a2.73 2.73 0 1 1 5.462 0 2.73 2.73 0 0 1-5.462 0M19.27 17.08c-.602 0-1.104.432-1.21 1.003a.75.75 0 1 1-1.475-.275 2.732 2.732 0 1 1 3.2 3.185.75.75 0 0 1-.282-1.473 1.232 1.232 0 0 0-.234-2.44"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.032 3.666a.75.75 0 0 1 1.06 0L21.78 21.354a.75.75 0 0 1-1.06 1.061L3.032 4.727a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNoElectricScooterOutline;
