import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIncomingOutline = ({
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
      d="M3.898 3.737c1.05-.979 2.501-1.487 4.128-1.487h7.948c1.628 0 3.078.511 4.129 1.49 1.056.985 1.647 2.387 1.647 4.042v8.435c0 1.66-.59 3.062-1.648 4.046-1.05.978-2.5 1.487-4.128 1.487H8.026c-1.627 0-3.078-.509-4.128-1.487-1.057-.985-1.648-2.387-1.648-4.047V7.782c0-1.66.59-3.062 1.648-4.045M4.92 4.835c-.72.67-1.17 1.658-1.17 2.947v8.434c0 1.29.45 2.278 1.17 2.949.726.676 1.789 1.085 3.106 1.085h7.948c1.317 0 2.38-.409 3.106-1.085.72-.67 1.17-1.66 1.17-2.948V7.782c0-1.284-.45-2.273-1.17-2.945-.727-.677-1.79-1.087-3.106-1.087H8.026c-1.317 0-2.38.409-3.106 1.085"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.477 8.841c-.9-.032-1.768.329-2.475 1.036L6 13.88a.75.75 0 0 0 1.06 1.061l4.004-4.003c.445-.446.92-.613 1.36-.598.45.016.947.226 1.413.692l3.106 3.106a.75.75 0 0 0 1.061-1.06l-3.106-3.106c-.685-.685-1.528-1.099-2.42-1.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.527 10.473a.75.75 0 0 0-.75.75v3.188c0 .414.336.75.75.75h3.188a.75.75 0 1 0 0-1.5H7.277v-2.438a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIncomingOutline;
