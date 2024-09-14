import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLibraryLight = ({
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
      d="M3 19.148h7.118M3 14.383h4.432M3 4.852h18M3 9.617h7.011M18.898 17.05l2.101 2.097m-4.709-8.735a3.831 3.831 0 1 1 0 7.663 3.831 3.831 0 0 1 0-7.663"
    />
  </Svg>
);
export default IconlystSearchLibraryLight;
