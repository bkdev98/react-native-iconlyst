import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallMissCallBold = ({
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
      d="M21.998 15.701c.004-.35.015-1.278-.874-2.177-1.361-1.376-4.25-2.073-8.585-2.073h-.041c-4.357 0-7.259.7-8.625 2.082-.886.897-.875 1.821-.871 2.17L3 15.81c0 1.572.212 2.42.731 2.926.479.467 1.114.551 1.945.551q.325-.002.693-.012.421-.012.92-.014c1.582-.006 1.996-.956 2.329-1.718.393-.903.733-1.682 2.88-1.682s2.488.778 2.882 1.68c.334.762.749 1.71 2.332 1.71.336 0 .646.008.932.015 1.173.028 2.023.052 2.626-.536.519-.505.73-1.35.73-2.92 0-.017 0-.09-.002-.109M8.093 7.873a.75.75 0 1 0 1.5-.004V7.28l2.583 2.58a.748.748 0 0 0 1.06 0l3.462-3.46a.749.749 0 1 0-1.06-1.06L12.704 8.27 10.65 6.218l.594.003h.003a.75.75 0 0 0 .003-1.5l-2.408-.01h-.007a.737.737 0 0 0-.746.79z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallMissCallBold;
