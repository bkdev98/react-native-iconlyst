import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdatePhoneBulk = ({
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
      d="M14.292 11.184a.2.2 0 0 0-.149.009 2.5 2.5 0 0 1-.993.212 2.5 2.5 0 0 1-2.5-2.5v-1.7c0-.455.125-.88.338-1.247a.22.22 0 0 0 0-.22 2.49 2.49 0 0 1-.003-2.484c.081-.136-.008-.309-.167-.309H8.7c-2.26 0-4.1 1.84-4.1 4.1v10.8c0 2.26 1.84 4.1 4.1 4.1h5.5c2.26 0 4.1-1.84 4.1-4.1v-6.757c0-.152-.163-.25-.3-.185-.69.323-1.451.502-2.25.502a4.9 4.9 0 0 1-1.458-.221"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.5 17.645c0 .54.42.95.95.95.45 0 .95-.4.95-.95 0-.54-.5-.95-.95-.95s-.95.41-.95.95"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.65 2.055a.75.75 0 0 0-.75.75v.113a4.04 4.04 0 0 0-2.25-.663c-1.32 0-2.5.705-3.156 1.886a.75.75 0 1 0 1.312.728c.393-.708 1.065-1.114 1.844-1.114.345 0 .643.066.906.16a.75.75 0 0 0 .294 1.44h1.8a.75.75 0 0 0 .75-.75v-1.8a.75.75 0 0 0-.75-.75M18.614 6.75a.75.75 0 0 0-1.02.29c-.393.708-1.065 1.114-1.844 1.114-.293 0-.563-.08-.803-.199h.003a.75.75 0 0 0 0-1.5h-1.8a.75.75 0 0 0-.75.75v1.7c0 .413.336.75.75.75a.74.74 0 0 0 .718-.595c.504.332 1.137.594 1.882.594 1.32 0 2.5-.705 3.156-1.885a.75.75 0 0 0-.292-1.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpdatePhoneBulk;
