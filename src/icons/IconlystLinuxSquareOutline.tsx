import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinuxSquareOutline = ({
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
      d="M10.65 10.938a.75.75 0 0 1 .75.75v1.69a.75.75 0 0 1-1.5 0v-1.69a.75.75 0 0 1 .75-.75M13.35 10.938a.75.75 0 0 1 .75.75v1.69a.75.75 0 0 1-1.5 0v-1.69a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.3 12.138a5.7 5.7 0 0 1 11.4 0v3.15a.75.75 0 0 1-1.5 0v-3.15a4.2 4.2 0 1 0-8.4 0v3.15a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.312 12.447c.43-.216.948-.216 1.377 0l1.618.814c.422.212.708.606.757 1.064a1.32 1.32 0 0 1-.54 1.2l-1.618 1.207a1.53 1.53 0 0 1-1.81 0l-1.618-1.206a1.32 1.32 0 0 1-.54-1.201c.049-.458.334-.852.757-1.064zm.674 1.34-1.391.7 1.393 1.039.013.001.013-.001 1.393-1.039-1.392-.7h-.003a.1.1 0 0 0-.023 0zm.03 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLinuxSquareOutline;
