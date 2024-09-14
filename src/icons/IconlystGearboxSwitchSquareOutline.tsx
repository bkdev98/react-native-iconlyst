import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGearboxSwitchSquareOutline = ({
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
      d="M7.725 7.828a.75.75 0 0 1 .75.75v7.871a.75.75 0 0 1-1.5 0v-7.87a.75.75 0 0 1 .75-.75M16.775 15.662a.75.75 0 0 1 .75.75v.011a.75.75 0 0 1-1.5 0v-.011a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.72 7.828a.75.75 0 0 1 .75.75v2.811a1.874 1.874 0 0 1-1.874 1.875h-7.87a.75.75 0 0 1 0-1.5h7.87a.374.374 0 0 0 .374-.375V8.58a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.223 7.828a.75.75 0 0 1 .75.75v7.871a.75.75 0 0 1-1.5 0v-7.87a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.99 4.411c.985-1.056 2.387-1.647 4.042-1.647h8.435c1.66 0 3.062.59 4.046 1.647C21.49 5.462 22 6.913 22 8.541v7.946c0 1.628-.509 3.078-1.487 4.13-.985 1.056-2.387 1.647-4.047 1.647H8.032c-1.66 0-3.062-.591-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.129V8.54c0-1.628.511-3.079 1.49-4.129m1.097 1.023C4.41 6.16 4 7.224 4 8.54v7.947c0 1.318.409 2.38 1.085 3.107.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.107V8.54c0-1.318-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGearboxSwitchSquareOutline;
