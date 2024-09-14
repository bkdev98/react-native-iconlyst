import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSquareLineOutline = ({
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
      d="M3.737 3.898C4.721 2.84 6.124 2.25 7.783 2.25h8.435c1.66 0 3.062.59 4.045 1.648.979 1.05 1.487 2.501 1.487 4.128v7.948c0 1.628-.512 3.078-1.49 4.129-.985 1.056-2.387 1.647-4.042 1.647H7.783c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.627.509-3.078 1.487-4.128M4.835 4.92c-.676.726-1.085 1.789-1.085 3.106v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.435c1.283 0 2.272-.45 2.944-1.17.678-.727 1.088-1.79 1.088-3.106V8.026c0-1.317-.409-2.38-1.084-3.106-.67-.72-1.66-1.17-2.948-1.17H7.783c-1.289 0-2.278.45-2.948 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.525 16.7a.75.75 0 0 1 .75-.75h5.451a.75.75 0 0 1 0 1.5h-5.45a.75.75 0 0 1-.75-.75M8.432 10.342a.75.75 0 0 1 1.06.002L12 12.86l2.509-2.517a.75.75 0 1 1 1.062 1.058l-3.04 3.05a.75.75 0 0 1-1.063 0l-3.037-3.05a.75.75 0 0 1 .002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 6.55a.75.75 0 0 1 .75.75v6.624a.75.75 0 0 1-1.5 0V7.3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownSquareLineOutline;
