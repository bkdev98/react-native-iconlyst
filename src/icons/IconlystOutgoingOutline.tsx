import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOutgoingOutline = ({
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
      d="M3.737 3.898C4.721 2.84 6.124 2.25 7.784 2.25h8.434c1.66 0 3.062.59 4.045 1.648.979 1.05 1.487 2.501 1.487 4.128v7.948c0 1.628-.511 3.078-1.49 4.129-.985 1.056-2.387 1.647-4.042 1.647H7.783c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.627.509-3.078 1.487-4.128M4.835 4.92c-.676.726-1.085 1.789-1.085 3.106v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.435c1.284 0 2.273-.45 2.945-1.17.677-.727 1.087-1.79 1.087-3.106V8.026c0-1.317-.409-2.38-1.084-3.106-.67-.72-1.66-1.17-2.948-1.17H7.784c-1.29 0-2.278.45-2.949 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.058 5.999a.75.75 0 0 1 1.06 0l4.004 4.003c.707.707 1.068 1.574 1.036 2.475-.032.892-.446 1.735-1.13 2.42l-3.107 3.106a.75.75 0 0 1-1.06-1.06l3.106-3.107c.466-.466.676-.964.692-1.413.015-.44-.152-.915-.598-1.36L9.058 7.059a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.34 7.277h2.438a.75.75 0 1 0 0-1.5H9.59a.75.75 0 0 0-.75.75v3.188a.75.75 0 0 0 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOutgoingOutline;
