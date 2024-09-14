import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard6Outline = ({
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
      d="M4.72 3.897C5.706 2.841 7.108 2.25 8.764 2.25h8.434c1.66 0 3.062.59 4.046 1.648.979 1.05 1.488 2.5 1.488 4.128v7.948c0 1.627-.51 3.078-1.488 4.128-.984 1.057-2.387 1.648-4.047 1.648H8.763c-1.66 0-3.062-.59-4.046-1.648-.978-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.512-3.078 1.49-4.129M5.819 4.92C5.14 5.647 4.73 6.71 4.73 8.026v7.948c0 1.317.41 2.38 1.085 3.106.67.72 1.659 1.17 2.948 1.17h8.433c1.29 0 2.279-.45 2.95-1.17.676-.726 1.084-1.789 1.084-3.106V8.026c0-1.317-.408-2.38-1.084-3.106-.671-.72-1.66-1.17-2.949-1.17H8.763c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.998 10.392c.464-.499 1.115-.763 1.848-.763h6.269c.734 0 1.386.264 1.85.763.459.493.68 1.154.68 1.857v2.958c0 .702-.221 1.364-.68 1.857-.464.499-1.116.763-1.85.763H9.846c-.734 0-1.385-.264-1.85-.763-.459-.493-.68-1.154-.68-1.857v-2.958c0-.704.222-1.365.682-1.857m1.097 1.023c-.158.168-.279.442-.279.834v2.958c0 .393.121.666.278.835.151.162.39.285.752.285h6.269c.363 0 .601-.123.752-.285.157-.169.277-.442.277-.835v-2.958c0-.393-.12-.667-.277-.835-.15-.162-.389-.285-.752-.285H9.846c-.361 0-.6.123-.751.286M7.834 6.924a.75.75 0 0 1 .75-.75h8.794a.75.75 0 0 1 0 1.5H8.584a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard6Outline;
