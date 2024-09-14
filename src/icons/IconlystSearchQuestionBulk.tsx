import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchQuestionBulk = ({
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
      d="M11.132 2.498a8.42 8.42 0 1 0 .001 16.84 8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.994 19.795-1.983-1.979a1 1 0 0 0-1.413 1.417l1.984 1.978a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.862 14.699c0 .42-.33.75-.75.75a.749.749 0 1 1 0-1.5c.42 0 .75.33.75.74zM12.732 11.699l-.12.07c-.56.31-.75.47-.75.72.01.42-.32.76-.74.76h-.01c-.41 0-.74-.32-.75-.74-.01-1.19.94-1.73 1.52-2.05l.12-.07c.5-.27.73-.62.73-1.1 0-.77-.63-1.41-1.4-1.41-.79 0-1.4.62-1.4 1.41 0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75 0-1.6 1.3-2.91 2.9-2.91s2.9 1.31 2.9 2.91c0 1.03-.53 1.89-1.5 2.41"
    />
  </Svg>
);
export default IconlystSearchQuestionBulk;
