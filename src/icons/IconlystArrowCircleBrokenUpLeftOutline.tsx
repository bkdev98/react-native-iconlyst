import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowCircleBrokenUpLeftOutline = ({
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
      d="M8.974 8.991a.75.75 0 0 1 .532-.22l4.28.008a.75.75 0 0 1-.003 1.5l-2.464-.004 7.501 7.501a.75.75 0 0 1-1.06 1.06l-7.501-7.5.005 2.46a.75.75 0 1 1-1.5.004l-.01-4.277c0-.2.08-.39.22-.532"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.81 6.156a8.25 8.25 0 1 0-4.081 13.897.75.75 0 1 1 .317 1.466 9.74 9.74 0 0 1-8.965-2.635c-3.807-3.807-3.808-9.98 0-13.788s9.982-3.808 13.789 0a9.74 9.74 0 0 1 2.634 8.964.75.75 0 1 1-1.466-.317 8.24 8.24 0 0 0-2.229-7.587"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowCircleBrokenUpLeftOutline;
