import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockAiLight = ({
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
      d="M16.448 9.458V7.362a4.448 4.448 0 0 0-8.897-.02v2.116M9.304 21.013h5.392c1.595 0 2.393 0 3.008-.296a3 3 0 0 0 1.406-1.405c.296-.616.296-1.414.296-3.01v-2.131c0-1.595 0-2.393-.296-3.008a3 3 0 0 0-1.406-1.406c-.615-.296-1.413-.296-3.008-.296H9.304c-1.596 0-2.393 0-3.009.296a3 3 0 0 0-1.406 1.406c-.295.615-.295 1.413-.295 3.008v2.132c0 1.595 0 2.393.295 3.009a3 3 0 0 0 1.406 1.405c.616.296 1.413.296 3.009.296"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.326 16.94-.087-.236a3.24 3.24 0 0 0-1.912-1.914l-.235-.087.235-.087A3.24 3.24 0 0 0 10.24 12.7l.087-.235.086.235a3.24 3.24 0 0 0 1.912 1.915l.235.087-.235.087a3.24 3.24 0 0 0-1.912 1.914zM14.895 18.008a1.52 1.52 0 0 0-1.013-1.014 1.52 1.52 0 0 0 1.013-1.014c.147.486.527.866 1.012 1.014a1.52 1.52 0 0 0-1.012 1.014"
    />
  </Svg>
);
export default IconlystLockAiLight;
