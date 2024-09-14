import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOperaSquareOutline = ({
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
      d="M13.428 8.219c-1.548 0-3.033 1.574-3.033 3.83 0 2.255 1.485 3.83 3.033 3.83 1.55 0 3.035-1.575 3.035-3.83s-1.485-3.83-3.035-3.83m-4.533 3.83c0-2.804 1.902-5.33 4.533-5.33 2.633 0 4.535 2.526 4.535 5.33 0 2.803-1.902 5.33-4.535 5.33-2.631 0-4.533-2.527-4.533-5.33"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 7.54a4.463 4.463 0 1 0 0 8.926 4.463 4.463 0 0 0 0-8.927m-5.963 4.462a5.963 5.963 0 1 1 11.927 0 5.963 5.963 0 0 1-11.927 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.092 8.895a.75.75 0 0 1 1.047.172c.606.844.966 1.88.966 2.983a5.12 5.12 0 0 1-.966 2.983.75.75 0 0 1-1.22-.873 3.62 3.62 0 0 0 .686-2.11c0-.773-.252-1.506-.685-2.109a.75.75 0 0 1 .172-1.046"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOperaSquareOutline;
