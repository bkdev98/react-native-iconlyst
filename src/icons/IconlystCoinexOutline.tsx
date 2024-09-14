import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinexOutline = ({
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
      d="M12.772 21.75a9.75 9.75 0 1 1 8.63-14.272.75.75 0 0 1-.134.876l-2.483 2.483a.75.75 0 0 1-1.06-1.06l2.08-2.081a8.25 8.25 0 1 0-.02 8.641l-5.788-5.782a2.05 2.05 0 0 0-3.5 1.444 2.04 2.04 0 0 0 .6 1.443 2.09 2.09 0 0 0 2.885 0 .748.748 0 0 1 1.233.236.75.75 0 0 1-.172.824 3.625 3.625 0 0 1-5.007 0 3.54 3.54 0 0 1 2.507-6.045c.94 0 1.842.373 2.508 1.036l6.194 6.188a.75.75 0 0 1 .133.88 9.71 9.71 0 0 1-8.606 5.189"
    />
  </Svg>
);
export default IconlystCoinexOutline;
