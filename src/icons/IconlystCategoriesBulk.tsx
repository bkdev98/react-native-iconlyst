import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCategoriesBulk = ({
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
      fill={props.color}
      d="m18.493 12.715-2.91 1.706a5.13 5.13 0 0 1-5.183 0l-2.951-1.73-2.115 1.407a2.09 2.09 0 0 0-.934 1.808 2.08 2.08 0 0 0 1.036 1.75l5.694 3.338a3.67 3.67 0 0 0 3.72 0l5.674-3.326a2.09 2.09 0 0 0 1.037-1.76 2.09 2.09 0 0 0-.948-1.807z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.132 13.128a3.68 3.68 0 0 0 3.72 0l5.544-3.25a2.08 2.08 0 0 0 1.039-1.811 2.08 2.08 0 0 0-1.038-1.811l-5.545-3.251-.001-.001a3.69 3.69 0 0 0-3.72 0L5.588 6.257a2.08 2.08 0 0 0-1.038 1.81 2.08 2.08 0 0 0 1.038 1.812z"
    />
  </Svg>
);
export default IconlystCategoriesBulk;
