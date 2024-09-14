import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCovid19CoronaOutline = ({
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
      d="M11.353 3.298a.75.75 0 0 1 1.053-.126c.754.593.947 1.422.829 2.11-.058.333-.19.649-.378.904-.18.242-.466.503-.86.578a.75.75 0 0 1-.359-1.454l.012-.016a.65.65 0 0 0 .106-.267c.038-.218-.012-.467-.277-.676a.75.75 0 0 1-.126-1.053m.267 2.03q0 0 .005-.003zM11.114 18.118a.75.75 0 0 1 .847-.638c.891.125 1.253.98 1.27 1.596a1.93 1.93 0 0 1-1.187 1.852.75.75 0 1 1-.596-1.376.44.44 0 0 0 .284-.433.4.4 0 0 0-.038-.164.75.75 0 0 1-.58-.837M18.793 4.097a.75.75 0 0 1 .995.366c.432.935.51 2.055-.026 2.977-.556.954-1.645 1.495-3.118 1.495a.75.75 0 1 1 0-1.5c1.11 0 1.61-.388 1.821-.749.229-.392.247-.977-.038-1.594a.75.75 0 0 1 .366-.995M7.551 15.719a.75.75 0 0 1 .75.75c0 .773-.286 1.807-1.028 2.517-.809.773-2.012 1.029-3.511.438a.75.75 0 0 1 .55-1.396c1.06.419 1.615.17 1.924-.126.374-.358.565-.957.565-1.433a.75.75 0 0 1 .75-.75M18.515 12.614c.085-.095.39-.264.857-.287.443-.022.852.098 1.118.344a.75.75 0 1 0 1.018-1.101c-.642-.595-1.49-.778-2.211-.741-.695.034-1.46.284-1.91.796l-.003.004c-.113.13-.362.348-.682.495-.311.143-.642.198-.97.102a.75.75 0 1 0-.418 1.441c.766.222 1.474.068 2.014-.18a3.6 3.6 0 0 0 1.187-.873M9.207 13.522c-.255-.394-.555-.574-.679-.598a.75.75 0 0 1 .295-1.471c.668.134 1.267.671 1.644 1.255.392.606.658 1.432.464 2.286a.75.75 0 1 1-1.463-.332c.08-.353-.02-.767-.26-1.14M5.038 11.227c.386-.063.766.023 1.136.27a.75.75 0 1 1-.832 1.248.4.4 0 0 0-.067-.037c-.047.008-.105.034-.34.147a3 3 0 0 1-.88.292c-.388.057-.817.021-1.304-.15a.75.75 0 0 1 .498-1.415c.277.097.46.1.59.08.139-.02.265-.071.446-.159l.052-.025c.157-.077.42-.206.701-.251M15.418 16.38a.75.75 0 0 1 .805-.69 3.3 3.3 0 0 1 2.367 1.275c.613.807.846 1.92.506 3.24a.75.75 0 1 1-1.452-.373c.242-.943.048-1.57-.25-1.96a1.8 1.8 0 0 0-1.285-.687.75.75 0 0 1-.69-.805M3.88 5.051a.75.75 0 0 1 .805-.69c.72.057 1.253.334 1.572.846.229.369.302.819.346 1.09q.008.054.016.098c.058.332.108.44.165.499.032.033.18.168.758.168a.75.75 0 1 1 0 1.5c-.786 0-1.411-.183-1.84-.63-.405-.42-.504-.956-.56-1.278l-.014-.078c-.06-.347-.084-.478-.145-.576l-.001-.003c-.01-.017-.06-.112-.413-.14a.75.75 0 0 1-.69-.806"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.855 6.777a5.347 5.347 0 1 0 0 10.694 5.347 5.347 0 0 0 0-10.694M5.01 12.124a6.847 6.847 0 1 1 13.693 0 6.847 6.847 0 0 1-13.693 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.568 9.911a1.231 1.231 0 1 0-2.463 0 1.231 1.231 0 0 0 2.463 0M14.077 14.763a.821.821 0 1 0-1.642 0 .821.821 0 0 0 1.642 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCovid19CoronaOutline;