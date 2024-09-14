import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookOutline = ({
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
      d="M10.54 3.781a5.27 5.27 0 0 1 3.71-1.531h2.2c.69 0 1.25.56 1.25 1.25v2.6c0 .69-.56 1.25-1.25 1.25h-2.2a.18.18 0 0 0-.11.045.15.15 0 0 0-.04.105v1.95h2.35c.69 0 1.25.56 1.25 1.25v2.6c0 .69-.56 1.25-1.25 1.25H14.1v5.95c0 .69-.56 1.25-1.25 1.25h-2.6c-.69 0-1.25-.56-1.25-1.25v-5.95H7.55c-.69 0-1.25-.56-1.25-1.25v-2.6c0-.69.56-1.25 1.25-1.25H9V7.5c0-1.396.553-2.73 1.537-3.716zm1.058 1.064A3.76 3.76 0 0 0 10.5 7.5v2.7a.75.75 0 0 1-.75.75H7.8v2.1h1.95a.75.75 0 0 1 .75.75v6.45h2.1V13.8a.75.75 0 0 1 .75-.75h2.85v-2.1h-2.85a.75.75 0 0 1-.75-.75V7.5c0-.444.174-.857.48-1.167l.014-.013c.299-.287.712-.47 1.156-.47h1.95v-2.1h-1.95c-.994 0-1.948.397-2.652 1.095"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFacebookOutline;
