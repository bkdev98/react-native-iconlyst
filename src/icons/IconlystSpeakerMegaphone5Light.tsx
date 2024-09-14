import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpeakerMegaphone5Light = ({
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
      d="M6.473 16.157c1.9-.49 4.91-1.082 8.506-1.159 1.51-.033 2.509-1.575 1.883-2.95L14.201 6.2c-.958-2.106-2.777-2.366-3.795-1.248a38 38 0 0 1-6.467 5.653c-1.045.716-1.158 1.967-.633 3.12l.391.862c.526 1.157 1.545 1.888 2.776 1.571"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.289 15.253 1.34 2.944a1.71 1.71 0 0 1-3.111 1.415l-1.715-3.77M5.514 9.487l1.327 2.918M20.403 10.827c.718-1.36.82-3.026.134-4.534a5.14 5.14 0 0 0-3.618-2.904M18.178 9.732a2.89 2.89 0 0 0-1.676-3.798"
    />
  </Svg>
);
export default IconlystSpeakerMegaphone5Light;
