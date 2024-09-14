import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSubtitleExploreBold = ({
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
      d="M20.914 4.537c-.916-.92-2.265-1.404-3.901-1.404h-8.46c-2.964 0-4.832 1.572-5.183 4.234a.29.29 0 0 0 .29.325H21.9a.29.29 0 0 0 .291-.324c-.147-1.149-.57-2.123-1.277-2.831M10.192 16.452h-2.21a.75.75 0 0 1 0-1.5h2.21a.75.75 0 0 1 0 1.5m-2.149-4.95h1.653a.75.75 0 0 1 0 1.5H8.043a.75.75 0 0 1 0-1.5m4.731 5.25c-.009-.165-.147-.294-.3-.358a.75.75 0 0 1-.469-.692.75.75 0 0 1 .75-.75c.128 0 .257-.055.299-.176.152-.447.361-.868.618-1.254.143-.213-.002-.52-.258-.52H12.4a.75.75 0 0 1 0-1.5h2.342c.168 0 .32.058.442.153.133.104.317.159.466.08a5.384 5.384 0 0 1 6.05.676c.21.18.57.04.57-.237V9.49a.3.3 0 0 0-.3-.3H3.586a.3.3 0 0 0-.3.3v5.881c0 3.28 1.968 5.24 5.266 5.24h5.288c.278 0 .418-.36.237-.571a5.5 5.5 0 0 1-1.304-3.289"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.18 18.683a2.17 2.17 0 0 1-2.167-2.17 2.166 2.166 0 0 1 4.332 0c0 1.195-.972 2.17-2.166 2.17m3.98.896-.974-.969a3.66 3.66 0 0 0 .66-2.097 3.67 3.67 0 0 0-3.667-3.66 3.67 3.67 0 0 0-3.666 3.66 3.67 3.67 0 0 0 3.666 3.67c.701 0 1.357-.198 1.915-.543l1.01 1.005a.746.746 0 0 0 1.06-.005.75.75 0 0 0-.004-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSubtitleExploreBold;
