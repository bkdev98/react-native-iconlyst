import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCubeDashBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.306 12.05 12.9 13.44a.3.3 0 0 0-.15.26v2.777a.75.75 0 0 1-1.5 0v-2.778a.3.3 0 0 0-.15-.26l-2.406-1.388a.75.75 0 1 1 .75-1.3l2.406 1.39a.3.3 0 0 0 .3 0l2.406-1.39a.75.75 0 0 1 .75 1.299m3.089-1.784a.747.747 0 0 1-1.024-.275.75.75 0 0 1 .274-1.024l1.86-1.074c.167-.097.203-.324.057-.45a2.5 2.5 0 0 0-.409-.292l-5.684-3.28a2.91 2.91 0 0 0-2.936-.001L4.849 7.149a2.6 2.6 0 0 0-.412.295c-.145.126-.11.353.057.45l1.859 1.073a.75.75 0 1 1-.75 1.299L3.818 9.234c-.175-.1-.4-.004-.423.196q-.015.13-.016.263v6.56c0 1.052.563 2.027 1.468 2.542l5.684 3.279q.17.099.349.174c.182.076.37-.068.37-.265v-1.936a.75.75 0 0 1 1.5 0v1.937c0 .197.187.34.37.264q.177-.074.347-.173l5.683-3.278a2.93 2.93 0 0 0 1.471-2.544v-6.56q0-.134-.016-.263c-.023-.2-.248-.297-.423-.196z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCubeDashBold;
