import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutBrokencurved = ({
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
      d="M11.977 12.12H9.974M22.015 12.12H15.01M19.088 9.2l2.928 2.92-2.928 2.92M2.483 12c0 6.94 0 9.25 7.101 9.25 5.33 0 6.67-1.3 7-4.88M16.585 7.63c-.33-3.58-1.67-4.88-7-4.88-5.524 0-6.751 1.398-7.023 5.286"
    />
  </Svg>
);
export default IconlystLogoutBrokencurved;
