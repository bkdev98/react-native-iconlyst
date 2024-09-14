import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentStarBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.25 10.452.814 1.637c.04.082.12.14.21.152l1.822.264c.074.01.14.049.186.107a.27.27 0 0 1-.03.363l-1.32 1.276a.27.27 0 0 0-.08.247l.316 1.801a.276.276 0 0 1-.23.314.3.3 0 0 1-.18-.029l-1.623-.85a.27.27 0 0 0-.26 0l-1.635.855a.284.284 0 0 1-.378-.116.28.28 0 0 1-.029-.175l.316-1.801a.28.28 0 0 0-.078-.247l-1.328-1.276a.277.277 0 0 1 0-.39q.069-.063.159-.079l1.822-.264a.28.28 0 0 0 .211-.154l.813-1.635a.277.277 0 0 1 .374-.125q.084.04.128.125"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.374 12.798V6.657A3.746 3.746 0 0 1 8.134 3h5.652c.557 0 1.092.227 1.478.63l3.791 3.95c.367.38.571.89.571 1.42v8.163A3.81 3.81 0 0 1 15.97 21l-7.926-.001a3.753 3.753 0 0 1-3.67-3.836V16.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.269 5.953a2.56 2.56 0 0 0 2.554 2.56h2.738"
    />
  </Svg>
);
export default IconlystDocumentStarBroken;
