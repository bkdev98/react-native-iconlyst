import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameObjectsOutline = ({
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
      d="M2.987 13.61a.75.75 0 0 1 1.06 0l2.586 2.584 2.584-2.585a.75.75 0 1 1 1.06 1.061l-2.584 2.585 2.586 2.585a.75.75 0 0 1-1.06 1.061l-2.586-2.586-2.586 2.586a.75.75 0 1 1-1.06-1.06l2.585-2.586-2.585-2.585a.75.75 0 0 1 0-1.06M15.488 14.587a.683.683 0 0 0-.683.684v3.969c0 .377.305.683.683.683h3.969a.683.683 0 0 0 .683-.683v-3.97a.683.683 0 0 0-.683-.683zm-2.183.684c0-1.206.976-2.184 2.183-2.184h3.969c1.207 0 2.183.978 2.183 2.184v3.969a2.183 2.183 0 0 1-2.183 2.183h-3.97a2.183 2.183 0 0 1-2.182-2.183zM8.355 3.735l2.409 4.314c.734 1.314-.216 2.935-1.722 2.935H4.224c-1.506 0-2.456-1.62-1.722-2.935l2.41-4.314c.751-1.347 2.69-1.347 3.443 0m-1.31.731a.472.472 0 0 0-.824 0L3.81 8.78a.473.473 0 0 0 .413.704h4.818a.473.473 0 0 0 .412-.704zM13.195 6.854a4.278 4.278 0 1 1 8.556.002 4.278 4.278 0 0 1-8.556-.002m4.278-2.777a2.778 2.778 0 1 0 0 5.556 2.778 2.778 0 0 0 0-5.556"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGameObjectsOutline;
