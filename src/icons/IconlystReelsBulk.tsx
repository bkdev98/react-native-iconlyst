import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReelsBulk = ({
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
      d="M21.05 7.78v8.45c0 3.15-2.03 5.27-5.04 5.27H8c-3.02 0-5.05-2.12-5.05-5.27V7.78c0-.36.03-.71.08-1.05.4-2.54 2.26-4.2 4.89-4.23h8.16c2.63.03 4.49 1.68 4.89 4.23.05.34.08.69.08 1.05"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.92 2.5v4.23H3.03c-.05.34-.08.69-.08 1.05v.45h18.1v-.45c0-.36-.03-.71-.08-1.05h-4.89V2.5h-1.5v4.23H9.42V2.5zM13.625 14.586a8 8 0 0 1-2.4 1.51c-.2.08-.37.08-.47.02-.12-.07-.16-.24-.17-.32a16.3 16.3 0 0 1-.01-3.35c.03-.16.09-.27.18-.32.06-.03.12-.05.19-.05q.135 0 .27.06c.91.37 1.72.88 2.42 1.51.11.11.24.27.24.47.01.2-.13.37-.25.47m1.01-2.05a9.7 9.7 0 0 0-2.84-1.79c-.61-.25-1.26-.22-1.79.08-.5.29-.83.8-.91 1.44-.14 1.18-.14 2.42 0 3.7.08.64.4 1.15.9 1.45.28.16.6.25.93.25.28 0 .57-.06.86-.18a9.5 9.5 0 0 0 2.85-1.79c.47-.43.74-.98.74-1.55v-.03c0-.59-.26-1.15-.74-1.58"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReelsBulk;
