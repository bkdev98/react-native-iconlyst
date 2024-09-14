import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomSquareOutline = ({
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
      d="M17.475 8.623a.75.75 0 0 1 .383.654v5.449a.75.75 0 0 1-1.142.64l-3.016-1.85a.75.75 0 1 1 .784-1.278l1.874 1.149v-2.77l-1.874 1.148a.75.75 0 1 1-.784-1.279l3.016-1.848a.75.75 0 0 1 .759-.015"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.143 9.529c0-.795.644-1.44 1.438-1.44h4.466a2.795 2.795 0 0 1 2.796 2.796v3.59a1.44 1.44 0 0 1-1.44 1.44H8.939a2.796 2.796 0 0 1-2.795-2.797zm1.5.06v3.529c0 .716.58 1.296 1.295 1.296h4.405v-3.529c0-.715-.58-1.295-1.296-1.295z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZoomSquareOutline;
