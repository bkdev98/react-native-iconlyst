import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchEditBulk = ({
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
      d="m20.992 19.794-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416M11.704 14.067l3.46-3.81c.73-.8.68-2.05-.11-2.79l-.83-.76c-.79-.72-2.04-.68-2.78.12l-3.51 3.86c-.4.44-.65 1.01-.72 1.61l-.1.92c-.06.55.14 1.08.54 1.46.33.31.75.48 1.19.48q.15 0 .3-.03l.89-.15c.64-.1 1.23-.43 1.67-.91m1.19-6.38c.12 0 .23.04.32.12l.81.76c.2.18.21.48.03.68l-3.47 3.81c-.21.23-.49.39-.8.44l-.89.15a.23.23 0 0 1-.21-.06.26.26 0 0 1-.08-.21l.1-.91c.03-.29.16-.56.34-.77l3.5-3.86c.09-.1.22-.15.35-.15"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchEditBulk;
