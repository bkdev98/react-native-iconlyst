import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVirusBulk = ({
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
      fillRule="evenodd"
      d="M17.05 12.602v2.64a4.462 4.462 0 0 1-4.3 4.46c-.06.01-.11.01-.17.01h-1.16c-.06 0-.11 0-.17-.01a4.48 4.48 0 0 1-4.1-3.13c-.13-.42-.2-.87-.2-1.33v-2.64c0-.26.02-.52.07-.77.07-.38.18-.75.35-1.09.21-.48.51-.91.88-1.27a4.503 4.503 0 0 1 3-1.32h1.5a4.5 4.5 0 0 1 3 1.32c.36.36.67.79.88 1.26.17.34.28.71.35 1.1.05.25.07.51.07.77"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.14 7.433v1.53a4.45 4.45 0 0 0-2.39-.807v11.546c-.06.01-.11.01-.17.01h-1.16c-.06 0-.11 0-.17-.01V8.156a4.45 4.45 0 0 0-2.39.807v-1.53c0-1.74 1.41-3.14 3.14-3.14s3.14 1.4 3.14 3.14M7.37 10.743c.21-.48.51-.91.88-1.27l-1.83-.71c-.74-.29-1.28-.96-1.41-1.75l-.2-1.14c-.07-.41-.45-.7-.86-.61-.41.07-.68.45-.62.86l.2 1.14c.22 1.3 1.12 2.41 2.34 2.89zM6.95 12.603c0-.26.02-.52.07-.77-1.32-.11-2.69-.16-4.3.49a.752.752 0 0 0 .28 1.45c.09 0 .19-.02.28-.06 1.31-.53 2.47-.48 3.67-.39zM7.15 16.573l-.73.28c-.75.3-1.28.95-1.41 1.73l-.2 1.14c-.06.37-.38.63-.73.63-.05 0-.09-.01-.13-.02a.733.733 0 0 1-.61-.86l.19-1.14c.22-1.3 1.09-2.38 2.34-2.88l1.08-.42v.21c0 .46.07.91.2 1.33M20.04 20.343c.41-.07.69-.46.62-.86l-.19-1.16c-.23-1.3-1.1-2.37-2.35-2.87l-1.07-.41v.2c0 .46-.07.9-.2 1.32l.72.28c.75.31 1.29.96 1.43 1.73l.18 1.14c.06.37.38.64.74.64q.03-.001.06-.005zM21.7 13.303c-.12.29-.4.47-.7.47-.09 0-.19-.02-.28-.06-1.31-.53-2.47-.48-3.67-.39v-.72c0-.26-.02-.52-.07-.77 1.32-.11 2.69-.16 4.3.49.39.15.57.59.42.98M20.47 7.263l.19-1.14a.74.74 0 0 0-.61-.86c-.41-.08-.79.2-.86.61l-.2 1.14c-.13.79-.67 1.46-1.41 1.75l-1.83.71c.36.36.67.79.88 1.26l1.5-.58a3.81 3.81 0 0 0 2.34-2.89"
    />
  </Svg>
);
export default IconlystVirusBulk;
