import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.417 4.078h3.178c.23 0 .417.186.417.417v3.143c0 .23.187.417.417.417h3.179c.23 0 .417.187.417.417v3.277c0 .23.186.417.417.417h3.178c.23 0 .417.186.417.417v3.077c0 .23.187.417.417.417h3.129c.23 0 .417.187.417.417v3.011c0 .23-.187.417-.417.417H4.417A.417.417 0 0 1 4 19.505V4.495c0-.23.187-.417.417-.417"
    />
  </Svg>
);
export default IconlystStairsLight;
