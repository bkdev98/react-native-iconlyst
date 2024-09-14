import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarUpBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.84 14.593 2.137-.614.615 2.136"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.98 21.066 2.254-3.635 4.93 1.476 2.815-4.927M12.894 8.285H10.61a1.23 1.23 0 1 0 0 2.46h1.406a1.23 1.23 0 0 1 0 2.462H9.73M11.313 13.206v1.033m0-6.993v1.042M6.892 17.522A7.906 7.906 0 0 1 8.238 3.684M19.215 10.966a7.904 7.904 0 0 0-7.903-7.903"
    />
  </Svg>
);
export default IconlystDollarUpBroken;
