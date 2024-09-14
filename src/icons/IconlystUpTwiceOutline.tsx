import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpTwiceOutline = ({
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
      d="M7.965 3.332c.2 0 .39.08.53.22l3.963 3.964a.75.75 0 0 1-1.061 1.06L7.965 5.143 4.53 8.576a.75.75 0 1 1-1.06-1.06l3.965-3.964a.75.75 0 0 1 .53-.22M16.416 10.95a.75.75 0 0 1 .53.219l3.585 3.585a.75.75 0 1 1-1.061 1.06l-2.304-2.304v6.409a.75.75 0 0 1-1.5 0V13.51l-2.304 2.304a.75.75 0 1 1-1.06-1.06l3.583-3.585a.75.75 0 0 1 .53-.22"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.965 3.332a.75.75 0 0 1 .75.75v15.836a.75.75 0 0 1-1.5 0V4.082a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpTwiceOutline;
