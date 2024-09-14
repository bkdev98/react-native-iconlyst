import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdLockLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.88 12.92V8.918c0-2.906-1.81-4.959-4.719-4.959H7.84c-2.9 0-4.719 2.053-4.719 4.959v7.842c0 2.905 1.81 4.959 4.72 4.959h4.48"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.071 10.68a4.51 4.51 0 0 1 3.93-2.287 4.5 4.5 0 0 1 1.74.347M15.692 10.307a4.5 4.5 0 0 1 .77 1.89M13.742 14.747v-1.673a1.78 1.78 0 0 0-3.56 0v.477M7.483 16.266v-2.8M10.183 17.288v-1.603"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.154 21.96H16.55a1.29 1.29 0 0 1-1.291-1.292v-1.461a1.29 1.29 0 0 1 1.29-1.291h2.605c.713 0 1.292.577 1.292 1.291v1.461c0 .713-.58 1.292-1.292 1.292"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.408 17.94v-.927a1.554 1.554 0 0 0-3.108-.006v.934"
    />
  </Svg>
);
export default IconlystSquareTouchIdLockLight;
