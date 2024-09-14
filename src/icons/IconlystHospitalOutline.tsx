import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalOutline = ({
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
      fillRule="evenodd"
      d="M3.99 3.897C4.975 2.841 6.377 2.25 8.032 2.25h8.435c1.66 0 3.062.59 4.046 1.648C21.49 4.948 22 6.398 22 8.026v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H8.032c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M5.087 4.92C4.41 5.647 4 6.71 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.095 8.18v1.916a.75.75 0 0 1-.75.75H8.43v2.307h1.915a.75.75 0 0 1 .75.75v1.915h2.307v-1.915a.75.75 0 0 1 .75-.75h1.915v-2.307h-1.915a.75.75 0 0 1-.75-.75V8.18zm-1.5-.241a1.26 1.26 0 0 1 1.258-1.26h2.79a1.26 1.26 0 0 1 1.259 1.26v1.407h1.406c.695 0 1.259.563 1.259 1.258v2.79a1.26 1.26 0 0 1-1.259 1.259h-1.406v1.406c0 .695-.564 1.259-1.259 1.259h-2.79a1.26 1.26 0 0 1-1.258-1.259v-1.406H8.189a1.26 1.26 0 0 1-1.26-1.259v-2.79c0-.695.564-1.258 1.26-1.258h1.406z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHospitalOutline;
