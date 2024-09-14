import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftWordBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M9.525 17.62h-2.48a.283.283 0 0 0-.289.3c.125 1.672 1.298 3 3.079 3h7.95c1.82 0 3.09-1.32 3.09-3.21v-.69a.3.3 0 0 0-.3-.3h-8.586a.32.32 0 0 0-.214.086c-.572.526-1.348.814-2.25.814M17.785 3.08h-7.95c-1.78 0-2.954 1.328-3.08 3-.011.165.124.3.29.3h2.48c.902 0 1.67.298 2.24.808a.32.32 0 0 0 .21.082h8.6a.3.3 0 0 0 .3-.3v-.68c0-1.89-1.27-3.21-3.09-3.21" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.365 14.149v-4.3c0-1.23-.69-1.97-1.84-1.97h-4.56c-1.14 0-1.84.76-1.84 1.97v4.3c0 1.22.7 1.97 1.84 1.97h4.56c1.14 0 1.84-.75 1.84-1.97"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.865 9.85v1.1a.3.3 0 0 0 .3.3h7.41a.3.3 0 0 0 .3-.3V9.07a.3.3 0 0 0-.3-.3h-7.46c-.197 0-.34.186-.308.38q.058.337.058.7M12.865 14.15q-.001.357-.056.686c-.033.195.11.384.309.384h7.457a.3.3 0 0 0 .3-.3v-1.87a.3.3 0 0 0-.3-.3h-7.41a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.645 14.42h.04c.32-.02.59-.23.68-.54l.94-3.34c.11-.4-.12-.81-.51-.93a.75.75 0 0 0-.93.52l-.36 1.27-.57-1.36c-.12-.27-.4-.41-.69-.41s-.57.14-.69.41l-.57 1.36-.36-1.27a.755.755 0 0 0-.93-.52c-.4.12-.63.53-.51.93l.94 3.34c.09.31.36.52.67.54.34.02.62-.16.74-.46l.71-1.68.71 1.68c.11.28.39.46.69.46"
    />
  </Svg>
);
export default IconlystMicrosoftWordBulk;
