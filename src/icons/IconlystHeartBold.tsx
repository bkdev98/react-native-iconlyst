import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M8.28 2.5q.945.03 1.83.33h.06q.06.03.09.06c.22.07.43.15.63.26l.38.17c.15.08.33.23.43.29s.21.12.3.19a6.26 6.26 0 0 1 3.85-1.3c.63 0 1.26.09 1.86.29 3.69 1.2 5.02 5.25 3.91 8.79a12.7 12.7 0 0 1-3.01 4.81 38.5 38.5 0 0 1-6.33 4.96l-.25.15-.26-.16a38 38 0 0 1-6.37-4.96 12.9 12.9 0 0 1-3.01-4.8c-1.13-3.54.2-7.59 3.93-8.81.29-.1.59-.17.89-.21h.12q.42-.06.84-.06Zm8.91 3.16a.8.8 0 0 0-1.01.5c-.14.42.08.88.5 1.03.64.24 1.07.87 1.07 1.57v.03a.86.86 0 0 0 .19.62c.14.17.35.27.57.29.41-.01.76-.34.79-.76v-.12a3.3 3.3 0 0 0-2.11-3.16"
    />
  </Svg>
);
export default IconlystHeartBold;
