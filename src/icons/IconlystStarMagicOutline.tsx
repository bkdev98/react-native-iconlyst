import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarMagicOutline = ({
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
      d="M12.836 21.871a1.94 1.94 0 0 1-1.615-.862l-2.177-3.343a.42.42 0 0 0-.349-.193l-4.012-.056a1.934 1.934 0 0 1-1.459-3.163l2.525-3.14a.45.45 0 0 0 .084-.412l-1.127-3.83a1.962 1.962 0 0 1 2.538-2.385h.011l3.741 1.391a.46.46 0 0 0 .415-.054l3.315-2.307a1.933 1.933 0 0 1 3.041 1.684l-.219 4a.42.42 0 0 0 .166.364l3.176 2.4a1.95 1.95 0 0 1-.678 3.428l-3.868 1.087a.47.47 0 0 0-.315.294l-1.348 3.791a1.95 1.95 0 0 1-1.845 1.306m-6.253-16a.46.46 0 0 0-.443.586l1.124 3.82a1.95 1.95 0 0 1-.356 1.777L4.38 15.201a.434.434 0 0 0 .327.714l4.008.056a1.92 1.92 0 0 1 1.587.874l2.174 3.333a.45.45 0 0 0 .794-.112l1.351-3.8a1.97 1.97 0 0 1 1.323-1.235l3.873-1.082a.451.451 0 0 0 .166-.793l-3.167-2.394a1.92 1.92 0 0 1-.76-1.647l.218-4a.431.431 0 0 0-.684-.375l-3.325 2.319a1.95 1.95 0 0 1-1.793.23L6.736 5.901a.5.5 0 0 0-.153-.026zM20.964 22.666a.75.75 0 0 1-.55-.238l-2.533-2.718a.75.75 0 1 1 1.1-1.023l2.535 2.717a.75.75 0 0 1-.548 1.262z"
    />
  </Svg>
);
export default IconlystStarMagicOutline;
