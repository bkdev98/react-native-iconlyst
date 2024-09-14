import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBulbBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.182 15.908h-1.314a.75.75 0 0 0 0 1.5h1.314a.75.75 0 0 0 0-1.5M18.593 20.297a.75.75 0 1 0-.94 1.168l.234.188a.747.747 0 0 0 1.055-.114.75.75 0 0 0-.115-1.054zM6.55 11.891a.75.75 0 0 0-.914 1.19l.238.182a.745.745 0 0 0 1.051-.138.75.75 0 0 0-.137-1.05zM18.266 13.108l.354-.353a.75.75 0 0 0-1.06-1.062l-.353.353a.75.75 0 0 0 1.059 1.062M5.883 16.087a.75.75 0 0 0-.75-.75H3.818a.75.75 0 0 0 0 1.5h1.315a.75.75 0 0 0 .75-.75M5.531 19.98l-.353.354a.748.748 0 0 0 .531 1.28.74.74 0 0 0 .53-.22l.354-.353a.751.751 0 0 0-1.062-1.06M3.542 5.15c.05.04 2.99 1.93 7.31 1.93.09 0 .17 0 .26-.01v1.2a2.52 2.52 0 0 0-1.75 2.4v1.51c.01-.01.03-.02.05-.03.63-.33 4.33-.34 4.95-.02.02.01.04.02.05.03v-1.49c0-1.14-.76-2.11-1.8-2.42V6.98c2.23-.27 4.74-1.08 7.34-2.87a.75.75 0 0 0-.85-1.24c-7.88 5.4-14.45 1.21-14.73 1.03a.756.756 0 0 0-1.04.22c-.23.34-.13.81.21 1.03M14.412 13.16c-.01-.01-.03-.02-.05-.03-.62-.32-4.32-.31-4.95.02-.02.01-.04.02-.05.03-1 .79-1.65 2.03-1.65 3.4 0 2.08 1.73 5.91 4.19 5.91s4.18-3.83 4.18-5.91c0-1.38-.66-2.63-1.67-3.42"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBulbBold;
