import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePremiereSquareOutline = ({
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
      d="M8.089 9.321a5.2 5.2 0 0 1 1.197-.016c.436.051.78.174 1.003.363.193.163.37.435.37.981s-.177.828-.377 1c-.228.198-.576.328-1.011.388a5.2 5.2 0 0 1-1.182.01zm0 4.232c.392.031.884.04 1.388-.03.582-.08 1.252-.277 1.787-.74.564-.488.895-1.201.895-2.134s-.332-1.645-.902-2.127c-.54-.455-1.213-.638-1.795-.707a6.7 6.7 0 0 0-1.58.02 8 8 0 0 0-.702.121l-.013.003-.004.001h-.002l.178.73-.179-.729a.75.75 0 0 0-.571.728v6.784000000000001a.75.75 0 0 0 1.5 0zM14.502 9.723a.75.75 0 0 1 .75.75v4.998a.75.75 0 0 1-1.5 0v-4.998a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.752 13.634c0-1.996 1.306-3.841 3.347-3.841a.75.75 0 0 1 0 1.5c-.96 0-1.847.896-1.847 2.34a.75.75 0 0 1-1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobePremiereSquareOutline;
