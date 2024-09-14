import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTidalSquareOutline = ({
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
      d="M11.066 12.372a1.267 1.267 0 0 1 1.867 0l1.194 1.302a1.267 1.267 0 0 1 0 1.712l-1.194 1.302a1.267 1.267 0 0 1-1.867 0l-1.194-1.302a1.267 1.267 0 0 1 0-1.712zm.056 2.158.878.957.877-.957-.877-.957z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.066 8.239a1.267 1.267 0 0 1 1.867 0l1.194 1.302a1.267 1.267 0 0 1 0 1.712l-1.194 1.303a1.267 1.267 0 0 1-1.867 0l-1.194-1.303a1.267 1.267 0 0 1 0-1.712zm.056 2.158.878.957.877-.957L12 9.44z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.856 8.239a1.267 1.267 0 0 1 1.867 0l1.194 1.302a1.267 1.267 0 0 1 0 1.712l-1.194 1.303a1.267 1.267 0 0 1-1.867 0l-1.194-1.303a1.267 1.267 0 0 1 0-1.712zm.933 1.201-.877.957.877.957.878-.957zM7.277 8.239a1.267 1.267 0 0 1 1.868 0l1.193 1.302a1.267 1.267 0 0 1 0 1.712l-1.193 1.302a1.267 1.267 0 0 1-1.868 0l-1.194-1.302a1.267 1.267 0 0 1 0-1.712zM8.21 9.44l-.878.957.878.957.877-.957z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTidalSquareOutline;
