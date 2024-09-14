import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockOpenTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 15.154v2.162M16.695 6.92a4.438 4.438 0 0 0-8.63 1.429v2.11"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.804 21.98h5.392c1.595 0 2.393 0 3.009-.296a3 3 0 0 0 1.405-1.406c.296-.615.296-1.413.296-3.008v-2.132c0-1.596 0-2.393-.296-3.009a3 3 0 0 0-1.405-1.406c-.616-.295-1.414-.295-3.01-.295H9.805c-1.595 0-2.393 0-3.01.295A3 3 0 0 0 5.39 12.13c-.296.616-.296 1.413-.296 3.009v2.132c0 1.595 0 2.393.296 3.008a3 3 0 0 0 1.405 1.406c.616.296 1.414.296 3.009.296"
    />
  </Svg>
);
export default IconlystLockOpenTwoTone;
