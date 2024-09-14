import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserHearingLight = ({
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
      d="M5.642 19.999c0-2.109 1.663-4.733 6.458-4.733s6.458 2.606 6.458 4.715"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.275 8.125a4.126 4.126 0 1 1-8.252 0 4.126 4.126 0 0 1 8.252 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.952 5.617c.476.72.754 1.582.754 2.509s-.278 1.79-.754 2.509M5.349 5.617a4.53 4.53 0 0 0-.754 2.509c0 .927.277 1.79.754 2.509"
    />
  </Svg>
);
export default IconlystUserHearingLight;
