import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarStickerLight = ({
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
      d="M15.851 20.318a2.42 2.42 0 0 1-1.746.744H7.782c-2.94 0-4.782-2.08-4.782-5.026V8.09c0-2.945 1.834-5.026 4.782-5.026h8.434c2.95 0 4.784 2.08 4.784 5.026v5.893c0 .625-.241 1.225-.674 1.676z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.676 20.99v-3.413a3.02 3.02 0 0 1 3.014-3.022h3.233M11.484 8.488H9.03a1.321 1.321 0 0 0 0 2.643h1.51a1.321 1.321 0 1 1 0 2.643H8.087M9.785 13.772v1.11m0-7.51V8.49"
    />
  </Svg>
);
export default IconlystDollarStickerLight;
