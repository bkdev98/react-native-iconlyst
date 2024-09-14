import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinLight = ({
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
      d="M6.166 9.221a6.222 6.222 0 0 1 12.442 0M11.917 17.255h1.248c.89 0 1.61-.64 1.61-1.53 0-.74-.501-1.332-1.218-1.513-1.028-.258-2.053-.46-3.125-.434-1.7.041-2.888.988-4.235 1.89"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.918 17.283c.63-.092 1.273.001 1.91-.014 1.478-.036 2.636-1.284 3.76-2.131a1.44 1.44 0 0 1 1.888.135 1.453 1.453 0 0 1 0 2.05c-1.214 1.219-2.288 2.35-3.933 2.99-2.286.89-4.406.458-6.72 0-.895-.176-1.72-.187-2.626-.187M5.037 21c.715 0 1.16-.504 1.16-1.218v-4.177c0-.714-.445-1.218-1.159-1.218M12.73 8.662h-1.496v2.14h1.542a1.07 1.07 0 0 0 1.065-1.175c-.054-.556-.552-.965-1.111-.965M12.73 6.521h-1.496v2.14h1.542a1.07 1.07 0 0 0 1.065-1.175c-.054-.556-.552-.965-1.111-.965M12.35 11.434v-.631M12.35 6.52v-.631"
    />
  </Svg>
);
export default IconlystBitcoinLight;
