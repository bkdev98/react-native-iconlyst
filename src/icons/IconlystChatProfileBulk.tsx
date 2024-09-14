import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatProfileBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.362 3.123H7.24c-2.31 0-4.19 1.886-4.19 4.202v6.939c0 2.318 1.88 4.203 4.19 4.203h1.069c.51 0 .988.199 1.348.561l1.422 1.425c.326.328.76.509 1.222.509s.895-.181 1.222-.508l1.42-1.426c.363-.362.84-.561 1.35-.561h1.069c2.31 0 4.189-1.885 4.189-4.203V7.325c0-2.316-1.88-4.202-4.19-4.202"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.674 18.456c-.3-1.852-2.008-3.572-5.382-3.572-3.362 0-5.063 1.72-5.364 3.572q.154.01.312.011h1.069c.51 0 .988.199 1.348.561l1.422 1.425c.326.328.76.509 1.222.509s.895-.181 1.222-.508l1.42-1.426c.363-.362.84-.561 1.35-.561h1.069q.158 0 .312-.011M8.892 9.701c0 1.88 1.525 3.41 3.4 3.41a3.41 3.41 0 0 0 3.4-3.41 3.41 3.41 0 0 0-3.4-3.41 3.41 3.41 0 0 0-3.4 3.41"
    />
  </Svg>
);
export default IconlystChatProfileBulk;
