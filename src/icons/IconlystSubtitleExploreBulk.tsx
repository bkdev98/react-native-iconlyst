import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleExploreBulk = ({
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
      d="M12.774 16.756c-.16-3.033 2.406-5.65 5.405-5.65 1.346 0 2.575.494 3.522 1.309.21.18.57.04.57-.237V9.495a.3.3 0 0 0-.3-.3H3.586a.3.3 0 0 0-.3.3v5.881c0 3.28 1.968 5.24 5.266 5.24h5.288c.278 0 .418-.36.237-.571a5.5 5.5 0 0 1-1.304-3.289"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.914 4.537c-.916-.92-2.265-1.404-3.901-1.404h-8.46c-2.964 0-4.832 1.572-5.183 4.234a.29.29 0 0 0 .29.325H21.9a.29.29 0 0 0 .291-.324c-.147-1.149-.57-2.123-1.277-2.831"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.981 16.452h2.211a.75.75 0 0 0 0-1.5h-2.21a.75.75 0 0 0 0 1.5M9.696 11.502H8.043a.75.75 0 0 0 0 1.5h1.653a.75.75 0 0 0 0-1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.18 18.682a2.17 2.17 0 0 1-2.166-2.17 2.166 2.166 0 0 1 4.332 0c0 1.196-.973 2.17-2.166 2.17m3.98.897-.974-.969a3.66 3.66 0 0 0 .66-2.098 3.67 3.67 0 0 0-3.666-3.66 3.67 3.67 0 0 0-3.666 3.66 3.67 3.67 0 0 0 3.666 3.67c.7 0 1.357-.198 1.915-.542l1.01 1.004a.746.746 0 0 0 1.06-.004.75.75 0 0 0-.005-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.443 11.508h2.211a.75.75 0 0 1 0 1.5h-2.21a.75.75 0 0 1 0-1.5"
    />
  </Svg>
);
export default IconlystSubtitleExploreBulk;
