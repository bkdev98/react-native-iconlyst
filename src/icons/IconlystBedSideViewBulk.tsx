import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedSideViewBulk = ({
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
      d="M5.587 10.236c-.526 0-.917 0-1.247.119a2 2 0 0 0-1.204 1.204c-.12.33-.119.721-.119 1.247v.844c0 .525 0 .916.119 1.246a2 2 0 0 0 1.204 1.205c.33.119.721.118 1.247.118h13.861c.526 0 .917 0 1.247-.118a2 2 0 0 0 1.204-1.205c.12-.33.119-.721.119-1.246v-.844c0-.526 0-.917-.119-1.247a2 2 0 0 0-1.204-1.204c-.33-.12-.721-.119-1.247-.119z"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M5.518 5.986a.75.75 0 0 1 .75.75v.173h.03a3.826 3.826 0 0 1 3.827 3.826.75.75 0 0 1-1.5 0A2.326 2.326 0 0 0 6.3 8.41h-.031v2.327a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75M19.518 8.505a.75.75 0 0 1 .75.75v1.473a.75.75 0 0 1-1.5 0V9.256a.75.75 0 0 1 .75-.75M6.585 15.881a.75.75 0 0 0-1.467-.313l-.328 1.54a.75.75 0 0 0 1.467.312zM19.027 14.991a.75.75 0 0 0-.577.89l.328 1.54a.75.75 0 1 0 1.467-.314l-.328-1.539a.75.75 0 0 0-.89-.577" />
    </G>
  </Svg>
);
export default IconlystBedSideViewBulk;
