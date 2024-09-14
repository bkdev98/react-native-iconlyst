import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatCodeLight = ({
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
      d="m10.955 20.206-1.421-1.421a2.16 2.16 0 0 0-1.526-.632H6.94A3.94 3.94 0 0 1 3 14.213V7.3a3.94 3.94 0 0 1 3.94-3.94H17.06A3.94 3.94 0 0 1 21 7.3v6.915a3.94 3.94 0 0 1-3.939 3.94h-1.068c-.572 0-1.12.226-1.526.63l-1.422 1.422a1.48 1.48 0 0 1-2.09 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.855 8.887-2.287 2.286 2.287 2.286M15.145 8.887l2.286 2.286-2.286 2.286M12.82 8.887l-1.637 4.572"
    />
  </Svg>
);
export default IconlystChatCodeLight;
