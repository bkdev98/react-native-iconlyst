import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatVoicecallBulk = ({
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
      d="M17.362 3.123H7.24c-2.31 0-4.19 1.885-4.19 4.202v6.939c0 2.318 1.88 4.203 4.19 4.203h1.069c.502 0 .994.204 1.348.561l1.42 1.425a1.72 1.72 0 0 0 1.224.509c.462 0 .896-.181 1.222-.508l1.422-1.427c.355-.355.847-.56 1.349-.56h1.068c2.309 0 4.189-1.885 4.189-4.203V7.325c0-2.317-1.88-4.202-4.19-4.202"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.3 13.464h-.003l-.003-.001H9.3a2.642 2.642 0 0 1 0-5.283 2.64 2.64 0 0 1 2.635 2.642c0 .41-.102.794-.27 1.14h1.272a2.6 2.6 0 0 1-.27-1.14 2.64 2.64 0 0 1 2.637-2.642 2.64 2.64 0 0 1 2.635 2.642 2.64 2.64 0 0 1-2.635 2.642h-.005m-4.866-2.642a1.14 1.14 0 0 1-1.13 1.14h-.008a1.14 1.14 0 0 1-1.133-1.14c0-.63.51-1.142 1.136-1.142a1.14 1.14 0 0 1 1.135 1.142m3.734 0c0-.63.51-1.142 1.136-1.142a1.14 1.14 0 0 1 1.135 1.142c0 .63-.508 1.14-1.133 1.141h-.007a1.14 1.14 0 0 1-1.131-1.14"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatVoicecallBulk;
