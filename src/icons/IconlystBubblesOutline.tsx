import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBubblesOutline = ({
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
      d="M16.57 13.37a5.56 5.56 0 0 1-5.56-5.56c0-3.07 2.5-5.56 5.56-5.56s5.56 2.49 5.56 5.56a5.56 5.56 0 0 1-5.56 5.56m0-9.62c-2.24 0-4.06 1.82-4.06 4.06s1.82 4.06 4.06 4.06 4.06-1.82 4.06-4.06-1.82-4.06-4.06-4.06M7.34 18.15a4.24 4.24 0 0 1-4.24-4.23c0-2.33 1.9-4.24 4.24-4.24s4.24 1.9 4.24 4.24-1.9 4.23-4.24 4.23m0-6.97c-1.51 0-2.74 1.23-2.74 2.74s1.23 2.73 2.74 2.73 2.74-1.22 2.74-2.73-1.23-2.74-2.74-2.74M16.339 21.75c-1.96 0-3.56-1.6-3.56-3.56s1.6-3.56 3.56-3.56 3.56 1.6 3.56 3.56-1.6 3.56-3.56 3.56m0-5.62c-1.14 0-2.06.92-2.06 2.06s.92 2.06 2.06 2.06 2.06-.92 2.06-2.06-.92-2.06-2.06-2.06"
    />
  </Svg>
);
export default IconlystBubblesOutline;
