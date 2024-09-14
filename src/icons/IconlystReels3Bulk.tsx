import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReels3Bulk = ({
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
      d="M21.16 7.46v9c0 3.01-1.93 5.04-4.81 5.04h-8.7c-2.88 0-4.81-2.03-4.81-5.04v-9c.03-2.15 1.04-3.79 2.68-4.52.44-.2.92-.34 1.44-.4.22-.03.45-.04.69-.04h8.78c2.81.04 4.7 2.01 4.73 4.96"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.77 14.73a8 8 0 0 1-2.4 1.51c-.2.08-.37.08-.47.02-.12-.07-.16-.24-.17-.32a16.3 16.3 0 0 1-.01-3.35c.03-.16.09-.27.18-.32.06-.03.12-.05.19-.05q.135 0 .27.06c.91.37 1.72.88 2.42 1.51.11.11.24.27.24.47.01.2-.13.37-.25.47m1.01-2.05a9.7 9.7 0 0 0-2.84-1.79c-.61-.25-1.26-.22-1.79.08-.5.29-.83.8-.91 1.44-.14 1.18-.14 2.42 0 3.7.08.64.4 1.15.9 1.45.28.16.6.25.93.25.28 0 .57-.06.86-.18a9.5 9.5 0 0 0 2.85-1.79c.47-.43.74-.98.74-1.55v-.03c0-.59-.26-1.15-.74-1.58M21.16 7.46v1.5H2.84v-1.5h3.9L5.52 2.94c.44-.2.92-.34 1.44-.4L8.3 7.46h3.19l-1.35-4.84c-.01-.04-.02-.08-.02-.12h1.54l1.39 4.96h3.2L14.9 2.62a.5.5 0 0 1-.02-.12h1.55l1.38 4.96z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReels3Bulk;
