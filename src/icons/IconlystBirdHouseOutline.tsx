import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBirdHouseOutline = ({
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
      d="M14.673 21.04h-5.31c-1.59 0-2.93-1.14-3.2-2.71l-2.38-8.27c-.11-.4.12-.81.51-.93.4-.12.81.12.93.51l2.4 8.35c.16.92.88 1.54 1.74 1.54h5.31c.85 0 1.58-.61 1.72-1.45l2.42-8.43c.11-.4.53-.63.93-.51.4.11.63.53.51.93l-2.4 8.35c-.25 1.48-1.59 2.62-3.18 2.62"
    />
    <Path
      fill={props.color}
      d="M12.013 13.98a3.06 3.06 0 1 1 0-6.12 3.06 3.06 0 0 1 0 6.12m0-4.62c-.86 0-1.56.7-1.56 1.56s.7 1.56 1.56 1.56 1.56-.7 1.56-1.56-.7-1.56-1.56-1.56M12.013 17.54a.95.95 0 1 1 .01-1.9.95.95 0 1 1 0 1.9z"
    />
  </Svg>
);
export default IconlystBirdHouseOutline;
