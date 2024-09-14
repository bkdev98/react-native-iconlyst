import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBed3Outline = ({
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
      d="M5.19 11.088H18.81c.54 0 .996-.001 1.385.139a2.35 2.35 0 0 1 1.415 1.415c.14.39.14.845.14 1.385v1.622c0 .54 0 .996-.14 1.385a2.35 2.35 0 0 1-1.415 1.415c-.39.14-.845.14-1.385.14H5.19c-.54 0-.995 0-1.385-.14a2.35 2.35 0 0 1-1.415-1.415c-.14-.39-.14-.845-.139-1.385v-1.622c0-.54-.001-.995.14-1.385a2.35 2.35 0 0 1 1.414-1.415c.39-.14.845-.14 1.385-.139m.114 1.5c-.72 0-.883.011-.992.05a.85.85 0 0 0-.512.512c-.039.109-.05.272-.05.992v1.392c0 .72.011.883.05.992a.85.85 0 0 0 .512.512c.109.039.272.05.992.05h13.392c.72 0 .884-.011.992-.05a.85.85 0 0 0 .512-.512c.039-.108.05-.272.05-.992v-1.392c0-.72-.011-.883-.05-.992a.85.85 0 0 0-.512-.512c-.108-.039-.272-.05-.992-.05z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.215 17.088a.75.75 0 0 1 .75.75V19.4a.75.75 0 0 1-1.5 0v-1.562a.75.75 0 0 1 .75-.75m13.571 0a.75.75 0 0 1 .75.75V19.4a.75.75 0 0 1-1.5 0v-1.562a.75.75 0 0 1 .75-.75M7.404 3.85h9.193000000000001c.54 0 .996-.001 1.386.139l-.252.698.252-.698a2.35 2.35 0 0 1 1.415 1.415c.14.39.14.845.139 1.385v5.049a.75.75 0 0 1-1.5 0V6.904c0-.72-.012-.883-.05-.992a.85.85 0 0 0-.513-.512l.254-.705-.254.705c-.108-.039-.271-.05-.991-.05H7.519c-.72 0-.883.011-.992.05a.85.85 0 0 0-.512.512c-.039.109-.05.272-.05.992v4.934a.75.75 0 0 1-1.5 0V6.79c0-.54-.001-.995.139-1.385a2.35 2.35 0 0 1 1.415-1.415c.39-.14.845-.14 1.385-.139"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.25 11.15a3 3 0 1 1 6 0v.62a.75.75 0 0 1-1.5 0v-.62a1.5 1.5 0 0 0-3 0v.589a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.75 11.15a3 3 0 0 1 6 0 .75.75 0 0 1-1.5 0 1.5 1.5 0 0 0-3 0v.61a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleBed3Outline;
