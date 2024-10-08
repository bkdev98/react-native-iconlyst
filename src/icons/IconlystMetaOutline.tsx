import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetaOutline = ({
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
      d="M5.536 18.455c-1.29 0-2.44-.87-2.93-2.31-.49-1.45-.47-3.19.06-5.31.79-3.1 2.58-5.06 4.8-5.26 1.44-.12 2.84.64 4.04 2.21l.32.41s.01.02.02.02l.15.21.15-.21.34-.44c1.19-1.56 2.58-2.34 4.03-2.21 2.23.2 4.02 2.17 4.81 5.26.54 2.12.56 3.85.07 5.31-.6 1.77-2.21 2.68-3.82 2.17-1.42-.45-2.44-1.71-3.09-2.62-.75-1.07-1.36-2.22-1.95-3.33q-.27-.525-.54-1.02-.27.495-.54 1.02c-.59 1.11-1.2 2.27-1.95 3.33-.64.91-1.66 2.18-3.09 2.62-.3.09-.6.14-.89.14zm2.23-11.39h-.17c-2.31.21-3.25 3.22-3.48 4.14-.46 1.8-.49 3.3-.1 4.45.28.83.99 1.53 1.95 1.23.99-.31 1.79-1.32 2.31-2.06.7-.99 1.28-2.1 1.85-3.17.32-.6.64-1.22.99-1.83-.16-.25-.32-.49-.49-.72l-.32-.41c-.58-.76-1.48-1.64-2.55-1.64zm5.11 2.77c.35.61.68 1.22 1 1.83.57 1.07 1.15 2.18 1.84 3.17.52.73 1.32 1.75 2.31 2.06.96.3 1.67-.4 1.95-1.23.39-1.15.36-2.65-.1-4.46-.23-.92-1.17-3.93-3.48-4.14-1.13-.1-2.1.83-2.71 1.63l-.33.43c-.17.23-.32.47-.48.71"
    />
  </Svg>
);
export default IconlystMetaOutline;
