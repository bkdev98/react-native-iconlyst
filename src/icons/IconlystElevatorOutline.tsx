import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystElevatorOutline = ({
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
      fill={props.color}
      d="M14.282 9.801a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75M6.547 9.801a.75.75 0 0 1 .75-.75h2.481c.211 0 .413.089.555.246l3.664 4.029h3.075a.75.75 0 0 1 0 1.5h-3.407a.75.75 0 0 1-.555-.245l-3.664-4.03h-2.15a.75.75 0 0 1-.75-.75"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.03 3.647C5.013 2.591 6.415 2 8.07 2h8.435c1.659 0 3.062.591 4.046 1.648.978 1.05 1.487 2.501 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.047 1.648H8.07c-1.659 0-3.062-.591-4.045-1.648-.98-1.051-1.487-2.501-1.487-4.128V7.776c0-1.628.511-3.078 1.49-4.129M5.125 4.67c-.677.727-1.087 1.79-1.087 3.106v7.948c0 1.317.41 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.289 0 2.278-.45 2.95-1.17.675-.726 1.084-1.789 1.084-3.106V7.776c0-1.317-.41-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.07c-1.284 0-2.273.449-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystElevatorOutline;
