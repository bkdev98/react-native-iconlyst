import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLock2Broken = ({
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
      d="M13.483 12.336a2.07 2.07 0 0 0 .851-1.673 2.084 2.084 0 1 0-4.17 0c0 .69.338 1.294.853 1.673l-.646 1.943a.884.884 0 0 0 .838 1.163h2.081a.883.883 0 0 0 .838-1.163z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.25 8.576.001-2.701m0 9.566v5.568M3.25 16.224c0 2.949 2.081 4.784 5.026 4.784h7.948c2.945 0 5.026-1.835 5.026-4.783V7.79c0-2.94-2.081-4.782-5.026-4.782H8.276c-2.945 0-5.026 1.834-5.026 4.782v4.875"
    />
  </Svg>
);
export default IconlystSquareLock2Broken;
