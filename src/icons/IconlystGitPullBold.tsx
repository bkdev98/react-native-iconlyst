import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitPullBold = ({
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
      d="M19.558 6.473a2.85 2.85 0 0 0-2.85-2.848 2.85 2.85 0 0 0-2.847 2.848c0 1.316.901 2.417 2.116 2.742v.902c0 .692-.563 1.256-1.257 1.256H8.041V9.209a2.845 2.845 0 0 0 2.098-2.736 2.85 2.85 0 0 0-2.847-2.848 2.85 2.85 0 0 0-2.85 2.848c0 1.31.893 2.404 2.1 2.736v2.895c0 .006-.005.012-.005.019s.005.012.005.019v2.649a2.84 2.84 0 0 0-2.1 2.735 2.85 2.85 0 0 0 2.85 2.848 2.85 2.85 0 0 0 2.848-2.848 2.845 2.845 0 0 0-2.099-2.735v-1.918h6.68a2.76 2.76 0 0 0 2.756-2.756v-.914a2.845 2.845 0 0 0 2.08-2.73"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGitPullBold;
