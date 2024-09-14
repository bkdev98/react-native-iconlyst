import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoveBulk = ({
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
      d="M11.135 2.5a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.99 19.793-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416M11.496 14.509c.26-.14 2.57-1.45 3.15-3.31.48-1.51-.23-3.04-1.62-3.5-.62-.19-1.3-.15-1.89.13-.59-.28-1.26-.33-1.9-.13-1.1.35-1.77 1.39-1.77 2.55 0 .31.05.63.15.95.6 1.847 2.821 3.125 3.145 3.311l.015.009q.165.09.36.09c.12 0 .25-.03.36-.1m-.36-1.53c.69-.45 1.8-1.33 2.08-2.24.2-.61.04-1.39-.65-1.61-.33-.1-.7-.04-.99.17-.27.2-.63.19-.9 0-.27-.21-.64-.28-.98-.17-.68.22-.85.99-.65 1.61.3.92 1.4 1.79 2.09 2.24"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLoveBulk;
