import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFishBoneOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M15.937 10.52h-7.96c-.21 0-.41-.09-.55-.24a.78.78 0 0 1-.2-.57c.13-1.69 1.37-4.96 4.29-7.03.26-.18.61-.18.87 0 2.92 2.06 4.17 5.33 4.29 7.03a.757.757 0 0 1-.75.81zm-7.06-1.5h6.17c-.32-1.22-1.18-3.25-3.08-4.78-1.9 1.53-2.77 3.56-3.08 4.78zM15.377 22.05h-.05c-.96-.06-2.47-.76-3.37-1.98-.9 1.23-2.41 1.93-3.37 1.98a.736.736 0 0 1-.79-.7c-.02-.41.29-.77.7-.79.79-.05 2.71-1.06 2.71-2.72 0-.41.34-.75.75-.75s.75.34.75.75c0 1.66 1.93 2.67 2.71 2.72.41.02.73.38.7.79-.02.4-.35.7-.75.7z"
    />
    <Path
      fill={props.color}
      d="M11.957 18.65c-.41 0-.75-.34-.75-.75V9.77c0-.41.34-.75.75-.75s.75.34.75.75v8.13c0 .41-.34.75-.75.75M11.957 7.541c-.41 0-.75-.33-.75-.74 0-.42.34-.76.75-.76s.75.34.75.75-.34.75-.75.75"
    />
    <Path
      fill={props.color}
      d="M8.097 14.22a.76.76 0 0 1-.72-.52c-.12-.4.1-.82.49-.94 3.18-1 5.03-1 8.26 0 .4.12.62.54.49.94-.12.4-.54.62-.94.49-2.94-.91-4.46-.91-7.36 0-.08.02-.15.03-.23.03zM14.077 17.01c-.07 0-.15-.01-.22-.03-1.51-.47-2.24-.47-3.71 0-.4.12-.82-.1-.94-.49-.12-.4.1-.82.49-.94 1.77-.56 2.81-.56 4.61 0 .4.12.62.54.49.94-.1.32-.4.53-.72.53zM19.157 19.86c-.19 0-.38-.07-.53-.22l-.71-.71a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.71.71c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22M19.227 15.92a.749.749 0 1 1 0-1.5h1.01c.39 0 .75.33.75.75 0 .41-.33.75-.75.75zM18.407 12.7c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.75-.75c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.75.75c-.15.15-.34.22-.53.22M4.957 19.881c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.71-.71c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.71.71c-.15.15-.34.22-.53.22M4.897 15.94h-1.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.01c.41 0 .75.34.75.75s-.34.75-.75.75M5.707 12.721c-.19 0-.38-.07-.53-.22l-.75-.75a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.75.75c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
  </Svg>
);
export default IconlystFishBoneOutline;