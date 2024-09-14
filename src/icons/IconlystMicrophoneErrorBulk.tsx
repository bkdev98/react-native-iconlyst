import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneErrorBulk = ({
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
      d="M19.776 10.307c.444.018.75.334.751.749.01 4.144-3.162 7.564-7.207 7.953v2.136a.75.75 0 0 1-1.5 0V19.01a7.9 7.9 0 0 1-4.885-2.311 7.92 7.92 0 0 1-2.322-5.643.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 .748.753 6.43 6.43 0 0 0 1.885 4.582 6.44 6.44 0 0 0 4.57 1.907l.002-.001h.004c3.564-.01 6.461-2.92 6.453-6.488a.75.75 0 0 1 .75-.752"
    />
    <Path
      fill={props.color}
      d="M12.572 15.202h-.004a4.14 4.14 0 0 1-2.944-1.227 4.14 4.14 0 0 1-1.214-2.949V6.804a4.164 4.164 0 0 1 4.159-4.159c.273 0 .535.035.791.09a.47.47 0 0 1 .364.469v5.263a2.5 2.5 0 0 0 2.5 2.5c.263 0 .506.195.476.457-.241 2.082-1.945 3.772-4.128 3.778"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.224 6.7a.75.75 0 0 0 .75-.75V2.855a.75.75 0 0 0-1.5 0V5.95c0 .414.336.75.75.75M15.478 8.35a.75.75 0 0 1 1.5 0c0 .414-.336.774-.75.774s-.75-.311-.75-.725z"
    />
  </Svg>
);
export default IconlystMicrophoneErrorBulk;
