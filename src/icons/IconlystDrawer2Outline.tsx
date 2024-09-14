import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrawer2Outline = ({
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
      d="M4.09 3.897C5.076 2.841 6.478 2.25 8.134 2.25h7.733c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.984 1.057-2.387 1.648-4.047 1.648H8.133c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.486-2.501-1.486-4.128V8.026c0-1.628.51-3.078 1.49-4.129M5.189 4.92c-.677.727-1.087 1.79-1.087 3.106v7.948c0 1.317.408 2.38 1.084 3.106.67.72 1.659 1.17 2.948 1.17h7.732c1.29 0 2.278-.45 2.95-1.17.675-.726 1.084-1.789 1.084-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.133c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.295 7.777a.75.75 0 0 1 .75-.75h3.913a.75.75 0 0 1 0 1.5h-3.913a.75.75 0 0 1-.75-.75m0 8.445a.75.75 0 0 1 .75-.75h3.913a.75.75 0 0 1 0 1.5h-3.913a.75.75 0 0 1-.75-.75M2.715 12a.75.75 0 0 1 .75-.75h17.07a.75.75 0 0 1 0 1.5H3.465a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDrawer2Outline;
