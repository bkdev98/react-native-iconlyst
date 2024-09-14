import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatWarningDashboardOutline = ({
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
    <Path
      fill={props.color}
      d="M15.278 16.724h-6.04c-.97 0-1.87-.52-2.36-1.35s-.5-1.88-.02-2.72l3.02-5.36a2.72 2.72 0 0 1 2.38-1.39c.99 0 1.9.53 2.38 1.39l3.02 5.36c.47.84.47 1.89-.02 2.72a2.75 2.75 0 0 1-2.36 1.35m-3.02-9.33c-.44 0-.85.24-1.07.63l-3.02 5.36c-.21.38-.21.85.01 1.23s.63.61 1.06.61h6.04c.44 0 .84-.23 1.06-.61s.22-.85.01-1.23l-3.02-5.36c-.22-.39-.63-.63-1.07-.63"
    />
    <Path
      fill={props.color}
      d="M12.239 21.775c-1.39 0-2.78-.29-4.09-.9-.35-.14-.72-.29-.96-.29-.28 0-.67.14-1.05.27-.76.26-1.81.62-2.57-.14-.75-.75-.41-1.76-.14-2.56.13-.38.26-.78.26-1.07 0-.24-.12-.55-.3-1-1.7-3.67-.91-8.11 1.97-11a9.66 9.66 0 0 1 6.9-2.86c2.61 0 5.05 1.02 6.89 2.86 3.8 3.81 3.8 10.02 0 13.83a9.76 9.76 0 0 1-6.92 2.86zm-5.05-2.69c.54 0 1.04.2 1.56.41 3.17 1.47 6.91.8 9.34-1.64 3.22-3.23 3.22-8.48 0-11.71a8.2 8.2 0 0 0-5.83-2.42c-2.21 0-4.28.86-5.83 2.42-2.44 2.45-3.1 6.2-1.65 9.35.21.54.42 1.05.42 1.59s-.18 1.08-.34 1.55c-.09.28-.31.93-.22 1.02s.74-.13 1.02-.22c.47-.16 1-.35 1.54-.35z"
    />
    <Path
      fill={props.color}
      d="M12.269 12.223c-.41 0-.75-.34-.75-.75v-1.61c0-.41.34-.75.75-.75s.75.34.75.75v1.61c0 .41-.34.75-.75.75M12.269 14.354c-.41 0-.75-.33-.75-.75s.34-.76.75-.76.75.34.75.75-.34.75-.75.75z"
    />
  </Svg>
);
export default IconlystChatWarningDashboardOutline;
