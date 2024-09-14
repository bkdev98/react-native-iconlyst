import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarEmojiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.603 4.168 1.828 3.653c.18.36.528.608.927.664l4.09.59a1.211 1.211 0 0 1 .682 2.071l-2.958 2.842c-.291.277-.424.68-.354 1.076l.7 4.012a1.228 1.228 0 0 1-1.788 1.28l-3.654-1.894a1.25 1.25 0 0 0-1.147 0l-3.656 1.895a1.228 1.228 0 0 1-1.787-1.28l.7-4.013a1.2 1.2 0 0 0-.354-1.075L3.87 11.147a1.211 1.211 0 0 1 .682-2.072l4.09-.589c.399-.056.746-.304.928-.664l1.83-3.654a1.24 1.24 0 0 1 2.202 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.867 14.523c.403.456.928.784 1.61.792.714.007 1.227-.331 1.656-.792"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M14.376 11.242zM10.626 11.242z"
    />
  </Svg>
);
export default IconlystStarEmojiTwoTone;
