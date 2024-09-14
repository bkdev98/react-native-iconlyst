import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentCheckBold = ({
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
      d="m14.479 12.289-3.537 3.536a.746.746 0 0 1-1.061 0l-1.728-1.727a.75.75 0 1 1 1.061-1.061l1.198 1.197 3.006-3.006a.75.75 0 1 1 1.061 1.06m5.371-3.193h-2.962c-1.766-.01-3.223-1.472-3.223-3.255V2.703a.445.445 0 0 0-.444-.45H8.068c-2.402 0-4.352 1.98-4.352 4.397v10.506c0 2.534 2.046 4.59 4.555 4.59h7.671c2.403 0 4.342-1.96 4.342-4.376V9.534a.434.434 0 0 0-.434-.438"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.016 7.672c.673.007 1.608.01 2.401.007a.465.465 0 0 0 .331-.787l-1.93-2.027-1.955-2.053a.46.46 0 0 0-.793.325v2.57c0 1.077.88 1.965 1.946 1.965"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentCheckBold;
