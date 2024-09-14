import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockBroken = ({
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
      d="M16.7 9.4V7.304a4.449 4.449 0 0 0-8.897-.02V9.4M9.662 13.578h5.177m-5.177 3.317h5.177M15.75 21.02c1.595 0 1.589 0 2.205-.295a3 3 0 0 0 1.405-1.406c.296-.615.296-1.413.296-3.008v-2.132c0-1.596 0-2.393-.296-3.009a3 3 0 0 0-1.405-1.406c-.616-.295-1.414-.295-3.01-.295H9.555c-1.595 0-2.393 0-3.01.295A3 3 0 0 0 5.14 11.17c-.296.616-.296 1.413-.296 3.009v2.132c0 1.595 0 2.393.296 3.008a3 3 0 0 0 1.405 1.406c.616.296 1.414.296 3.009.296h2.696"
    />
  </Svg>
);
export default IconlystLockBroken;
