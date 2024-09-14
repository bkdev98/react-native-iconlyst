import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallBaseball2Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.498 11.8c0 .5-.03 1.01-.09 1.5a9.5 9.5 0 0 1-2.69 5.42 9.53 9.53 0 0 1-6.73 2.78c-.06 0-.13 0-.19-.01-.76-.01-1.51-.12-2.26-.31a9.54 9.54 0 0 1-6.72-6.72 9.8 9.8 0 0 1-.31-2.26c-.02-.5.01-1.01.08-1.5a9.56 9.56 0 0 1 2.69-5.42 9.5 9.5 0 0 1 5.42-2.69c.49-.06 1-.09 1.5-.09 2.36.05 4.71.98 6.52 2.78a9.51 9.51 0 0 1 2.78 6.52"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.498 11.8c0 .5-.03 1.01-.09 1.5-.05.01-.1.01-.15.01-1.31 0-2.6-.26-3.81-.73l-.42.85c-.13.26-.39.41-.67.41-.11 0-.23-.02-.33-.08a.74.74 0 0 1-.34-1l.41-.81a10.2 10.2 0 0 1-1.75-1.23l-.73.72c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.73-.73c-.47-.54-.88-1.13-1.23-1.75l-.81.41a.753.753 0 0 1-1.01-.33.747.747 0 0 1 .33-1.01l.84-.42c-.48-1.25-.73-2.59-.71-3.96.49-.06 1-.09 1.5-.09a9.2 9.2 0 0 0 .56 3.38c.37-.18.82-.03 1 .33.19.38.04.83-.33 1.01l-.03.01c.28.48.59.94.95 1.36l.39-.39c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.39.39c.42.36.88.68 1.36.95l.01-.02c.19-.37.64-.52 1.01-.34s.51.63.33 1a9.2 9.2 0 0 0 3.38.56M13.428 17.03l-.84.42c.48 1.25.73 2.59.71 3.96-.43.06-.87.09-1.31.09-.06 0-.13 0-.19-.01.03-1.15-.17-2.3-.56-3.36-.11.05-.22.07-.33.07a.75.75 0 0 1-.34-1.42l.03-.01c-.28-.48-.59-.93-.95-1.36l-.39.39c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.39-.39c-.42-.36-.88-.67-1.36-.95l-.01.03a.753.753 0 0 1-1.01.33.744.744 0 0 1-.33-1 9.2 9.2 0 0 0-3.37-.56c-.02-.5.01-1.01.08-1.5 1.36-.02 2.71.23 3.96.71l.42-.83c.18-.37.63-.52 1-.34.37.19.53.64.34 1.01l-.41.81c.62.35 1.21.76 1.75 1.23l.73-.73c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.73.73c.47.54.88 1.13 1.23 1.75l.81-.41c.38-.18.83-.03 1.01.34.19.37.04.82-.33 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallBaseball2Bulk;
