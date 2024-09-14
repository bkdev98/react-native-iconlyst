import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeLevelBold = ({
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
      d="M18.895 6.421c-3.801-3.801-9.987-3.802-13.79 0a9.69 9.69 0 0 0-2.855 6.894 9.7 9.7 0 0 0 2.856 6.895.75.75 0 1 0 1.06-1.061 8.2 8.2 0 0 1-2.416-5.834 8.2 8.2 0 0 1 2.417-5.833c3.218-3.217 8.452-3.216 11.667 0a8.2 8.2 0 0 1 2.416 5.833 8.2 8.2 0 0 1-2.416 5.834.75.75 0 1 0 1.06 1.06 9.69 9.69 0 0 0 2.857-6.894 9.68 9.68 0 0 0-2.857-6.894"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m13.824 12.552-1.17 1.17c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.17-1.17c.29-.29.77-.29 1.06 0s.29.77 0 1.06m-1.82-4.37c-2.83 0-5.13 2.3-5.13 5.13s2.3 5.13 5.13 5.13c2.82 0 5.13-2.3 5.13-5.13a5.14 5.14 0 0 0-5.13-5.13"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVolumeLevelBold;
