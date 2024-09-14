import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsLeftDownSquarearrowNavigationNavigateDirectionArrowsMovePositionOutline =
  ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
        d="M9.486 6.47a.75.75 0 0 1 0 1.06l-.675.676h4a2.984 2.984 0 0 1 2.984 2.984v4l.675-.675a.75.75 0 1 1 1.06 1.06l-1.955 1.955a.75.75 0 0 1-1.06 0l-1.956-1.955a.75.75 0 1 1 1.06-1.06l.676.674V11.19c0-.82-.665-1.484-1.485-1.484H8.812l.674.674a.75.75 0 0 1-1.06 1.06L6.47 9.487a.75.75 0 0 1 0-1.06L8.426 6.47a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      />
      <Path
        fill={props.color}
        fillRule="evenodd"
        d="M4.92 4.835c-.72.67-1.17 1.66-1.17 2.95v8.433c0 1.289.45 2.277 1.17 2.948.726.675 1.789 1.084 3.106 1.084h7.948c1.317 0 2.38-.41 3.106-1.087.72-.672 1.17-1.661 1.17-2.945V7.783c0-1.289-.45-2.278-1.17-2.948-.726-.676-1.789-1.085-3.106-1.085H8.026c-1.317 0-2.38.409-3.106 1.085M3.898 3.737c1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487 1.057.984 1.648 2.387 1.648 4.046v8.435c0 1.655-.591 3.057-1.647 4.042-1.05.979-2.501 1.49-4.13 1.49H8.027c-1.627 0-3.077-.508-4.128-1.487-1.057-.983-1.648-2.386-1.648-4.045V7.784c0-1.66.59-3.063 1.648-4.047"
        clipRule="evenodd"
      />
    </Svg>
  );
export default IconlystArrowsLeftDownSquarearrowNavigationNavigateDirectionArrowsMovePositionOutline;
