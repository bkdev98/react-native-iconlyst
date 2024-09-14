import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFramerOutline = ({
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
      d="M5.308 2.713a.75.75 0 0 1 .693-.463h12a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-4.19l4.72 4.72a.75.75 0 0 1-.53 1.28H6a.75.75 0 0 1-.75-.788V8.999A.75.75 0 0 1 6 8.25h4.19L5.47 3.53a.75.75 0 0 1-.162-.817m7.003 5.536h4.94V3.75H7.81zm-.621 1.5H6.75v4.5h9.439z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.47 14.47a.75.75 0 0 1 1.06 0l4.72 4.72V15a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-1.28.53l-6-6a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFramerOutline;
