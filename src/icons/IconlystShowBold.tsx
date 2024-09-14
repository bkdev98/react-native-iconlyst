import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowBold = ({
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
      d="M12 4c2.068 0 4.03.718 5.737 2.046 1.707 1.319 3.16 3.249 4.204 5.663a.73.73 0 0 1 0 .572C19.854 17.111 16.137 20 12 20h-.01c-4.127 0-7.844-2.89-9.931-7.719a.73.73 0 0 1 0-.572C4.146 6.88 7.863 4 11.99 4Zm0 4.121c-2.156 0-3.902 1.736-3.902 3.879 0 2.133 1.746 3.87 3.902 3.87 2.146 0 3.893-1.737 3.893-3.87A3.887 3.887 0 0 0 12 8.121m.001 1.453a2.43 2.43 0 0 1 2.43 2.424A2.43 2.43 0 0 1 12 14.412c-1.346 0-2.439-1.086-2.439-2.414 0-.165.02-.32.049-.475h.049a1.997 1.997 0 0 0 2-1.92c.107-.02.224-.03.341-.03"
    />
  </Svg>
);
export default IconlystShowBold;
