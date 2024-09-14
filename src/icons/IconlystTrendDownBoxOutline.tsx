import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrendDownBoxOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.42 4.954c-.72.67-1.17 1.66-1.17 2.949v8.434c0 1.288.45 2.277 1.17 2.947.726.676 1.789 1.085 3.106 1.085h7.948c1.317 0 2.38-.41 3.106-1.088.72-.672 1.17-1.66 1.17-2.944V7.902c0-1.289-.45-2.278-1.17-2.948-.726-.677-1.789-1.085-3.106-1.085H8.526c-1.317 0-2.38.408-3.106 1.085M4.398 3.856c1.05-.979 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.508 4.128 1.487 1.057.984 1.648 2.386 1.648 4.046v8.435c0 1.655-.591 3.057-1.647 4.041-1.05.98-2.501 1.49-4.13 1.49H8.527c-1.627 0-3.077-.508-4.128-1.486-1.057-.984-1.648-2.386-1.648-4.046V7.904c0-1.66.59-3.063 1.648-4.047"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.618 12.27c.4.107.637.52.529.92l-.843 3.124a.75.75 0 0 1-.92.53L13.26 16a.75.75 0 0 1 .39-1.449l2.401.648.648-2.401a.75.75 0 0 1 .919-.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.204 7.469a.75.75 0 0 1 1.024.276l1.71 2.973 2.656-1.528a.75.75 0 0 1 1.024.276l3.614 6.282a.75.75 0 0 1-1.3.748l-3.24-5.632-2.656 1.528a.75.75 0 0 1-1.024-.276L6.928 8.493a.75.75 0 0 1 .276-1.024"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrendDownBoxOutline;
