import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentDash2Outline = ({
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
      d="M8.385 2.25h5.65c.762 0 1.492.31 2.02.861l3.792 3.95A2.8 2.8 0 0 1 20.627 9v2.996a.75.75 0 0 1-1.5 0V9a1.3 1.3 0 0 0-.362-.9l-3.792-3.95a1.3 1.3 0 0 0-.938-.4H8.381a2.997 2.997 0 0 0-3.008 2.917v5.33a.75.75 0 0 1-1.5 0V6.64a4.497 4.497 0 0 1 4.512-4.39"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.52 2.313a.75.75 0 0 1 .75.75v2.892a1.81 1.81 0 0 0 1.805 1.811h2.739a.75.75 0 0 1 0 1.5h-2.742a3.31 3.31 0 0 1-3.302-3.31V3.061a.75.75 0 0 1 .75-.75M4.62 14.523a.75.75 0 0 1 .75.75v1.908a3.013 3.013 0 0 0 2.937 3.07h2.394a.75.75 0 0 1 0 1.5H8.28a4.513 4.513 0 0 1-4.41-4.59v-1.888a.75.75 0 0 1 .75-.75M19.882 14.523a.75.75 0 0 1 .75.75v1.892a4.576 4.576 0 0 1-4.408 4.587h-2.378a.75.75 0 1 1 0-1.5h2.36a3.076 3.076 0 0 0 2.926-3.081v-1.898a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentDash2Outline;
