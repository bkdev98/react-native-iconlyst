import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionLeftOutline = ({
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
      d="M12.204 3.752c-.787.028-1.623.395-2.38 1.152L5.152 9.575c-.755.756-1.122 1.593-1.15 2.381-.027.78.274 1.593 1.007 2.325l4.958 4.959c.736.735 1.548 1.036 2.327 1.008.787-.028 1.623-.395 2.38-1.151l4.672-4.673c.756-.755 1.123-1.591 1.151-2.378.028-.779-.273-1.592-1.01-2.328L14.53 4.76c-.736-.736-1.548-1.036-2.326-1.008m-.054-1.5c1.238-.044 2.443.45 3.44 1.447l4.959 4.959c.997.997 1.491 2.203 1.447 3.441-.044 1.23-.614 2.411-1.59 3.386l-4.672 4.672c-.975.976-2.156 1.546-3.386 1.59-1.239.044-2.444-.45-3.441-1.447l-4.959-4.958c-.995-.995-1.488-2.2-1.444-3.439.043-1.23.612-2.412 1.587-3.388l4.673-4.672c.975-.975 2.156-1.546 3.386-1.59"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.858 10.79a.75.75 0 0 1 .75-.75h4.8a2.33 2.33 0 0 1 2.33 2.33v3.02a.75.75 0 0 1-1.5 0v-3.02a.83.83 0 0 0-.83-.83h-4.8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.329 8.076a.75.75 0 0 1-.002 1.06l-1.656 1.65 1.656 1.649a.75.75 0 1 1-1.059 1.063l-2.189-2.18a.75.75 0 0 1 0-1.062l2.19-2.182a.75.75 0 0 1 1.06.002"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDirectionLeftOutline;
