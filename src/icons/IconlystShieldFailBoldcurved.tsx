import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFailBoldcurved = ({
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
      d="M14.66 13.72a.75.75 0 1 1-1.06 1.061l-1.35-1.349-1.349 1.349a.751.751 0 0 1-1.06-1.061l1.348-1.349-1.349-1.348a.75.75 0 1 1 1.061-1.061l1.35 1.349 1.348-1.349a.75.75 0 1 1 1.061 1.061l-1.349 1.348zm5.278-8.29c-.607-.607-3.934-2.754-7.688-2.754S5.17 4.823 4.562 5.43c-.58.581-.573 1.034-.528 3.549.02 1.019.043 2.407.043 4.325 0 6.52 5.324 9.228 8.173 9.228s8.173-2.708 8.173-9.228c0-1.917.025-3.305.043-4.323.045-2.517.053-2.97-.528-3.551"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldFailBoldcurved;
