import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarCircle2Outline = ({
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
      d="M12.25 3.813A8.25 8.25 0 0 0 4 12.063a8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.443 10.639c0-1.27 1.03-2.3 2.3-2.3h1.282c1.122 0 2.032.91 2.032 2.033v.074a.75.75 0 0 1-1.5 0v-.074a.53.53 0 0 0-.532-.532h-1.283a.799.799 0 1 0 0 1.598h1.076a2.24 2.24 0 1 1 0 4.478h-1.342a2.033 2.033 0 0 1-2.033-2.033.75.75 0 0 1 1.5 0c0 .295.24.533.533.533h1.342a.74.74 0 0 0 0-1.478h-1.076a2.3 2.3 0 0 1-2.299-2.3"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.254 7.266a.75.75 0 0 1 .75.75v1.07a.75.75 0 0 1-1.5 0v-1.07a.75.75 0 0 1 .75-.75m0 7.155a.75.75 0 0 1 .75.75v.945a.75.75 0 0 1-1.5 0v-.945a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarCircle2Outline;
