import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleBulk = ({
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
      d="M21.955 7.818a.29.29 0 0 0 .292-.324c-.147-1.149-.57-2.123-1.277-2.831-.916-.92-2.266-1.405-3.901-1.405h-8.46c-2.965 0-4.835 1.573-5.185 4.235a.29.29 0 0 0 .292.325z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.642 9.32a.3.3 0 0 0-.3.3v5.881c0 3.28 1.969 5.24 5.268 5.24h8.45c3.298 0 5.266-1.93 5.266-5.16v-5.96a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.693 16.583h1.938a.75.75 0 0 0 0-1.5h-1.938a.75.75 0 1 0 0 1.5M11.707 12.383c0 .414.336.75.75.75h2.341a.75.75 0 0 0 0-1.5h-2.34a.75.75 0 0 0-.75.75M12.811 16.583h.01a.746.746 0 0 0 .745-.75.755.755 0 0 0-.755-.75.75.75 0 0 0 0 1.5M8.037 16.583h2.211a.75.75 0 0 0 0-1.5h-2.21a.75.75 0 0 0 0 1.5M9.752 11.633H8.098a.75.75 0 0 0 0 1.5h1.654a.75.75 0 0 0 0-1.5M17.596 11.633h-.01a.746.746 0 0 0-.745.75c0 .414.341.75.755.75a.75.75 0 0 0 0-1.5"
    />
  </Svg>
);
export default IconlystSubtitleBulk;
