import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirdropBulk = ({
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
      d="M12.85 1.375c1.383 0 2.698.375 3.84 1.033.91.52 1.704 1.22 2.334 2.05a7.7 7.7 0 0 1 1.495 3.497 2.44 2.44 0 0 1-.568 1.93h-.001q-.195.228-.44.404l-3.514 3.038a3.5 3.5 0 0 0-.557-.044l-1.68-.003.04-.036 3.884-3.359h-4.089v3.395l-1.5-.003V9.885H8.002l3.881 3.373.02.019-1.634-.004q-.31 0-.595.053l-3.495-3.038a2.5 2.5 0 0 1-.607-.622 2.38 2.38 0 0 1-.397-1.682l.004-.029q.03-.192.07-.38c.735-3.56 3.93-6.2 7.6-6.2"
    />
    <Path
      fill={props.color}
      d="m7.316 17.564.004-1.24c.01-1.8 1.22-3.05 2.95-3.05l5.17.01c.84 0 1.56.28 2.09.81.55.55.85 1.35.85 2.26l-.005 1.595.005 1.595c0 .91-.3 1.71-.85 2.26-.53.53-1.25.81-2.09.81l-5.17.01c-1.73 0-2.94-1.25-2.95-3.05l-.004-1.24h-.003l.002-.385-.002-.385z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.69 17.565H14a.749.749 0 1 0 0-1.5h-2.31a.749.749 0 1 0 0 1.5"
    />
  </Svg>
);
export default IconlystAirdropBulk;
