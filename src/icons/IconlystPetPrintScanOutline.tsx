import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetPrintScanOutline = ({
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
      d="M17.11 22.05h-1.29c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.29c1.73 0 3.14-1.41 3.14-3.14v-1.58c0-.41.34-.75.75-.75s.75.34.75.75v1.58c0 2.56-2.08 4.64-4.64 4.64M8.15 22.05H6.89c-2.56 0-4.64-2.08-4.64-4.64v-1.58c0-.41.34-.75.75-.75s.75.34.75.75v1.58c0 1.73 1.41 3.14 3.14 3.14h1.26c.41 0 .75.34.75.75s-.34.75-.75.75M3 9.52c-.41 0-.75-.34-.75-.75V7.19c0-2.56 2.08-4.64 4.64-4.64h1.29c.41 0 .75.34.75.75s-.34.75-.75.75H6.89c-1.73 0-3.14 1.41-3.14 3.14v1.58c0 .41-.34.75-.75.75M21 9.52c-.41 0-.75-.34-.75-.75V7.19c0-1.73-1.41-3.14-3.14-3.14h-1.26c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.26c2.56 0 4.64 2.08 4.64 4.64v1.58c0 .41-.34.75-.75.75M12 9.48c-.55 0-1-.45-1-1a.99.99 0 0 1 1-.99c.55 0 1 .45 1 1s-.45 1-1 1zM15.58 11.3c-.55 0-1-.45-1-1a.99.99 0 0 1 1-.99c.55 0 1 .45 1 1s-.45 1-1 1zM8.43 11.3c-.55 0-1-.45-1-1a.99.99 0 0 1 1-.99c.55 0 1 .45 1 1s-.45 1-1 1zM9.63 17.11c-.33 0-.65-.07-.94-.26-.41-.27-.67-.72-.76-1.34-.13-.82.14-1.68.76-2.41.81-.95 2.09-1.55 3.34-1.55 2.18 0 4.11 1.71 4.12 3.65 0 .72-.18 1.22-.59 1.55-.65.52-1.5.31-2.33.11-.42-.1-.85-.2-1.21-.2-.3 0-.7.11-1.08.21-.43.11-.88.24-1.33.24zm2.4-4.05c-.81 0-1.67.4-2.2 1.02-.19.23-.5.68-.42 1.2.04.26.1.32.1.32.13.07.73-.09 1.05-.17.45-.12.97-.26 1.47-.26.54 0 1.08.13 1.56.25.33.08.87.2 1.05.16 0-.02.02-.12.02-.35 0-1.12-1.29-2.17-2.63-2.17"
    />
  </Svg>
);
export default IconlystPetPrintScanOutline;