import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpotifyOutline = ({
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
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.138 16.067c-1.475-.925-3.26-1.146-4.87-.54a.75.75 0 0 1-.528-1.404c2.077-.782 4.35-.484 6.195.674a.75.75 0 1 1-.797 1.27M15.122 13.558c-1.901-1.323-4.41-1.574-6.701-.776a.75.75 0 0 1-.494-1.416c2.69-.938 5.71-.668 8.051.96a.75.75 0 1 1-.856 1.231"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.617 11.118a10.68 10.68 0 0 0-9.384-1.053.75.75 0 0 1-.516-1.409 12.18 12.18 0 0 1 10.715 1.202.75.75 0 1 1-.815 1.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpotifyOutline;
