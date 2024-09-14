import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewNotification2Broken = ({
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
      d="M12.996 3.693h-4.93C5.247 3.693 3.5 5.69 3.5 8.508v7.564c0 2.819 1.713 4.807 4.566 4.807M20.683 11.357v4.715c0 2.82-1.749 4.807-4.568 4.807H11.75"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.145 3.121a2.356 2.356 0 1 1 0 4.711 2.356 2.356 0 0 1 0-4.71"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.086 9.116a3.416 3.416 0 1 1-2.836 1.511"
    />
  </Svg>
);
export default IconlystNewNotification2Broken;
