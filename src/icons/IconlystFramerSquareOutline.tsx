import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFramerSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.611 6.17a.75.75 0 0 1 .693-.463h7.391a.75.75 0 0 1 .75.75v3.695a.75.75 0 0 1-.75.75H13.81l2.416 2.416a.75.75 0 0 1-.53 1.28H12.75v2.946a.75.75 0 0 1-1.28.53L7.772 14.38a.75.75 0 0 1-.22-.53l.001-3.697a.75.75 0 0 1 .75-.75h1.885L7.774 6.987a.75.75 0 0 1-.163-.817m4.7 3.232h2.634V7.207h-4.83zm-.622 1.5H9.054v2.636l2.196 2.195v-1.885a.75.75 0 0 1 .75-.75h1.885z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFramerSquareOutline;
