import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageDownloadBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path
        fillRule="evenodd"
        d="M8.558 2.5c-1.593 0-2.927.568-3.86 1.568-.928.996-1.423 2.382-1.423 3.958v.716h19v-.716c0-1.576-.492-2.961-1.42-3.958-.932-1-2.265-1.568-3.863-1.568z"
        clipRule="evenodd"
      />
      <Path d="M3.275 10.242v5.73c0 1.577.492 2.963 1.42 3.96.932 1 2.266 1.567 3.863 1.567h8.434c1.598 0 2.931-.567 3.863-1.568.928-.997 1.42-2.382 1.42-3.958v-5.73z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.064 5.8a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5zm2.486 0a.75.75 0 0 0 0 1.5h.055a.75.75 0 0 0 0-1.5zm2.486 0a.75.75 0 0 0 0 1.5h.056a.75.75 0 0 0 0-1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.068 10.242v5.352l-1.316-1.316a.75.75 0 0 0-1.06 1.06l2.595 2.598a.75.75 0 0 0 1.061 0l2.597-2.597a.75.75 0 0 0-1.06-1.06l-1.317 1.316v-5.353z"
    />
  </Svg>
);
export default IconlystWebPageDownloadBulk;
