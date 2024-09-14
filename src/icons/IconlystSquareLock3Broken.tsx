import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareLock3Broken = ({
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
      d="M13.483 12.337c.515-.38.851-.985.851-1.674a2.084 2.084 0 1 0-4.17 0c0 .69.338 1.294.853 1.674l-.646 1.943a.883.883 0 0 0 .838 1.162h2.081a.884.884 0 0 0 .839-1.162z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.51 12.398h4.674m-14.934 0h7.746M8.034 3.008c-2.949 0-4.784 2.08-4.784 5.026v7.948c0 2.945 1.835 5.026 4.783 5.026h8.435c2.939 0 4.782-2.081 4.782-5.026V8.034c0-2.945-1.834-5.026-4.782-5.026h-4.875"
    />
  </Svg>
);
export default IconlystSquareLock3Broken;
