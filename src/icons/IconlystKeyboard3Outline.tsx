import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyboard3Outline = ({
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
      d="M4.011 5.557c1-.96 2.4-1.412 4.01-1.412h8.458c1.609 0 3.01.462 4.01 1.436C21.493 6.558 22 7.958 22 9.643v4.8c0 1.664-.51 3.044-1.516 4.006-1.002.956-2.4 1.406-4.006 1.406H8.013c-1.608 0-3.008-.45-4.008-1.407-1.005-.962-1.51-2.344-1.504-4.007V9.567c0-1.663.506-3.046 1.511-4.01M5.05 6.639C4.406 7.257 4 8.21 4 9.567v4.878c-.004 1.356.4 2.305 1.041 2.92.647.618 1.633.99 2.97.99h8.468c1.332 0 2.32-.371 2.969-.992.644-.614 1.052-1.565 1.052-2.92v-4.8c0-1.383-.41-2.357-1.057-2.987-.651-.633-1.636-1.011-2.965-1.011H8.022c-1.337 0-2.323.373-2.971.994"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.678 15.395a.75.75 0 0 1 .75-.75h5.645a.75.75 0 0 1 0 1.5H9.428a.75.75 0 0 1-.75-.75M6.254 8.839a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M13.087 8.839a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M9.67 8.839a.866.866 0 1 1 1.733 0 .866.866 0 0 1-1.732 0M16.503 8.839a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M11.379 11.718a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M7.963 11.718a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0M14.795 11.718a.866.866 0 1 1 1.732 0 .866.866 0 0 1-1.732 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyboard3Outline;
