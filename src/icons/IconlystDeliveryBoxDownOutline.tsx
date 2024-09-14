import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxDownOutline = ({
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
      d="M3.987 3.898C4.971 2.84 6.374 2.25 8.033 2.25h8.435c1.66 0 3.062.59 4.045 1.648C21.492 4.948 22 6.399 22 8.026v7.948c0 1.628-.512 3.078-1.49 4.129-.985 1.056-2.387 1.647-4.042 1.647H8.033c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.5-1.487-4.128V8.026c0-1.627.509-3.078 1.487-4.128M5.085 4.92C4.409 5.646 4 6.709 4 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.66 1.17 2.948 1.17h8.435c1.283 0 2.272-.45 2.944-1.17.678-.727 1.088-1.79 1.088-3.106V8.026c0-1.317-.409-2.38-1.084-3.106-.67-.72-1.66-1.17-2.948-1.17H8.033c-1.289 0-2.278.45-2.948 1.17m4.197 1.613a.75.75 0 0 1 .75.75v4.375l.383-.385a.75.75 0 1 1 1.063 1.059l-1.664 1.67a.75.75 0 0 1-1.08-.017l-1.648-1.653a.75.75 0 1 1 1.062-1.06l.384.386V7.283a.75.75 0 0 1 .75-.75m5.938 0a.75.75 0 0 1 .75.75v4.375l.384-.385a.75.75 0 0 1 1.063 1.059l-1.664 1.67a.75.75 0 0 1-1.08-.017l-1.649-1.653a.75.75 0 0 1 1.063-1.06l.383.386V7.283a.75.75 0 0 1 .75-.75M6.962 16.717a.75.75 0 0 1 .75-.75h9.077a.75.75 0 0 1 0 1.5H7.712a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxDownOutline;
