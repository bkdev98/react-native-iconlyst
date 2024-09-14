import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDribbbleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12c0-5.382 4.365-9.75 9.75-9.75s9.75 4.368 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.382 2.25 12M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.402 2.969a.75.75 0 0 1 1.05.153c3.652 4.904 6.412 10.412 7.493 16.71a.75.75 0 1 1-1.479.254c-1.031-6.014-3.67-11.306-7.218-16.068a.75.75 0 0 1 .154-1.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.857 5.09a.75.75 0 0 1 .184 1.044c-1.89 2.695-5.06 4.106-8.096 4.837-3.054.734-6.102.811-7.915.738a.75.75 0 1 1 .061-1.5c1.726.071 4.626-.005 7.503-.697 2.893-.696 5.637-1.984 7.219-4.24a.75.75 0 0 1 1.044-.183M11.695 12.507c2.905-1.148 6.333-1.435 9.49-.496a.75.75 0 1 1-.427 1.438c-2.803-.833-5.886-.585-8.512.453-2.633 1.04-4.725 2.837-5.647 5.016a.75.75 0 1 1-1.381-.585c1.12-2.645 3.58-4.682 6.477-5.826"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDribbbleOutline;
