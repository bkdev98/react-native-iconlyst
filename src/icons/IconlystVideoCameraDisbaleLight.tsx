import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCameraDisbaleLight = ({
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
      d="m17.575 10.038 3.249-2.658a1.231 1.231 0 0 1 2.01.953l-.011 7.249a1.231 1.231 0 0 1-2.012.95l-2.613-2.142a1.68 1.68 0 0 1-.615-1.299V8.904a3.857 3.857 0 0 0-3.857-3.857H9.494M4.984 5.902c-.789.681-1.222 1.737-1.222 3v6.105c0 2.26 1.41 3.857 3.669 3.857h6.48c1.017 0 1.865-.325 2.486-.888M18.657 20.368 2.834 3.628"
    />
  </Svg>
);
export default IconlystVideoCameraDisbaleLight;
