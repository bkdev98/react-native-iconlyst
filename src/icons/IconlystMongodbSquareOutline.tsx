import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMongodbSquareOutline = ({
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
      d="M11.711 6.058a.75.75 0 0 1 .578 0c.621.259 1.516.8 2.27 1.612.76.818 1.414 1.954 1.434 3.383.02 1.432-.625 2.631-1.375 3.518-.748.886-1.648 1.52-2.272 1.845a.75.75 0 0 1-.692 0c-.624-.325-1.524-.96-2.272-1.845-.75-.887-1.396-2.086-1.376-3.518.02-1.429.675-2.566 1.435-3.384.754-.811 1.649-1.352 2.27-1.611m-1.17 2.632c-.588.632-1.021 1.43-1.035 2.384-.013.951.415 1.811 1.021 2.529.475.561 1.029 1 1.473 1.281.444-.282.998-.72 1.472-1.281.607-.718 1.035-1.578 1.021-2.529-.013-.954-.447-1.752-1.034-2.384A5.6 5.6 0 0 0 12 7.578c-.429.224-.982.599-1.459 1.112"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 11.21a.75.75 0 0 1 .75.75v5.29a.75.75 0 0 1-1.5 0v-5.29a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMongodbSquareOutline;
