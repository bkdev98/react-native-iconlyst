import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoPlaylist2Bulk = ({
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
      d="M12.777 3.477h-5.96c-1.99 0-3.61 1.62-3.61 3.61v9.82c0 1.99 1.62 3.61 3.61 3.61h5.96c1.98 0 3.6-1.62 3.6-3.61v-9.82c0-1.99-1.62-3.61-3.6-3.61"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.79 5.797a.75.75 0 0 0-.75.75v10.92a.75.75 0 0 0 1.5 0V6.547a.75.75 0 0 0-.75-.75M21.71 8.177a.75.75 0 0 0-.75.75v6.16a.75.75 0 0 0 1.5 0v-6.16a.75.75 0 0 0-.75-.75M12.477 13.431c-.72.65-1.57 1.18-2.46 1.54-.26.1-.52.16-.77.16-.3 0-.59-.08-.85-.23-.45-.27-.75-.75-.82-1.31-.11-1.12-.11-2.18 0-3.17.08-.58.37-1.05.84-1.31.47-.28 1.06-.31 1.61-.08.94.39 1.76.92 2.45 1.55.43.38.67.89.67 1.41 0 .54-.23 1.04-.67 1.44m-.83-1.43c0-.13-.11-.25-.17-.31-.58-.53-1.24-.94-2.03-1.27a.4.4 0 0 0-.17-.04c-.05 0-.08.01-.11.02-.07.04-.09.13-.1.2-.1.88-.1 1.83 0 2.82.01.08.05.16.09.19.05.02.15.03.3-.03.73-.29 1.43-.73 2.01-1.26.07-.06.18-.18.18-.32"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoPlaylist2Bulk;
