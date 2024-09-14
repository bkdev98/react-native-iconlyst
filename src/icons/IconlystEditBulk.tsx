import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEditBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M19.993 18.953h-5.695c-.555 0-1.007.46-1.007 1.024S13.743 21 14.298 21h5.695c.555 0 1.007-.458 1.007-1.023s-.452-1.024-1.007-1.024"
        opacity={0.4}
      />
      <Path d="m10.309 6.904 5.396 4.36a.31.31 0 0 1 .05.429L9.36 20.028a2.1 2.1 0 0 1-1.63.817l-3.492.043a.4.4 0 0 1-.392-.312l-.793-3.45c-.138-.634 0-1.29.402-1.795l6.429-8.376a.3.3 0 0 1 .426-.051" />
      <Path
        d="m18.12 8.665-1.04 1.299a.3.3 0 0 1-.423.048c-1.265-1.023-4.503-3.65-5.401-4.377a.31.31 0 0 1-.043-.432l1.003-1.246c.91-1.172 2.497-1.28 3.778-.258l1.47 1.172c.604.473 1.006 1.096 1.143 1.752.16.721-.01 1.43-.486 2.042"
        opacity={0.4}
      />
    </G>
  </Svg>
);
export default IconlystEditBulk;
