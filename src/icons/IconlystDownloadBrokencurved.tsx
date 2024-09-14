import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownloadBrokencurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.13 4.844V2.696M12.13 14.736V7.87M15.05 11.81l-2.92 2.927-2.92-2.928M8.482 21.24C4.445 20.992 3 19.82 3 14.203c0-5.33 1.3-6.67 4.88-7M16.62 7.204c3.58.33 4.88 1.67 4.88 7 0 7.1-2.31 7.1-9.25 7.1"
    />
  </Svg>
);
export default IconlystDownloadBrokencurved;
