import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldDoneBoldcurved = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m15.97 10.826-3.897 3.899a.75.75 0 0 1-1.061 0L9.12 12.83a.75.75 0 1 1 1.06-1.061l1.363 1.364 3.367-3.37a.75.75 0 1 1 1.06 1.062m3.968-5.396c-.606-.607-3.934-2.753-7.688-2.753-3.756 0-7.082 2.146-7.688 2.753-.581.582-.572 1.035-.528 3.549.019 1.02.044 2.408.044 4.326 0 6.52 5.322 9.227 8.172 9.227 2.849 0 8.172-2.707 8.172-9.227 0-1.92.025-3.308.044-4.327.045-2.514.053-2.966-.528-3.548"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldDoneBoldcurved;
