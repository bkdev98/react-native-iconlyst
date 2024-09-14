import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotification3Bulksharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M18.94 9.039v4.37l1.61 1.64v3.407H3.95V15.05l1.61-1.64v-4.37c0-3.69 3-6.69 6.69-6.69.69 0 1.35.1 1.97.3-.37.6-.57 1.3-.57 2.05a4.03 4.03 0 0 0 4.03 4.03c.43 0 .85-.07 1.24-.19.01.16.02.33.02.5"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.64 7.039c-.3.12-.62.19-.96.19-1.39 0-2.53-1.13-2.53-2.53 0-.54.17-1.03.45-1.44.46-.65 1.22-1.08 2.08-1.08 1.4 0 2.53 1.13 2.53 2.52 0 1.06-.65 1.96-1.57 2.34M16.14 18.459h-1.5a2.41 2.41 0 0 1-2.39 2.14c-1.24 0-2.25-.94-2.39-2.14h-1.5c.15 2.03 1.82 3.64 3.89 3.64s3.75-1.61 3.89-3.64"
    />
  </Svg>
);
export default IconlystNotification3Bulksharp;
