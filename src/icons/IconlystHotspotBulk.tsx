import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotspotBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M16.512 7.739a6.3 6.3 0 0 0-4.469-1.885 6.27 6.27 0 0 0-4.466 1.882 6.19 6.19 0 0 0-1.807 4.378c0 1.7.668 3.294 1.882 4.485a.75.75 0 1 0 1.05-1.07 4.75 4.75 0 0 1-1.432-3.415c0-1.25.488-2.43 1.378-3.328a4.76 4.76 0 0 1 3.395-1.432c1.265 0 2.504.523 3.398 1.435a4.73 4.73 0 0 1 1.366 3.325 4.7 4.7 0 0 1-1.43 3.402.75.75 0 1 0 1.045 1.076 6.2 6.2 0 0 0 1.885-4.478c0-1.64-.637-3.194-1.795-4.375" />
      <Path d="M18.979 5.327a9.67 9.67 0 0 0-6.936-2.903 9.67 9.67 0 0 0-6.936 2.903 9.7 9.7 0 0 0-2.812 6.847 9.65 9.65 0 0 0 2.902 6.935.746.746 0 0 0 1.06-.01.75.75 0 0 0-.01-1.06 8.15 8.15 0 0 1-2.452-5.865c0-2.18.845-4.238 2.379-5.793a8.2 8.2 0 0 1 5.869-2.457c2.222 0 4.306.873 5.869 2.457a8.2 8.2 0 0 1 2.379 5.793 8.2 8.2 0 0 1-2.455 5.867.75.75 0 0 0 1.055 1.066 9.68 9.68 0 0 0 2.9-6.933c0-2.578-1-5.01-2.812-6.847" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.038 9.73a2.445 2.445 0 0 0-2.441 2.444 2.445 2.445 0 0 0 2.44 2.442 2.445 2.445 0 0 0 2.442-2.442 2.445 2.445 0 0 0-2.441-2.444M12.04 16.245a.75.75 0 0 0-.75.75v3.83a.75.75 0 1 0 1.5 0v-3.83a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHotspotBulk;
