import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXamarinOutline = ({
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
      d="M15.57 20.85H8.44c-.91 0-1.76-.49-2.21-1.28l-3.64-6.3c-.46-.78-.46-1.76 0-2.55l3.64-6.3c.46-.79 1.31-1.27 2.21-1.27h7.12c.9 0 1.75.49 2.21 1.27l3.64 6.3c.46.79.46 1.77 0 2.55l-3.64 6.3a2.54 2.54 0 0 1-2.21 1.27zM8.44 4.65c-.37 0-.72.2-.91.53l-3.64 6.3c-.19.33-.19.73 0 1.05l3.64 6.3c.19.32.53.52.91.52h7.13c.38 0 .72-.2.91-.52l3.64-6.3c.19-.32.19-.72 0-1.05l-3.64-6.3c-.19-.32-.54-.52-.91-.52H8.45z"
    />
    <Path
      fill={props.color}
      d="M14.8 15.752c-.23 0-.45-.1-.6-.29l-2.25-2.95a.735.735 0 0 1 0-.9l2.25-3.05a.76.76 0 0 1 1.05-.16c.33.25.4.72.16 1.05l-1.92 2.6 1.91 2.5c.25.33.19.8-.14 1.05-.14.1-.3.15-.45.15z"
    />
    <Path
      fill={props.color}
      d="M9.22 15.751c-.16 0-.32-.05-.45-.15a.75.75 0 0 1-.14-1.05l1.91-2.5-1.92-2.6c-.25-.33-.18-.8.16-1.05.33-.25.8-.18 1.05.16l2.25 3.05c.2.27.2.64 0 .9l-2.25 2.95c-.15.19-.37.29-.6.29z"
    />
  </Svg>
);
export default IconlystXamarinOutline;
