import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinterestBroken = ({
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
      d="M8.333 13.733a4 4 0 0 1-.34-.803 4 4 0 0 1-.165-1.128c0-2.434 2.24-4.407 5.002-4.407 2.763 0 4.682 2.023 4.682 4.458M11.268 13.305c-.288 1.753.96 2.971 2.656 2.882 1.257-.067 2.208-.74 2.814-1.669M9.61 20.385l2.195-9.367"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.75 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-5.344-8.226"
    />
  </Svg>
);
export default IconlystPinterestBroken;
