import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKnifeAndForkOutline = ({
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
      d="M19.04 2.023c.415 0 .751.34.751.75l.002 3.065v.209c.002 4.816.002 12.513-.002 13.896 0 .41-.126.85-.444 1.17-.347.34-.837.45-1.312.3a1.7 1.7 0 0 1-.445-.25c-.15-.1-.329-.25-.526-.45-.395-.4-.864-.99-1.302-1.83-.88-1.68-1.62-4.34-1.425-8.4v-.02c.083-1.06.566-1.81 1.351-2.35.034-.028.244-.162.522-.341l.76-.49c.18-.12.36-.235.524-.342l.304-.197.132-.09q.084-.057.142-.1.037-.024.057-.04l.004-.003c.092-.113.15-.256.16-.478V5.86l-.007-.108a.7.7 0 0 1 .007-.183l-.002-2.797c0-.41.335-.75.749-.75m-.746 6.185-.507.335c-.302.19-.605.39-.839.54-.102.06-.19.121-.26.17l-.029.02c-.037.02-.067.04-.088.05-.026.02-.031.02-.031.02-.434.3-.661.65-.706 1.24-.181 3.822.524 6.203 1.257 7.61.369.7.748 1.17 1.035 1.46q.09.087.165.153c.003-1.449.004-7.074.003-11.598"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M5.189 2.003c.414.02.736.37.72.78l-.204 5.19v.03a2.49 2.49 0 0 0 2.498 2.46 2.49 2.49 0 0 0 2.498-2.46v-.03l-.203-5.19a.75.75 0 1 1 1.5-.06l.202 5.22.001.03a3.99 3.99 0 0 1-3.248 3.92l.001 8.86c0 .41-.336.75-.75.75a.753.753 0 0 1-.75-.75v-8.86a3.99 3.99 0 0 1-3.249-3.92l.001-.03.204-5.22a.75.75 0 0 1 .779-.72"
    />
    <Path
      fill={props.color}
      d="M8.204 8.293a.75.75 0 0 1-.75-.75v-4.79c0-.41.335-.75.75-.75.414 0 .75.34.75.75v4.79c0 .41-.336.75-.75.75"
    />
  </Svg>
);
export default IconlystKnifeAndForkOutline;
