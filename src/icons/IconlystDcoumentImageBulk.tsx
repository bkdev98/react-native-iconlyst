import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentImageBulk = ({
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
      d="M19.854 9.094H16.89c-1.767-.009-3.225-1.472-3.225-3.256v-3.14a.445.445 0 0 0-.443-.448H8.066c-2.404 0-4.354 1.979-4.354 4.397v10.511c0 2.535 2.047 4.592 4.557 4.592h7.675c2.403 0 4.344-1.96 4.344-4.378V9.533a.435.435 0 0 0-.434-.439"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.458 15.443a.75.75 0 0 1-1.061-.02l-1.488-1.541-1.918 2.265a1.28 1.28 0 0 1-.962.452h-.015c-.363 0-.708-.154-.952-.424l-.843-.94-1.048 1.105a.75.75 0 0 1-1.088-1.032l1.212-1.278c.247-.26.62-.39.949-.4.356.006.695.162.933.428l.833.927 1.913-2.26a1.28 1.28 0 0 1 .934-.451 1.3 1.3 0 0 1 .963.393l1.658 1.715a.75.75 0 0 1-.02 1.06M9.024 10.18a1.011 1.011 0 0 1 0 2.02 1.011 1.011 0 0 1 0-2.02M17.016 7.672c.673.007 1.608.01 2.4.007a.465.465 0 0 0 .332-.787c-.51-.534-1.218-1.28-1.93-2.027l-1.955-2.053a.46.46 0 0 0-.793.325v2.569c0 1.078.879 1.966 1.946 1.966"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcoumentImageBulk;
