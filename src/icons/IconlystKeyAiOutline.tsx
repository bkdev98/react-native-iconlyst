import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKeyAiOutline = ({
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
      d="M7.889 3.75a3.37 3.37 0 0 0-3.37 3.369v9.761a3.37 3.37 0 0 0 3.37 3.37h4.598a.75.75 0 0 1 0 1.5H7.889a4.87 4.87 0 0 1-4.87-4.87V7.119A4.87 4.87 0 0 1 7.89 2.25h7.096a4.87 4.87 0 0 1 4.87 4.869v5.338a.75.75 0 0 1-1.5 0V7.119a3.37 3.37 0 0 0-3.37-3.369z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.58 8.62a1.052 1.052 0 1 1 0 .003zm1.053-2.552A2.55 2.55 0 0 0 7.08 8.62v.005a2.552 2.552 0 1 0 2.552-2.557"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.635 9.72a.75.75 0 0 0-.75.75v5.676c0 .414.336.75.75.75h1.802a.75.75 0 0 0 0-1.5h-1.052V10.47a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.885 13.394c0 .414.336.75.75.75h1.802a.75.75 0 0 0 0-1.5H9.635a.75.75 0 0 0-.75.75M17.646 14.972a.75.75 0 0 0-.704.49l-.102.277a3.07 3.07 0 0 1-1.813 1.816l-.277.103a.75.75 0 0 0 0 1.406l.277.103a3.07 3.07 0 0 1 1.813 1.816l.102.277a.75.75 0 0 0 1.407 0l.103-.277a3.07 3.07 0 0 1 1.813-1.816l.277-.103a.75.75 0 0 0 0-1.406l-.277-.103a3.07 3.07 0 0 1-1.813-1.816l-.103-.277a.75.75 0 0 0-.703-.49m.982 3.389a4.6 4.6 0 0 0-.982.983 4.6 4.6 0 0 0-.983-.983c.376-.276.707-.608.983-.983.275.375.607.707.982.983"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKeyAiOutline;
