import * as React from 'react';
import Svg, { Ellipse, Circle, G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHuckleberryTwoTone = ({
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
    <Ellipse
      cx={14.609}
      cy={15.946}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2.108}
      ry={2.077}
    />
    <Circle
      cx={7.627}
      cy={11.352}
      r={2.077}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="rotate(33.775 7.627 11.352)"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M11.6 21c-.824-1.614-1.978-5.738 0-9.317 1.98-3.58 6.23-3.456 8.107-2.948-.72 1.544-3.21 4.296-7.422 2.948M11.185 8.993C12.052 5.979 9.68 3.742 8.388 3c-1.053 2.89 1.05 4.246 2.797 5.993" />
      <Path d="M10.508 17.983c-1.517-2.744-4.776-2.65-6.215-2.26 1.3 2.789 3.745 2.26 6.215 2.26" />
    </G>
  </Svg>
);
export default IconlystHuckleberryTwoTone;
