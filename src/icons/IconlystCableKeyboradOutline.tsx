import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableKeyboradOutline = ({
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
      fillRule="evenodd"
      d="M8.194 2.242a.75.75 0 0 1 .757.743.5.5 0 0 0 .506.496h.98a2.69 2.69 0 0 1 2.707 2.653v.633a.75.75 0 0 1-1.5 0V6.15a1.19 1.19 0 0 0-1.198-1.17h-.979A2 2 0 0 1 7.451 3a.75.75 0 0 1 .743-.758"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.011 7.436c1-.96 2.4-1.413 4.01-1.413h8.458c1.609 0 3.01.463 4.01 1.437C21.493 8.437 22 9.837 22 11.521v4.8c0 1.665-.51 3.045-1.516 4.006-1.002.956-2.4 1.407-4.006 1.407H8.013c-1.608 0-3.008-.45-4.008-1.407-1.005-.962-1.51-2.344-1.504-4.007v-4.874c0-1.663.506-3.046 1.511-4.01M5.05 8.518C4.406 9.135 4 10.088 4 11.446v4.878c-.004 1.356.4 2.305 1.041 2.92.647.618 1.633.99 2.97.99h8.468c1.332 0 2.32-.371 2.969-.992.644-.615 1.052-1.565 1.052-2.92v-4.8c0-1.383-.41-2.357-1.057-2.987-.651-.633-1.636-1.012-2.965-1.012H8.022c-1.337 0-2.323.374-2.971.995"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.678 17.273a.75.75 0 0 1 .75-.75h5.645a.75.75 0 0 1 0 1.5H9.428a.75.75 0 0 1-.75-.75M6.254 10.718a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M13.086 10.718a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M9.672 10.718a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M16.504 10.718a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M11.379 13.596a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M7.963 13.596a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M14.795 13.596a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCableKeyboradOutline;
