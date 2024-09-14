import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGemAiLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.816 19.553 3.51 11.526a1.96 1.96 0 0 1-.169-2.424l2.95-4.323a1.96 1.96 0 0 1 1.62-.855h8.186c.648 0 1.255.32 1.62.856l2.943 4.322c.51.75.44 1.752-.17 2.423l-7.308 8.028a1.6 1.6 0 0 1-2.366 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.677 11.744-.09-.245a3.37 3.37 0 0 0-1.989-1.991l-.244-.09.244-.091a3.37 3.37 0 0 0 1.988-1.992l.09-.244.091.244a3.37 3.37 0 0 0 1.989 1.992l.244.09-.244.09A3.37 3.37 0 0 0 9.767 11.5zM14.34 13.08A1.62 1.62 0 0 0 13.262 12a1.62 1.62 0 0 0 1.078-1.08A1.62 1.62 0 0 0 15.418 12c-.516.158-.92.562-1.078 1.08"
    />
  </Svg>
);
export default IconlystGemAiLight;
