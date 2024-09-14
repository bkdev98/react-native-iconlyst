import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletBulk = ({
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
      d="M20.75 9.625a.3.3 0 0 1-.3.3H4.55a.3.3 0 0 1-.3-.3V8.011a3.574 3.574 0 0 1 3.57-3.57h9.36a3.574 3.574 0 0 1 3.57 3.57zm-3.57-6.684H7.82a5.075 5.075 0 0 0-5.07 5.07v7.98a5.076 5.076 0 0 0 5.07 5.071h9.36a5.06 5.06 0 0 0 4.244-2.313l.07-.036v-.092c.47-.769.756-1.664.756-2.63v-7.98a5.075 5.075 0 0 0-5.07-5.07"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.499 5.763c-1 .626-3.494 2.229-4.622 2.954-.168.108-.09.367.11.367h10.488a.3.3 0 0 0 .254-.459l-1.035-1.652a3.777 3.777 0 0 0-5.195-1.21"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.896 14.824a1.585 1.585 0 1 0 3.173 0 1.586 1.586 0 0 0-3.173 0"
    />
  </Svg>
);
export default IconlystCardWalletBulk;
