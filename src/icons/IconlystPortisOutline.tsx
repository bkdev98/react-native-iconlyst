import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPortisOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.25a.75.75 0 0 1 .65.375l5.206 9.028a6.75 6.75 0 1 1-11.712 0l.001-.001L11.6 2.625a.75.75 0 0 1 .65-.375m0 2.251L7.696 12.4a5.25 5.25 0 0 0 .011 5.244 5.25 5.25 0 0 0 9.098-5.243z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 14.25A.75.75 0 0 1 13 15a5.25 5.25 0 0 0 2.625 4.548.75.75 0 0 1-.75 1.299A6.75 6.75 0 0 1 11.5 15a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.25A.75.75 0 0 1 13 3v12a6.75 6.75 0 0 1-3.375 5.847.75.75 0 0 1-.75-1.299A5.25 5.25 0 0 0 11.5 15V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.955 8.31a.75.75 0 0 1 .59 0l4.598 1.97a.75.75 0 0 1-.59 1.378L12.25 9.816l-4.302 1.842a.75.75 0 1 1-.59-1.379z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.216 11.983a.75.75 0 0 1 1.006-.335l5.027 2.513 5.027-2.513a.75.75 0 1 1 .671 1.341l-5.362 2.682a.75.75 0 0 1-.671 0l-5.363-2.682a.75.75 0 0 1-.335-1.006"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPortisOutline;
