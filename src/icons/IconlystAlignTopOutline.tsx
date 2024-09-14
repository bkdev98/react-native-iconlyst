import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlignTopOutline = ({
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
      fillRule="evenodd"
      d="M5.945 7.387c-.866 0-1.568.702-1.568 1.568v9.726c0 .866.702 1.568 1.568 1.568h2.066c.866 0 1.568-.702 1.568-1.568V8.955c0-.866-.702-1.568-1.568-1.568zM2.877 8.955a3.07 3.07 0 0 1 3.068-3.068h2.066a3.07 3.07 0 0 1 3.068 3.068v9.726A3.07 3.07 0 0 1 8.01 21.75H5.945a3.07 3.07 0 0 1-3.068-3.068zM16.488 7.387c-.866 0-1.568.702-1.568 1.568v4.938c0 .866.702 1.568 1.568 1.568h2.066c.866 0 1.568-.702 1.568-1.568V8.955c0-.866-.702-1.568-1.568-1.568zM13.42 8.955a3.07 3.07 0 0 1 3.068-3.068h2.066a3.07 3.07 0 0 1 3.068 3.068v4.938a3.07 3.07 0 0 1-3.068 3.068h-2.066a3.07 3.07 0 0 1-3.068-3.068zM2.59 3a.75.75 0 0 1 .75-.75h17.818a.75.75 0 0 1 0 1.5H3.34A.75.75 0 0 1 2.59 3"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAlignTopOutline;
