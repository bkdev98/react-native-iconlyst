import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwoWayDirectionOutline = ({
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
      d="M3.987 3.898C4.971 2.84 6.374 2.25 8.034 2.25h8.434c1.66 0 3.062.59 4.045 1.648C21.492 4.948 22 6.399 22 8.026v7.948c0 1.628-.511 3.078-1.49 4.129-.985 1.056-2.387 1.647-4.042 1.647H8.033c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.627.509-3.078 1.487-4.128M5.085 4.92C4.409 5.646 4 6.709 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.435c1.284 0 2.273-.45 2.945-1.17.677-.727 1.087-1.79 1.087-3.106V8.026c0-1.317-.409-2.38-1.084-3.106-.67-.72-1.66-1.17-2.948-1.17H8.034c-1.29 0-2.278.45-2.949 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.315 9.414a.75.75 0 0 1 .75-.75h2.15a3.784 3.784 0 0 1 3.784 3.784v3.716a.75.75 0 0 1-1.5 0v-3.716a2.284 2.284 0 0 0-2.284-2.284h-2.15a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.184 7.302a.75.75 0 0 1 0 1.06L8.126 9.42l1.058 1.057a.75.75 0 1 1-1.061 1.061L6.535 9.95a.75.75 0 0 1 0-1.06l1.588-1.588a.75.75 0 0 1 1.06 0M15.286 10.164a2.284 2.284 0 0 0-2.284 2.284v3.716a.75.75 0 0 1-1.5 0v-3.716a3.784 3.784 0 0 1 3.784-3.784h2.149a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.317 7.302a.75.75 0 0 1 1.061 0l1.588 1.588a.75.75 0 0 1 0 1.06l-1.588 1.588a.75.75 0 0 1-1.06-1.06l1.057-1.058-1.058-1.058a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwoWayDirectionOutline;
