import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMusicLibraryOutline = ({
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
      d="M7.338 9.582A2.36 2.36 0 0 0 4.98 11.94v5.953a2.36 2.36 0 0 0 2.358 2.358h9.824a2.36 2.36 0 0 0 2.358-2.358V11.94a2.36 2.36 0 0 0-2.358-2.358zM3.48 11.94a3.86 3.86 0 0 1 3.858-3.858h9.824a3.86 3.86 0 0 1 3.858 3.858v5.953a3.86 3.86 0 0 1-3.858 3.858H7.338a3.86 3.86 0 0 1-3.858-3.858z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.589 17.166a.374.374 0 1 0 0 .747.374.374 0 0 0 0-.747m-1.874.374a1.874 1.874 0 1 1 3.747 0 1.874 1.874 0 0 1-3.747 0M13.952 16.365a.374.374 0 1 0 0 .748.374.374 0 0 0 0-.748m-1.874.374a1.874 1.874 0 1 1 3.747 0 1.874 1.874 0 0 1-3.747 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.478 11.07a.75.75 0 0 1 .347.633v5.036a.75.75 0 0 1-1.5 0v-3.933a9.3 9.3 0 0 1-2.862.474v4.26a.75.75 0 0 1-1.5 0v-5.036a.75.75 0 0 1 .808-.748 7.9 7.9 0 0 0 3.988-.733.75.75 0 0 1 .72.048M6.043 5.918a.75.75 0 0 1 .75-.75h10.915a.75.75 0 0 1 0 1.5H6.793a.75.75 0 0 1-.75-.75M8.422 3a.75.75 0 0 1 .75-.75h6.155a.75.75 0 1 1 0 1.5H9.172a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMusicLibraryOutline;
