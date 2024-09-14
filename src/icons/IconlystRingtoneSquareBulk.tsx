import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSquareBulk = ({
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
      d="M16.22 2.5H7.78C4.62 2.5 2.5 4.72 2.5 8.03v7.95c0 3.3 2.12 5.52 5.28 5.52h8.44c3.16 0 5.28-2.22 5.28-5.52V8.03c0-3.31-2.12-5.53-5.28-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.88 13.1c.2 2.36 2.48 2.36 5.12 2.36 2.65 0 4.93 0 5.13-2.42 0-.937-.298-1.447-.538-1.856l-.002-.004-.007-.013c-.217-.384-.393-.696-.393-1.487 0-1.91-1.68-3.94-4.19-3.94-2.5 0-4.18 2.03-4.18 3.94 0 .8-.18 1.11-.41 1.5l-.017.031c-.228.405-.513.913-.513 1.83zm3.87 4.78h2.51a.749.749 0 1 0 0-1.5h-2.51a.749.749 0 1 0 0 1.5M12 13.96c3.11 0 3.56-.21 3.63-.98 0-.472-.136-.702-.33-1.033l-.01-.017c-.27-.47-.6-1.05-.6-2.25 0-1-.96-2.44-2.69-2.44S9.32 8.68 9.32 9.68c0 1.189-.333 1.769-.602 2.237l-.008.013-.014.025c-.182.326-.306.548-.316 1.055.07.74.56.95 3.62.95"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneSquareBulk;
