import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbSquareOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.78V8.03c0-3.46 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.94c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.94c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.03c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M14.735 17.781c-.73 0-1.38-.28-1.81-.61-.32-.19-.65-.46-.92-.71-.27.25-.6.52-.92.71-.81.63-2.44 1.07-3.79-.22-1-.94-1.15-2.31-.42-3.75.24-.47 2.89-5.61 2.89-5.61.43-.85 1.29-1.38 2.24-1.38s1.81.53 2.24 1.38c0 0 2.65 5.13 2.89 5.6.74 1.44.58 2.81-.42 3.75-.63.6-1.33.82-1.98.82zm-1.68-2.39c.23.21.47.4.67.51.04.02.07.04.1.07 0 0 .95.76 1.86-.1.5-.48.54-1.14.11-1.98-.24-.48-2.89-5.61-2.89-5.61-.36-.71-1.45-.71-1.8 0 0 0-2.65 5.13-2.88 5.6-.44.85-.4 1.52.1 1.99.9.86 1.85.11 1.86.1.03-.03.07-.05.1-.07.18-.1.42-.29.67-.51-.61-.65-1.23-1.44-1.23-2.5a2.279 2.279 0 1 1 4.56 0c0 1.06-.62 1.85-1.23 2.5m-1.05-3.28c-.43 0-.78.35-.78.78 0 .5.36.97.78 1.43.42-.46.78-.93.78-1.43 0-.43-.35-.78-.78-.78"
    />
  </Svg>
);
export default IconlystAirbnbSquareOutline;
