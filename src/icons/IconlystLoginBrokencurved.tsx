import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginBrokencurved = ({
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
      d="M5.094 12.12H2.946M14.986 12.12H8.12M12.06 9.2l2.927 2.92-2.928 2.92M21.49 15.768c-.247 4.037-1.42 5.482-7.036 5.482-5.33 0-6.67-1.3-7-4.88M7.454 7.63c.33-3.58 1.67-4.88 7-4.88 7.1 0 7.1 2.31 7.1 9.25"
    />
  </Svg>
);
export default IconlystLoginBrokencurved;
