import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserMusicBulk = ({
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
      d="M18.436 3.002v2.1a2.55 2.55 0 0 0-1.05-.227c-.88 0-1.656.45-2.112 1.133a2.545 2.545 0 1 0 4.662 1.408V4.905a3 3 0 0 0 .82.298c.4.077.802-.18.885-.587a.751.751 0 0 0-.587-.883c-.824-.168-1.156-.969-1.167-.998a.75.75 0 0 0-.288-.362.74.74 0 0 0-.55-.109.75.75 0 0 0-.613.738m-1.81 3.703a1.048 1.048 0 0 1 1.81.713c0 .574-.471 1.043-1.05 1.043a1.044 1.044 0 0 1-.76-1.756"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.065 21.752c-5.193 0-9.42-4.228-9.42-9.424 0-5.58 4.928-10.035 10.592-9.35a.74.74 0 0 1 .547.35l.041.075.033.082a.75.75 0 0 1 .031.328.75.75 0 0 1-.835.654l-.229-.025a8 8 0 0 0-.76-.037c-4.367 0-7.92 3.554-7.92 7.923 0 4.37 3.553 7.924 7.92 7.924 4.368 0 7.92-3.554 7.92-7.924a.75.75 0 0 1 1.5 0c0 5.196-4.225 9.424-9.42 9.424"
    />
    <Path
      fill={props.color}
      d="M15.178 12.104a3.167 3.167 0 0 1-3.163 3.164 3.167 3.167 0 0 1-3.163-3.165 3.166 3.166 0 0 1 3.163-3.162 3.166 3.166 0 0 1 3.162 3.162"
    />
    <Path
      fill={props.color}
      d="M16.911 18.754a8.04 8.04 0 0 1-4.77 1.562 8.04 8.04 0 0 1-4.75-1.547c.562-1.39 2.095-2.527 4.761-2.527 2.664 0 4.195 1.13 4.759 2.512"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserMusicBulk;
