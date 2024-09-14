import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBadgeOutline = ({
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
      d="M12.394 21.734a2.2 2.2 0 0 1-1.557-.642l-1.4-1.4a1.36 1.36 0 0 0-.968-.4H7.422a4.625 4.625 0 0 1-4.62-4.62V7.878a4.625 4.625 0 0 1 4.62-4.62h6.415a.75.75 0 0 1 0 1.5H7.422a3.123 3.123 0 0 0-3.12 3.12v6.794a3.123 3.123 0 0 0 3.12 3.12h1.05a2.84 2.84 0 0 1 2.029.842l1.4 1.4a.7.7 0 0 0 .995 0l1.4-1.4a2.85 2.85 0 0 1 2.03-.841h1.05a3.123 3.123 0 0 0 3.12-3.12v-3.264a.75.75 0 1 1 1.5 0v3.264a4.625 4.625 0 0 1-4.62 4.62h-1.05a1.36 1.36 0 0 0-.97.4l-1.4 1.4a2.2 2.2 0 0 1-1.562.64"
    />
    <Path
      fill={props.color}
      d="M19.33 8.727a2.971 2.971 0 1 1 0-5.942 2.971 2.971 0 0 1 0 5.942m0-4.442a1.47 1.47 0 1 0 0 2.942 1.47 1.47 0 0 0 0-2.942M15.313 12.582a1.035 1.035 0 1 1 0-2.07 1.035 1.035 0 0 1 0 2.07M9.613 12.582a1.035 1.035 0 1 1-.002-2.07 1.035 1.035 0 0 1 .002 2.07"
    />
  </Svg>
);
export default IconlystChatBadgeOutline;
