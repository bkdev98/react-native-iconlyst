import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScrollListOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M6.805 5.622a.75.75 0 0 1 1.06 0L10.7 8.457a.75.75 0 1 1-1.06 1.06L8.085 7.964v9.609l1.555-1.555a.75.75 0 1 1 1.06 1.061l-2.835 2.835a.75.75 0 0 1-1.06 0L3.97 17.078a.75.75 0 0 1 1.06-1.06l1.555 1.554V7.963L5.03 9.518a.75.75 0 0 1-1.06-1.06zM13.268 6.96a.75.75 0 0 1 .75-.75H20.5a.75.75 0 1 1 0 1.5h-6.483a.75.75 0 0 1-.75-.75m0 5.901a.75.75 0 0 1 .75-.75H20.5a.75.75 0 1 1 0 1.5h-6.483a.75.75 0 0 1-.75-.75m0 5.709a.75.75 0 0 1 .75-.75H20.5a.75.75 0 1 1 0 1.5h-6.483a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScrollListOutline;
