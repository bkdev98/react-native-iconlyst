import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotspotOutline = ({
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
      d="M18.129 5.108a.75.75 0 0 1 1.06 0c3.807 3.806 3.807 9.977 0 13.783a.75.75 0 0 1-1.06-1.06 8.246 8.246 0 0 0 0-11.662.75.75 0 0 1 0-1.06m-11.67 0a.75.75 0 0 1 0 1.061 8.246 8.246 0 0 0 0 11.662.75.75 0 0 1-1.06 1.06c-3.807-3.806-3.807-9.976 0-13.782a.75.75 0 0 1 1.06 0m8.489 3.181a.75.75 0 0 1 1.06 0 5.25 5.25 0 0 1 0 7.421.75.75 0 1 1-1.06-1.06 3.75 3.75 0 0 0 0-5.3.75.75 0 0 1 0-1.06m-5.305 0a.75.75 0 0 1 0 1.061 3.75 3.75 0 0 0 0 5.3.75.75 0 0 1-1.06 1.06 5.25 5.25 0 0 1 0-7.42.75.75 0 0 1 1.06 0m2.654 2.972a.75.75 0 0 1 .75.75v.056a.75.75 0 0 1-1.5 0v-.056a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHotspotOutline;
