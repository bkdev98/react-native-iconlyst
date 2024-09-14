import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftDiamondOutline = ({
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
      d="M9.575 4.903 4.903 9.576c-.755.756-1.122 1.592-1.15 2.38-.027.78.274 1.593 1.007 2.326l4.958 4.958c.736.735 1.548 1.036 2.327 1.008.787-.028 1.623-.395 2.38-1.151l4.672-4.672c.756-.756 1.123-1.592 1.151-2.379.028-.779-.273-1.592-1.009-2.328L14.281 4.76c-.736-.735-1.548-1.036-2.327-1.008-.786.028-1.622.395-2.379 1.151m2.326-2.65c1.238-.044 2.443.449 3.44 1.446L20.3 8.658c.998.998 1.491 2.203 1.447 3.441-.044 1.23-.614 2.411-1.59 3.386l-4.672 4.673c-.975.974-2.156 1.545-3.386 1.59-1.239.043-2.444-.45-3.441-1.447l-4.959-4.959c-.995-.995-1.488-2.2-1.444-3.438.043-1.23.612-2.413 1.587-3.388l4.673-4.674c.975-.974 2.156-1.545 3.386-1.59"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.756 8.678a.75.75 0 0 0-1.06-.002L7.89 11.47a.75.75 0 0 0 0 1.063l2.804 2.792a.75.75 0 0 0 1.059-1.063l-2.27-2.26 2.27-2.264a.75.75 0 0 0 .002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.332 12a.75.75 0 0 0-.75-.75H8.421a.75.75 0 0 0 0 1.5h7.161a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftDiamondOutline;
