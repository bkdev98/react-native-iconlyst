import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingDownLight = ({
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
      d="M19.138 12.328c.957-2.583.015-6.002-1.662-7.679-2.14-2.14-8.12-2.302-10.077.132-1.243 1.545-2.208 3.42-2.817 5.1-.326.901.153 1.873 1.048 2.216.792.304 1.689.026 2.17-.672L9.002 9.68v9.64a1.68 1.68 0 0 0 3.361.025l.067-4.347c2.351-.225 5.757-.103 6.708-2.67"
    />
  </Svg>
);
export default IconlystPointingDownLight;