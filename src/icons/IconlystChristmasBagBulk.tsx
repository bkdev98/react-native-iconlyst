import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBagBulk = ({
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
      d="M17.583 4.99c-.12-.38-.3-.73-.52-1.04-.35-.47-.79-.85-1.31-1.11-.51-.27-1.08-.42-1.69-.42-.7 0-1.35.2-1.91.53a3.586 3.586 0 0 0-1.88-.53c-1.64 0-3.05 1.08-3.53 2.56q-.18.54-.18 1.14v.36h1.5v-.36c0-.41.12-.81.33-1.14.38-.63 1.08-1.06 1.88-1.06.25 0 .5.04.72.13.49.17.89.5 1.16.93.01.01.01.02.01.03.2.32.31.71.31 1.11v.36h1.5v-.36c0-.39-.06-.77-.18-1.13a3.7 3.7 0 0 0-.45-.94c.23-.09.47-.13.72-.13.79 0 1.49.43 1.88 1.06.2.33.32.73.32 1.14v.4h1.5v-.4c0-.39-.06-.77-.18-1.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M14.392 6.52h-.02c-.13-.03-.26-.04-.4-.04h-7.76c-.08 0-.17 0-.25.02-.04 0-.07.01-.11.02-.81.12-1.49.7-1.75 1.46-.03.07-.06.15-.07.23-.04.11-.06.23-.07.35l-.88 11.83q-.015.15 0 .3c.01.21.05.43.13.62a2.195 2.195 0 0 0 1.65 1.45c.15.03.31.05.46.05h9.52c.16 0 .31-.02.46-.05.46-.09.87-.32 1.19-.67.43-.46.64-1.08.6-1.7l-.89-11.83a2.266 2.266 0 0 0-1.81-2.04"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillOpacity={0.4}
      fillRule="evenodd"
      d="m20.842 20.94-1.38-12.95c-.09-.84-.79-1.47-1.63-1.47h-1.57v.07q.285.39.45.84c.12.32.2.66.23 1.02l.08 1.05.81 10.8c.06.88-.19 1.76-.7 2.45.72-.04 1.38-.44 1.74-1.06l.16-.28.61.75c.31.38.92.72 1.17.3.19-.34.1-.9.03-1.52"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.185 14.336-2.745-3.443a.497.497 0 0 0-.781 0l-2.746 3.443a.5.5 0 0 0 .39.812h.706l-.74 1.282a.5.5 0 0 0 .433.75H9.37v1.328a.75.75 0 0 0 1.5 0V17.18h1.527a.5.5 0 0 0 .433-.75l-.741-1.282h.706a.5.5 0 0 0 .39-.812"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasBagBulk;
