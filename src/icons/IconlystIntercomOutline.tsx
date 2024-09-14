import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntercomOutline = ({
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
      d="M12 6.117a.75.75 0 0 1 .75.75v6.587a.75.75 0 1 1-1.5 0V6.867a.75.75 0 0 1 .75-.75M14.64 6.465a.75.75 0 0 1 .75.75v5.894a.75.75 0 0 1-1.5 0V7.215a.75.75 0 0 1 .75-.75M17.282 7.328a.75.75 0 0 1 .75.75v4.16a.75.75 0 1 1-1.5 0v-4.16a.75.75 0 0 1 .75-.75M9.36 6.465a.75.75 0 0 1 .75.75v5.894a.75.75 0 0 1-1.5 0V7.215a.75.75 0 0 1 .75-.75M6.718 7.328a.75.75 0 0 1 .75.75v4.16a.75.75 0 1 1-1.5 0v-4.16a.75.75 0 0 1 .75-.75M6.1 15.072a.75.75 0 0 1 1.042-.195 8.59 8.59 0 0 0 9.716 0 .75.75 0 1 1 .848 1.238 10.09 10.09 0 0 1-11.412 0 .75.75 0 0 1-.195-1.043"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIntercomOutline;
