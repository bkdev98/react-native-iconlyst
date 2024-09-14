import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarStickerBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 3.063H7.782C4.834 3.063 3 5.143 3 8.089v7.947c0 2.945 1.843 5.026 4.782 5.026h6.323c.66 0 1.29-.268 1.746-.744l4.475-4.66c.433-.45.674-1.051.674-1.676V8.09c0-2.945-1.834-5.026-4.784-5.026h-.722"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.676 20.99v-3.413a3.02 3.02 0 0 1 3.014-3.022M11.484 8.488H9.03a1.321 1.321 0 0 0 0 2.643h1.51a1.321 1.321 0 1 1 0 2.643H8.087M9.785 13.772v1.11m0-7.51V8.49"
    />
  </Svg>
);
export default IconlystDollarStickerBroken;
