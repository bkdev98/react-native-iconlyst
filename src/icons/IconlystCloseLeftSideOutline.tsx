import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseLeftSideOutline = ({
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
      d="M15.708 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M7.25 9.599a.75.75 0 0 1 1.062 0l1.342 1.342 1.342-1.342a.75.75 0 1 1 1.061 1.06l-1.342 1.343 1.342 1.342a.75.75 0 0 1-1.061 1.06l-1.342-1.342-1.342 1.342a.75.75 0 1 1-1.06-1.06l1.341-1.342-1.342-1.343a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseLeftSideOutline;
