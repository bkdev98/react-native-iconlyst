import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSquareOutline = ({
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
      d="M13.094 9.281a.75.75 0 0 1 .75-.75h1.772a2.11 2.11 0 1 1 0 4.219h-1.772a.75.75 0 0 1-.75-.75zm1.5.75v1.219h1.022a.61.61 0 1 0 0-1.219z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.094 12a.75.75 0 0 1 .75-.75h1.772a2.11 2.11 0 1 1 0 4.219h-1.772a.75.75 0 0 1-.75-.75zm1.5.75v1.219h1.022a.61.61 0 1 0 0-1.219zM6.777 9.288a.75.75 0 0 1 .75-.75h1.107a3.447 3.447 0 0 1 0 6.895H7.527a.75.75 0 0 1-.75-.75zm1.5.75v3.895h.357a1.948 1.948 0 0 0 0-3.895z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseSquareOutline;
