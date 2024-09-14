import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetsHouseOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M21.013 11.84c-.17 0-.34-.06-.48-.17l-7.69-6.31c-.48-.4-1.18-.4-1.67 0l-7.69 6.31c-.32.26-.79.22-1.06-.1a.76.76 0 0 1 .1-1.06l7.69-6.31c1.03-.85 2.54-.85 3.57 0l7.69 6.31a.748.748 0 0 1-.48 1.33z"
    />
    <Path
      fill={props.color}
      d="M15.673 21.04h-7.31c-1.59 0-2.93-1.14-3.2-2.71l-1.4-8.35c-.07-.41.21-.79.62-.86.4-.08.79.21.86.62l1.4 8.35c.14.84.86 1.45 1.72 1.45h7.31c.85 0 1.58-.61 1.72-1.45l1.4-8.35c.07-.41.46-.69.86-.62.41.07.68.46.62.86l-1.4 8.35a3.234 3.234 0 0 1-3.2 2.71"
    />
    <Path
      fill={props.color}
      d="M12.013 10.83a.97.97 0 0 1-.69-1.65c.18-.19.43-.29.69-.29a.97.97 0 0 1 0 1.94M15.203 12.45a.97.97 0 0 1-.69-1.65c.18-.19.43-.29.69-.29a.97.97 0 0 1 0 1.94M8.833 12.45a.97.97 0 0 1-.69-1.65c.18-.18.43-.29.69-.29a.97.97 0 0 1 0 1.94M9.903 17.48c-.31 0-.6-.06-.88-.24-.39-.25-.62-.67-.71-1.25-.12-.75.13-1.54.7-2.21.74-.87 1.9-1.41 3.04-1.41 1.99 0 3.74 1.56 3.75 3.34 0 .65-.18 1.14-.55 1.44-.6.49-1.39.3-2.14.12-.37-.09-.75-.18-1.06-.18-.26 0-.61.09-.94.18-.39.1-.8.21-1.2.21zm2.14-3.61c-.7 0-1.44.35-1.9.88-.16.19-.43.58-.36 1 .03.19.07.24.07.24.1.03.57-.1.86-.18.41-.11.87-.23 1.33-.23.49 0 .98.12 1.41.22.26.06.65.15.83.15 0-.05.02-.12.02-.24 0-.86-.99-1.85-2.26-1.85z"
    />
  </Svg>
);
export default IconlystPetsHouseOutline;
