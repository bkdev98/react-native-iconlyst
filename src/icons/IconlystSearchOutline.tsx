import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchOutline = ({
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
      fillRule="evenodd"
      d="M11.739 2c5.37 0 9.738 4.368 9.738 9.738a9.7 9.7 0 0 1-2.564 6.578l3.131 3.125a.749.749 0 1 1-1.06 1.062l-3.168-3.16a9.7 9.7 0 0 1-6.077 2.134c-5.37 0-9.74-4.369-9.74-9.739S6.37 2 11.74 2m0 1.5c-4.543 0-8.24 3.695-8.24 8.238s3.697 8.239 8.24 8.239c4.542 0 8.238-3.696 8.238-8.239S16.28 3.5 11.739 3.5"
    />
  </Svg>
);
export default IconlystSearchOutline;
