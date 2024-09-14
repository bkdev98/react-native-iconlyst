import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleBed2Outline = ({
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
      d="M7.404 4.13h9.194c.54 0 .996 0 1.385.14a2.35 2.35 0 0 1 1.415 1.415c.14.39.14.845.14 1.385v5.049a.75.75 0 0 1-1.5 0V7.185c0-.72-.012-.884-.051-.992l.706-.254-.706.254a.85.85 0 0 0-.512-.512l.252-.698-.252.698c-.108-.039-.272-.05-.992-.05H7.52c-.72 0-.883.011-.992.05a.85.85 0 0 0-.512.512c-.039.108-.05.272-.05.992v4.934a.75.75 0 0 1-1.5 0V7.07c0-.54-.001-.996.139-1.385A2.35 2.35 0 0 1 6.019 4.27c.39-.14.845-.14 1.385-.14"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.252 9.581a.75.75 0 0 1 .75-.75h1.977a.75.75 0 1 1 0 1.5h-1.977a.75.75 0 0 1-.75-.75M7.25 9.581a.75.75 0 0 1 .75-.75h1.977a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M5.19 11.369H18.81c.54 0 .996-.001 1.385.139a2.35 2.35 0 0 1 1.415 1.415c.14.39.14.845.14 1.385v4.811a.75.75 0 0 1-1.5 0v-4.696c0-.72-.012-.883-.051-.992a.85.85 0 0 0-.512-.512c-.108-.039-.272-.05-.992-.05H5.304c-.72 0-.883.011-.992.05a.85.85 0 0 0-.512.512c-.039.109-.05.272-.05.992v4.696a.75.75 0 0 1-1.5 0v-4.811c0-.54-.001-.995.14-1.385a2.35 2.35 0 0 1 1.414-1.415c.39-.14.845-.14 1.385-.139"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 17.88a.75.75 0 0 1 .75-.75h18a.75.75 0 1 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleBed2Outline;
