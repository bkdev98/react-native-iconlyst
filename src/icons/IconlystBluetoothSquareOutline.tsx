import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBluetoothSquareOutline = ({
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
      d="M4.891 3.897C5.876 2.841 7.278 2.25 8.934 2.25h6.634c1.66 0 3.062.59 4.046 1.648.978 1.05 1.486 2.501 1.486 4.128v7.948c0 1.627-.508 3.078-1.486 4.128-.984 1.057-2.387 1.648-4.047 1.648H8.934c-1.66 0-3.062-.59-4.046-1.648-.979-1.05-1.488-2.5-1.488-4.128V8.026c0-1.628.512-3.078 1.491-4.129M5.988 4.92C5.311 5.647 4.9 6.71 4.9 8.026v7.948c0 1.317.41 2.38 1.085 3.106.67.72 1.66 1.17 2.949 1.17h6.633c1.29 0 2.279-.45 2.949-1.17.676-.726 1.084-1.789 1.084-3.106V8.026c0-1.317-.408-2.38-1.084-3.106-.67-.72-1.659-1.17-2.948-1.17H8.934c-1.284 0-2.274.45-2.946 1.17m5.938 2.225a.75.75 0 0 1 .793.09l2.67 2.137a.75.75 0 0 1 0 1.172l-1.938 1.55 1.938 1.55a.75.75 0 0 1 0 1.172l-2.67 2.135a.75.75 0 0 1-1.218-.585v-2.712l-1.453 1.162a.75.75 0 0 1-.937-1.171l1.938-1.551-1.938-1.55a.75.75 0 0 1 .937-1.172l1.453 1.162V7.82a.75.75 0 0 1 .425-.676M13 13.655l.719.575-.72.575zm0-3.122V9.382l.719.576z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBluetoothSquareOutline;
