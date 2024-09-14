import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiskMusicSquarePauseOutline = ({
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
      d="M15.31 8.611a1.778 1.778 0 1 1 3.556.001 1.778 1.778 0 0 1-3.556 0m1.778-.277a.278.278 0 1 0 0 .556.278.278 0 0 0 0-.556"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.087 8.89a.75.75 0 0 1 .75.75v5.333a.75.75 0 0 1-.22.53l-1.442 1.443a.75.75 0 0 1-1.06-1.06l1.222-1.224V9.641a.75.75 0 0 1 .75-.75M5.635 12.606a4.559 4.559 0 1 1 9.117 0 4.559 4.559 0 0 1-9.117 0m4.559-3.06a3.059 3.059 0 1 0 0 6.119 3.059 3.059 0 0 0 0-6.118"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiskMusicSquarePauseOutline;
