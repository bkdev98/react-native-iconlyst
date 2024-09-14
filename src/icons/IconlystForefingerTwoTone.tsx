import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForefingerTwoTone = ({
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
      d="m13.234 8.97-.067-4.324a1.672 1.672 0 0 0-3.343.026v9.858a.64.64 0 0 1-.96.555l-1.226-.708a1.95 1.95 0 0 0-2.88 1.266c-.158.71.093 1.45.672 1.892 1.013.772 2.707 1.98 4.322 2.752"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.233 8.969c2.34.223 5.727.102 6.673 2.656.952 2.57.016 5.97-1.653 7.638-1.912 1.912-5.971 2.23-8.501 1.022"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystForefingerTwoTone;
