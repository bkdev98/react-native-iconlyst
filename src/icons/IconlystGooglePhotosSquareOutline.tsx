import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePhotosSquareOutline = ({
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
      d="M5.75 11.234a3.5 3.5 0 0 1 7 0v.767a.75.75 0 0 1-.75.75H6.5a.75.75 0 0 1-.75-.75zm3.5-2a2 2 0 0 0-2 2v.017h4v-.017a2 2 0 0 0-2-2"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.47 11.47a.75.75 0 0 1 .53-.22h5.5a.75.75 0 0 1 .75.75v.767a3.5 3.5 0 0 1-7 0V12a.75.75 0 0 1 .22-.53m1.28 1.28v.017a2 2 0 0 0 4 0v-.016z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.732 14.75a3.5 3.5 0 0 1 3.5-3.5H12a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75h-.767a3.5 3.5 0 0 1-3.5-3.5m3.5-2a2 2 0 0 0 0 4h.017v-4z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 6.5a.75.75 0 0 1 .75-.75h.766a3.5 3.5 0 0 1 0 7H12a.75.75 0 0 1-.75-.75zm1.5.75v4h.016a2 2 0 0 0 0-4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGooglePhotosSquareOutline;
