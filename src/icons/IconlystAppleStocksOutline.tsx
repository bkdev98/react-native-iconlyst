import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleStocksOutline = ({
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
      d="M21.538 8.45a.75.75 0 0 1-.015 1.06l-3.604 3.5a.75.75 0 0 1-1.116-.08l-1.856-2.41-3.1 5.63a.75.75 0 0 1-1.346-.067l-1.343-3.13-.732 1.709a.75.75 0 0 1-1.332.09L6.09 13.081l-2.655 1.896a.75.75 0 1 1-.872-1.22l3.316-2.37a.75.75 0 0 1 1.079.225l.666 1.11.844-1.967a.75.75 0 0 1 1.378 0l1.427 3.326 2.911-5.287a.75.75 0 0 1 1.251-.096l2.041 2.65 3-2.913a.75.75 0 0 1 1.061.015M14.842 2.25a.75.75 0 0 1 .75.75v2.842a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.842 12.672a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-7.58a.75.75 0 0 1 .75-.75M14.842 8.96a.197.197 0 1 0 0 .396.197.197 0 0 0 0-.395m-1.697.198a1.697 1.697 0 1 1 3.394 0 1.697 1.697 0 0 1-3.395 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAppleStocksOutline;
