import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentImageBold = ({
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
      d="M17.016 7.672c.673.007 1.608.01 2.401.007a.465.465 0 0 0 .331-.787l-1.93-2.027-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.88 1.966 1.946 1.966"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.458 15.443a.75.75 0 0 1-1.061-.02l-1.488-1.541-1.918 2.265a1.28 1.28 0 0 1-.962.452h-.015c-.363 0-.708-.154-.952-.424l-.843-.94-1.048 1.105a.75.75 0 0 1-1.088-1.032l1.212-1.278c.247-.26.62-.39.949-.4.356.006.695.162.933.428l.833.927 1.913-2.26a1.28 1.28 0 0 1 .934-.451 1.3 1.3 0 0 1 .963.393l1.658 1.715a.75.75 0 0 1-.02 1.06M9.024 10.18a1.011 1.011 0 0 1 0 2.02 1.011 1.011 0 0 1 0-2.02M19.85 9.096h-2.962c-1.766-.01-3.223-1.472-3.223-3.255V2.7a.445.445 0 0 0-.444-.447H8.068c-2.402 0-4.352 1.978-4.352 4.395v10.506c0 2.534 2.046 4.59 4.555 4.59h7.671c2.403 0 4.342-1.958 4.342-4.375V9.534a.434.434 0 0 0-.434-.438"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentImageBold;
