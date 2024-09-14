import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleLight = ({
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
      d="M8.334 9.59a2.95 2.95 0 0 0-1.627 2.22M11.999 7.204c0-1.868-.794-3.744-3.167-4.204"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.587 6.902c-1.187-.32-5.666-.85-6.043 5.24-.047 5.78 3.666 8.646 4.588 8.758 1.08.22 2.053-.072 2.822-.302.412-.123.766-.23 1.046-.23.276 0 .626.111 1.033.24.776.244 1.76.555 2.836.292.65-.071 2.726-1.553 3.849-4.49a3.461 3.461 0 0 1 .25-6.774c-1.277-3.414-4.563-3.001-5.555-2.734a9.1 9.1 0 0 1-4.826 0"
    />
  </Svg>
);
export default IconlystAppleLight;
