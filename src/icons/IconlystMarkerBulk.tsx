import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMarkerBulk = ({
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
      fillRule="evenodd"
      d="m17.584 4.215-3.1-1.31c-.9-.39-1.97-.04-2.47.78l-5.37 8.36-.35.54c-.08.12-.1.26-.07.39s.12.24.23.31c.03.02.29.19.58.53.57.66 1.23 1.99.48 4.2v.01l-.91 2.57c-.05.15-.03.32.06.45.1.14.25.21.41.21h3.4c.21 0 .4-.12.47-.32l.48-1.27c1.07-2.06 2.41-2.55 3.21-2.62.43-.05.71.02.74.03.27.07.54-.09.61-.36l.18-.66 2.56-9.51c.25-.94-.24-1.95-1.14-2.33"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m6.292 12.585.35-.55 9.52 4.02-.18.66c-.07.27-.34.42-.61.35-.03-.01-.3-.07-.7-.02-.81.06-2.16.52-3.25 2.61l-.48 1.28c-.07.19-.26.32-.46.32h-3.41c-.16 0-.31-.08-.41-.21a.53.53 0 0 1-.06-.46l.91-2.57c.76-2.24.08-3.57-.48-4.22-.29-.33-.55-.49-.58-.51a.54.54 0 0 1-.23-.32c-.03-.13 0-.27.07-.38"
    />
  </Svg>
);
export default IconlystMarkerBulk;
