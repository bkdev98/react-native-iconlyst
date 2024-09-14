import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.412 4.322c.29-.081-.004-.001.318-.061 1.012-.188 2.18-.274 3.52-.274q.967 0 1.816.06M12.25 22.535c-6.956 0-9.275-2.318-9.275-9.274 0-4.128.816-6.623 2.933-7.969M16.27 4.366c3.863.9 5.255 3.505 5.255 8.895 0 5.856-1.644 8.425-6.315 9.09M3.25 9.809h18.008M16.653 13.746h.01M12.254 13.746h.01M7.846 13.746h.01M16.653 17.598h.01M12.254 17.598h.01M7.846 17.598h.01M16.258 2.535v3.262M8.25 2.535v3.262"
    />
  </Svg>
);
export default IconlystCalendarBrokencurved;
