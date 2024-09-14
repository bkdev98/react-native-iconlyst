import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRepeat1Outline = ({
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
      d="M9.518 6.388a.75.75 0 0 1 .75-.75h5.119c1.749 0 3.341.713 4.494 1.865A6.32 6.32 0 0 1 21.749 12a6.32 6.32 0 0 1-1.487 4.08.75.75 0 0 1-1.15-.964A4.82 4.82 0 0 0 20.25 12a4.82 4.82 0 0 0-1.425-3.432l-.003-.003a4.85 4.85 0 0 0-3.434-1.427h-5.12a.75.75 0 0 1-.75-.75M12.237 14.458a.75.75 0 0 1 1.06 0l2.623 2.622a.75.75 0 0 1 0 1.06l-2.622 2.624a.75.75 0 0 1-1.06-1.06l2.091-2.094-2.092-2.091a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3 11.25a.75.75 0 0 1 .75.75c0 1.345.543 2.552 1.426 3.436a4.85 4.85 0 0 0 3.435 1.427h6.778a.75.75 0 0 1 0 1.5H8.61a6.35 6.35 0 0 1-4.495-1.866A6.34 6.34 0 0 1 2.25 12a.75.75 0 0 1 .75-.75M6.41 3.128a.75.75 0 0 1 .356.638V9.01a.75.75 0 1 1-1.5 0V4.979l-1.012.506a.75.75 0 0 1-.671-1.341l2.098-1.05a.75.75 0 0 1 .73.034"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRepeat1Outline;
