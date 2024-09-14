import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkBoldcurved = ({
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
      d="M15.677 9.968H8.822a.75.75 0 0 1 0-1.5h6.855a.75.75 0 0 1 0 1.5m4.542 3.022-.003-2.061C20.216 3.335 19.025 2 12.25 2s-7.966 1.335-7.966 8.929l-.003 2.061c-.009 5.625-.013 7.731.846 8.59.278.279.647.42 1.096.42.955 0 2.017-.907 3.142-1.868.996-.851 2.125-1.815 2.885-1.815s1.889.964 2.885 1.815C16.26 21.093 17.322 22 18.277 22c.449 0 .818-.141 1.096-.42.859-.859.855-2.965.846-8.59"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkBoldcurved;
