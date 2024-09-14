import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWaterDropLight = ({
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
      d="M12.865 12.397s3.079 2.838 3.033 5.686v.003c.032 1.622-1.53 2.803-3.033 2.784-1.502.019-3.065-1.162-3.033-2.784v-.003c-.046-2.849 3.033-5.686 3.033-5.686M6.05 4.583s3.08 2.837 3.033 5.686v.003c.032 1.622-1.53 2.803-3.032 2.784-1.503.019-3.065-1.162-3.033-2.784v-.003C2.972 7.42 6.05 4.583 6.05 4.583M18.258 3.13s2.998 2.763 2.953 5.537v.003c.031 1.579-1.49 2.729-2.953 2.71-1.462.018-2.984-1.131-2.953-2.71v-.003c-.045-2.774 2.953-5.537 2.953-5.537"
    />
  </Svg>
);
export default IconlystWaterDropLight;
