import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTeslaSquareOutline = ({
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
      d="M6.968 9.688q.093.189.194.336c.108.16.239.312.423.48l2.5-.54a.75.75 0 0 1 .882.541L12 14.395l1.033-3.89a.75.75 0 0 1 .882-.54l2.5.534c.184-.18.316-.338.426-.5q.096-.142.184-.314c-3.037-1.317-6.979-1.333-10.057.003M5.656 8.651c3.797-1.96 8.953-1.932 12.689 0a.75.75 0 0 1 .357.932c-.183.482-.366.882-.619 1.256-.253.375-.557.693-.947 1.037a.75.75 0 0 1-.653.171L14.3 11.58l-1.575 5.93a.75.75 0 0 1-1.45 0l-1.574-5.929-2.16.466a.75.75 0 0 1-.625-.145c-.414-.33-.732-.647-.995-1.036-.26-.381-.443-.798-.624-1.288a.75.75 0 0 1 .36-.927"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTeslaSquareOutline;
