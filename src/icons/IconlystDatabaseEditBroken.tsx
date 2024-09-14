import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseEditBroken = ({
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
      d="M3.67 15.3v2.14s0 2.917 7.37 2.917M18.325 11.604V5.77M3.67 5.77v5.834s0 2.917 7.37 2.917M20.043 16.964a1.075 1.075 0 0 0-.06-1.52l-.719-.665a1.074 1.074 0 0 0-1.518.058l-3.103 3.415c-.262.292-.425.659-.467 1.049l-.088.808a.878.878 0 0 0 1.018.96l.782-.132c.42-.07.806-.282 1.09-.6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.997 2.918c-4.046 0-7.327 1.323-7.327 2.956 0 1.632 3.28 2.956 7.327 2.956s7.328-1.324 7.328-2.956c0-.983-1.19-1.854-3.02-2.391"
    />
  </Svg>
);
export default IconlystDatabaseEditBroken;
