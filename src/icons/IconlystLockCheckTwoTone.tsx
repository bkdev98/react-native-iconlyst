import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockCheckTwoTone = ({
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
      d="M16.952 10.417V8.321a4.448 4.448 0 0 0-8.897-.02v2.116M9.965 16.123l1.659 1.661 3.417-3.419"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.804 21.972h5.392c1.595 0 2.393 0 3.009-.296a3 3 0 0 0 1.405-1.405c.296-.616.296-1.414.296-3.01V15.13c0-1.595 0-2.393-.296-3.008a3 3 0 0 0-1.405-1.406c-.616-.296-1.414-.296-3.01-.296H9.805c-1.595 0-2.393 0-3.01.296a3 3 0 0 0-1.404 1.406c-.296.615-.296 1.413-.296 3.008v2.132c0 1.595 0 2.393.296 3.009.295.614.79 1.11 1.405 1.405.616.296 1.414.296 3.009.296"
    />
  </Svg>
);
export default IconlystLockCheckTwoTone;
