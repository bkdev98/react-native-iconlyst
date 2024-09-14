import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdCheckBold = ({
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
      d="M17.037 3.852H6.967c-2.67 0-4.464 1.877-4.464 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3v-.08c0-2.793-1.794-4.67-4.464-4.67M2.499 14.473c0 .226.244.375.461.311a2.54 2.54 0 0 1 2.489.628l.237.238a.3.3 0 0 0 .425 0l2.588-2.598c.98-.97 2.56-.98 3.54 0 .97.98.98 2.56 0 3.54l-2.66 2.669a.3.3 0 0 0 .212.511h7.247c2.67 0 4.46-1.88 4.46-4.67v-4.4a.3.3 0 0 0-.3-.3h-18.4a.3.3 0 0 0-.3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11 14.292a.75.75 0 0 0-1.06 0l-4.044 4.049-1.689-1.689a.75.75 0 1 0-1.06 1.061l2.22 2.22a.75.75 0 0 0 1.06 0L11 15.353a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdCheckBold;
