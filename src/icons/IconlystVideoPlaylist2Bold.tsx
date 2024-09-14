import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoPlaylist2Bold = ({
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
      d="M11.477 11.687c.06.06.17.18.17.31 0 .14-.11.26-.18.32-.58.53-1.28.97-2.01 1.26-.15.06-.25.05-.3.03-.04-.03-.08-.11-.09-.19-.1-.99-.1-1.94 0-2.82.01-.07.03-.16.1-.2.03-.01.06-.02.11-.02s.11.01.17.04c.79.33 1.45.74 2.03 1.27"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.477 13.427c-.72.65-1.57 1.18-2.46 1.54-.26.1-.52.16-.77.16-.3 0-.59-.08-.85-.23-.45-.27-.75-.75-.82-1.31-.11-1.12-.11-2.18 0-3.17.08-.58.37-1.05.84-1.31.47-.28 1.06-.31 1.61-.08.94.39 1.76.92 2.45 1.55.43.38.67.89.67 1.41 0 .54-.23 1.04-.67 1.44m.3-9.95h-5.96c-1.99 0-3.61 1.62-3.61 3.61v9.82c0 1.99 1.62 3.61 3.61 3.61h5.96c1.98 0 3.6-1.62 3.6-3.61v-9.82c0-1.99-1.62-3.61-3.6-3.61M18.791 5.792a.75.75 0 0 0-.75.75v10.92a.75.75 0 0 0 1.5 0V6.542a.75.75 0 0 0-.75-.75M21.711 8.172a.75.75 0 0 0-.75.75v6.16a.75.75 0 0 0 1.5 0v-6.16a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoPlaylist2Bold;
