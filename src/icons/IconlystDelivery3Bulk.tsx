import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDelivery3Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M16.222 6.996a.3.3 0 0 0 .297.255h5.13a.29.29 0 0 0 .277-.385l-.07-.183-.848-2.109a3.27 3.27 0 0 0-3.05-2.064h-2.065a.3.3 0 0 0-.296.345zM16.666 8.75a.3.3 0 0 0-.3.3v4.586a.75.75 0 0 1-.324.616.75.75 0 0 1-.691.085l-2.507-.946-2.494.946a.75.75 0 0 1-1.016-.701V9.05a.3.3 0 0 0-.3-.3h-5.37a.296.296 0 0 0-.297.279 4 4 0 0 0-.005.189l-.012 7.69c-.007 2.846 1.467 4.55 3.945 4.56l11.11.02c2.492 0 3.925-1.653 3.932-4.538l.013-7.71q0-.105-.005-.21a.296.296 0 0 0-.298-.28zM9.18 7.251a.3.3 0 0 0 .296-.255l.626-4.141a.3.3 0 0 0-.297-.345H7.748a3.27 3.27 0 0 0-3.052 2.074l-.846 2.11-.066.174a.288.288 0 0 0 .277.383z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.109 11.887 1.757.664v-3.5a.3.3 0 0 0-.3-.3h-3.432a.3.3 0 0 0-.3.3v3.498l1.744-.662a.75.75 0 0 1 .53 0M11.93 2.51a.3.3 0 0 0-.297.255l-.626 4.141a.3.3 0 0 0 .297.345h3.092a.3.3 0 0 0 .296-.345l-.625-4.141a.3.3 0 0 0-.297-.255z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M10.46 17.62H7.466a.75.75 0 0 1 0-1.5h2.996a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystDelivery3Bulk;
