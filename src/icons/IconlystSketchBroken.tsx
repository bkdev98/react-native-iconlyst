import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSketchBroken = ({
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
      d="m19.413 13.532 1.826-2.007a1.96 1.96 0 0 0 .17-2.423l-2.942-4.32a1.96 1.96 0 0 0-1.62-.858H8.662a1.96 1.96 0 0 0-1.619.856l-2.95 4.322a1.96 1.96 0 0 0 .168 2.424l7.306 8.027a1.6 1.6 0 0 0 2.366 0l3.303-3.628"
    />
  </Svg>
);
export default IconlystSketchBroken;
