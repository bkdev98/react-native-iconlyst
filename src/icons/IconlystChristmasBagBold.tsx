import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasBagBold = ({
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
      d="M13.002 14.81a.5.5 0 0 1-.45.28h-.71l.74 1.28c.09.16.09.35 0 .5-.08.16-.25.25-.43.25h-1.53v1.33a.749.749 0 1 1-1.5 0v-1.33h-1.66c-.18 0-.34-.09-.43-.25a.5.5 0 0 1 0-.5l.74-1.28h-.71a.5.5 0 0 1-.45-.28.51.51 0 0 1 .06-.53l2.74-3.45c.1-.12.24-.18.4-.18.15 0 .29.06.39.18l2.74 3.45c.12.15.14.35.06.53m-4.94-8.69c0-.41.12-.81.33-1.14.38-.63 1.08-1.06 1.88-1.06.25 0 .5.04.72.13.49.17.89.5 1.16.93.01.01.01.02.01.03.2.32.31.71.31 1.11v.36h-4.41zm12.78 14.82-1.38-12.95c-.09-.84-.79-1.47-1.63-1.47h-.07v-.4c0-.39-.06-.77-.18-1.13-.12-.38-.3-.73-.52-1.04-.35-.47-.79-.85-1.31-1.11-.51-.27-1.08-.42-1.69-.42-.7 0-1.35.2-1.91.53a3.586 3.586 0 0 0-1.88-.53c-1.64 0-3.05 1.08-3.53 2.56q-.18.54-.18 1.14v.36h-.35c-.08 0-.17 0-.25.02-.04 0-.07.01-.11.02-.81.12-1.49.7-1.75 1.46-.03.07-.06.15-.07.23-.04.11-.06.23-.07.35l-.88 11.83q-.015.15 0 .3c.01.21.05.43.13.62a2.195 2.195 0 0 0 1.65 1.45c.15.03.31.05.46.05h9.52c.16 0 .31-.02.46-.05.46-.09.87-.32 1.19-.67.43-.46.64-1.08.6-1.7l-.89-11.83a2.266 2.266 0 0 0-1.81-2.04h-.02c-.13-.03-.26-.04-.4-.04v-.36c0-.39-.06-.77-.18-1.13a3.7 3.7 0 0 0-.45-.94c.23-.09.47-.13.72-.13.79 0 1.49.43 1.88 1.06.2.33.32.73.32 1.14v.47q.285.39.45.84c.12.32.2.66.23 1.02l.08 1.05.81 10.8c.06.88-.19 1.76-.7 2.45.72-.04 1.38-.44 1.74-1.06l.16-.28.61.75c.31.38.92.72 1.17.3.19-.34.1-.9.03-1.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasBagBold;