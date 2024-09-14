import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongsLibraryOutline = ({
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
      d="M2.5 4.4a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M2.5 9.166a.75.75 0 0 1 .75-.75h9.143a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M2.5 13.932a.75.75 0 0 1 .75-.75h6.27a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M2.5 18.697a.75.75 0 0 1 .75-.75h3.644a.75.75 0 0 1 0 1.5H3.25a.75.75 0 0 1-.75-.75M15.284 14.037a19.6 19.6 0 0 0 0 4.191c.042.316.18.476.31.548.134.076.375.124.735-.017 1.15-.465 2.2-1.148 3.038-1.907.284-.262.374-.522.373-.728-.001-.207-.095-.462-.37-.711l-.003-.003c-.883-.807-1.9-1.44-3.045-1.909l-.006-.002c-.299-.126-.543-.096-.699-.014-.144.075-.29.235-.333.552m1.61-1.923c-.653-.273-1.37-.274-1.974.043-.616.323-1.025.931-1.124 1.691l-.002.013a21 21 0 0 0 0 4.53l.001.016c.09.717.456 1.335 1.063 1.677.604.34 1.33.343 2.024.07l.006-.003a11.9 11.9 0 0 0 3.489-2.19l.004-.003c.546-.503.863-1.15.859-1.842-.004-.69-.325-1.327-.862-1.813a11.7 11.7 0 0 0-3.484-2.189"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongsLibraryOutline;
