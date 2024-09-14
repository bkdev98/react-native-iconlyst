import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewNotification2Light = ({
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
      d="M12.496 3.693h-4.93C4.747 3.693 3 5.69 3 8.508v7.564c0 2.819 1.713 4.807 4.566 4.807h8.05c2.818 0 4.567-1.988 4.567-4.807v-4.715"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.645 3.121a2.356 2.356 0 1 1 0 4.711 2.356 2.356 0 0 1 0-4.71M11.586 9.116a3.416 3.416 0 1 1 0 6.833 3.416 3.416 0 0 1 0-6.833"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewNotification2Light;
