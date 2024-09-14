import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDashBold = ({
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
      d="M3 14.73a.75.75 0 0 0 .75-.75v-3.96a.75.75 0 0 0-1.5 0v3.96c0 .413.336.75.75.75M21 9.27a.75.75 0 0 0-.75.75v3.96a.75.75 0 0 0 1.5 0v-3.96a.75.75 0 0 0-.75-.75M10.016 3.75h3.963a.75.75 0 0 0 0-1.5h-3.963a.75.75 0 0 0 0 1.5M13.979 20.25h-3.963a.75.75 0 0 0 0 1.5h3.963a.75.75 0 0 0 0-1.5M7.158 20.234c-1.88-.217-3.116-1.467-3.39-3.429a.75.75 0 1 0-1.486.207c.365 2.615 2.167 4.42 4.704 4.712a.75.75 0 1 0 .172-1.49M21.03 16.166a.75.75 0 0 0-.847.64c-.272 1.963-1.504 3.213-3.379 3.428a.75.75 0 0 0 .172 1.49c2.532-.291 4.33-2.097 4.694-4.711a.753.753 0 0 0-.64-.847M2.922 7.843q.053.007.104.007c.369 0 .69-.272.743-.647.27-1.938 1.538-3.223 3.389-3.438a.75.75 0 0 0 .66-.831.757.757 0 0 0-.832-.66C4.45 2.57 2.649 4.378 2.282 6.997c-.056.41.23.789.64.847M16.805 3.765c1.874.217 3.105 1.47 3.379 3.438a.75.75 0 0 0 .847.64.75.75 0 0 0 .639-.847c-.365-2.62-2.163-4.428-4.693-4.721a.75.75 0 1 0-.172 1.49M15.257 11.208a3.953 3.953 0 0 0-3.95-3.947 3.953 3.953 0 0 0-3.95 3.946 3.957 3.957 0 0 0 3.95 3.955 3.957 3.957 0 0 0 3.95-3.955M16.444 15.458l-.91-.907a.75.75 0 1 0-1.06 1.062l.91.907a.75.75 0 0 0 1.06-.001.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchDashBold;
