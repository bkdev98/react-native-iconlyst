import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExplore2Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m15.605 9.138-1.491 4.77a.5.5 0 0 1-.327.328l-4.766 1.49a.5.5 0 0 1-.627-.626l1.492-4.77a.5.5 0 0 1 .327-.328l4.766-1.49a.49.49 0 0 1 .502.124c.132.131.18.325.124.502M12 2.62c-5.238 0-9.5 4.262-9.5 9.5 0 5.24 4.262 9.5 9.5 9.5s9.5-4.26 9.5-9.5c0-5.238-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExplore2Bold;
