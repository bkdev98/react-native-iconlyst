import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMousePointer2Bulk = ({
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
      d="M6.525 4.19a1.78 1.78 0 0 0-1.934.405 1.78 1.78 0 0 0-.4 1.931l4.296 10.9c.274.692.932 1.139 1.676 1.139h.011a1.79 1.79 0 0 0 1.67-1.16l.688-1.805-.002-.005.857-2.243 1.957-.727.004.004 2.058-.784a1.79 1.79 0 0 0 1.159-1.671 1.79 1.79 0 0 0-1.14-1.685z"
    />
    <Path
      fill={props.color}
      d="m14.395 12.977 5.25 5.253a1 1 0 1 1-1.415 1.415l-.096-.097-.028-.027-5.118-5.119.399-1.05z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMousePointer2Bulk;
