import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZcashBold = ({
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
      d="M14.455 15.6H12.75v.91a.75.75 0 0 1-1.5 0v-.91H9.543a.75.75 0 0 1-.568-1.24l3.844-4.46H9.543a.75.75 0 0 1 0-1.5h1.707v-.91a.75.75 0 0 1 1.5 0v.91h1.705a.75.75 0 0 1 .568 1.24l-3.844 4.46h3.276a.75.75 0 0 1 0 1.5M12 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZcashBold;
