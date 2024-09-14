import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoveBold = ({
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
      d="M13.216 10.739c-.28.91-1.39 1.79-2.08 2.24-.69-.45-1.79-1.32-2.09-2.24-.2-.62-.03-1.39.65-1.61.34-.11.71-.04.98.17.27.19.63.2.9 0 .29-.21.66-.27.99-.17.69.22.85 1 .65 1.61"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.646 11.199c-.58 1.86-2.89 3.17-3.15 3.31-.11.07-.24.1-.36.1a.74.74 0 0 1-.36-.09c-.26-.15-2.55-1.44-3.16-3.32-.1-.32-.15-.64-.15-.95 0-1.16.67-2.2 1.77-2.55.64-.2 1.31-.15 1.9.13.59-.28 1.27-.32 1.89-.13 1.39.46 2.1 1.99 1.62 3.5m-3.52-8.7c-4.65 0-8.41 3.77-8.41 8.42s3.76 8.42 8.41 8.42a8.42 8.42 0 0 0 0-16.84M20.99 19.793l-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLoveBold;
