import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSymbolsBold = ({
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
      d="M21.428 8.48c-.283-1.842-1.37-3.38-2.986-4.219-1.578-.82-3.41-.832-5.024-.032a5.9 5.9 0 0 0-1.416.98 5.9 5.9 0 0 0-2.069-1.254c-1.632-.579-3.313-.406-4.73.486-1.479.932-2.476 2.57-2.669 4.386-.439 4.437 3.47 7.423 6.61 9.821.587.45 1.156.883 1.672 1.307a1.86 1.86 0 0 0 1.185.425c.232 0 .462-.043.676-.132.27-.102.472-.269.703-.46.474-.39.988-.788 1.52-1.199 3.202-2.474 7.185-5.553 6.527-10.109"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartSymbolsBold;
