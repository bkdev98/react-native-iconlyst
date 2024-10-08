import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2C17.902 2 22.5 6.598 22.5 12.25S17.902 22.5 12.25 22.5 2 17.902 2 12.25 6.598 2 12.25 2m0 1.5c-4.825 0-8.75 3.925-8.75 8.75S7.425 21 12.25 21 21 17.075 21 12.25 17.075 3.5 12.25 3.5m-.42 5.261c.52.217 4.17 2.086 4.17 3.484 0 1.31-3.284 3.142-4.123 3.492-.327.136-.7.264-1.05.264a1 1 0 0 1-.734-.285c-.161-.159-.591-.584-.593-3.383-.001-2.972.446-3.414.593-3.56.523-.519 1.375-.164 1.738-.012m-.696 1.325c-.177 1.001-.18 3.392-.003 4.342.878-.31 2.78-1.56 3.292-2.179-.51-.6-2.388-1.825-3.29-2.163"
    />
  </Svg>
);
export default IconlystPlayOutline;
