import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGitForkBroken = ({
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
      d="M6.723 9.213v1.085a2.04 2.04 0 0 0 2.04 2.04h6.988a2.04 2.04 0 0 0 2.04-2.04V9.213M12.256 12.35v2.303"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.25 6.745a2.472 2.472 0 1 0 1.502-2.274M20.25 6.745a2.472 2.472 0 1 1-1.415-2.235M12.257 19.725a2.472 2.472 0 1 1 2.273-1.5"
    />
  </Svg>
);
export default IconlystGitForkBroken;
