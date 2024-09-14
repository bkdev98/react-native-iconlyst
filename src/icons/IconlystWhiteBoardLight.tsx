import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteBoardLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.923 4.617h-9.28a3.76 3.76 0 0 0-3.76 3.76v5.094a3.76 3.76 0 0 0 3.76 3.76h9.28a3.76 3.76 0 0 0 3.76-3.76V8.378a3.76 3.76 0 0 0-3.76-3.76"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.283 3v1.629M15.956 20.998l-3.672-3.74-3.673 3.74"
    />
  </Svg>
);
export default IconlystWhiteBoardLight;
