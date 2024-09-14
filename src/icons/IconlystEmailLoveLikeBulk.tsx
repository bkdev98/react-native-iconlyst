import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailLoveLikeBulk = ({
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
      d="M10.825 13.174q-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.3.5.3 1-.1 1.2l-4 3.2q-.75.6-1.8.6m2.487 4.557c-.665-2.438.521-4.892 2.757-5.706a4.6 4.6 0 0 1 2.573-.11.3.3 0 0 0 .156-.001c.42-.106.856-.145 1.292-.125a.316.316 0 0 0 .335-.31V8.575c0-3.2-2.2-5.5-5.1-5.5h-8.8c-2.9 0-5.1 2.4-5.1 5.5v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.1 1.4 3.5 1.4h7.665c.262 0 .402-.317.238-.522-.438-.547-.82-1.166-1.06-1.845a3 3 0 0 1-.056-.176"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.005 16.863c-.283.963-1.516 1.934-2.272 2.428-.735-.497-1.933-1.466-2.291-2.44-.172-.667-.015-1.497.72-1.764a1.19 1.19 0 0 1 1.095.173.75.75 0 0 0 .936 0 1.18 1.18 0 0 1 1.076-.18c.764.278.916 1.127.736 1.783m-.242-3.2a2.72 2.72 0 0 0-2.038.13 2.74 2.74 0 0 0-2.057-.123c-1.396.508-2.098 2.023-1.667 3.602l.017.053c.684 1.937 3.221 3.434 3.329 3.497a.75.75 0 0 0 .744.007c.283-.158 2.783-1.605 3.357-3.556.432-1.58-.268-3.095-1.685-3.61M10.825 13.174q-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.3.5.3 1-.1 1.2l-4 3.2q-.75.6-1.8.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailLoveLikeBulk;
