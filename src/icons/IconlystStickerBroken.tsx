import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerBroken = ({
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
      d="M7.782 3C4.834 3 3 5.08 3 8.026v7.948C3 18.919 4.843 21 7.782 21h6.323c.66 0 1.29-.268 1.746-.744l4.475-4.66A2.42 2.42 0 0 0 21 13.918V8.026C21 5.08 19.166 3 16.217 3H12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.676 20.928v-3.414a3.02 3.02 0 0 1 3.014-3.022"
    />
  </Svg>
);
export default IconlystStickerBroken;
