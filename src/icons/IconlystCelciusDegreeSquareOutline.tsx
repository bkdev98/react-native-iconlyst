import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelciusDegreeSquareOutline = ({
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
      d="M15.61 11.013a2.483 2.483 0 1 0 0 3.511.75.75 0 0 1 1.061 1.061 3.983 3.983 0 1 1 0-5.633.75.75 0 1 1-1.06 1.06M7.96 8.507a.946.946 0 1 1 1.892 0 .946.946 0 0 1-1.891 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.295 3.897C5.279 2.841 6.68 2.25 8.337 2.25h8.435c1.659 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.488 4.128-.984 1.057-2.387 1.648-4.046 1.648H8.337c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.486-2.501-1.486-4.128V8.026c0-1.628.51-3.078 1.49-4.129M5.392 4.92c-.677.727-1.087 1.79-1.087 3.106v7.948c0 1.317.408 2.38 1.084 3.106.67.72 1.66 1.17 2.948 1.17h8.434c1.289 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.41-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H8.337c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCelciusDegreeSquareOutline;
