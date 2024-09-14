import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFramerCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.826 6.94a.75.75 0 0 1 .693-.463h6.963a.75.75 0 0 1 .75.75v3.48a.75.75 0 0 1-.75.75H13.81l2.201 2.202a.75.75 0 0 1-.53 1.28H12.75v2.732a.75.75 0 0 1-1.28.53L7.988 14.72a.75.75 0 0 1-.22-.53l.001-3.482a.75.75 0 0 1 .75-.75h1.67l-2.2-2.201a.75.75 0 0 1-.163-.817m4.485 3.018h2.42V7.977H10.33zm-.621 1.5H9.269v2.42l1.981 1.982v-1.67a.75.75 0 0 1 .75-.75h1.671z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFramerCircleOutline;
