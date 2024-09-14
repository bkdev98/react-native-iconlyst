import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalCallTwoTone = ({
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
      d="M10.864 14.046c3.17 3.169 4.112-.721 6.13 1.296 1.946 1.946 3.065 2.335.6 4.8-.31.247-2.272 3.234-9.167-3.66C1.532 9.59 4.515 7.624 4.763 7.316c2.471-2.471 2.854-1.347 4.8.598 2.018 2.018-1.87 2.963 1.3 6.132"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.133 10.75a4.067 4.067 0 0 0 4.587-6.56 4.067 4.067 0 0 0-5.748 0 4.07 4.07 0 0 0-.815 4.586c.09.222-.308 1.66.003 1.972.313.312 1.75-.087 1.973.003M17.846 8.229v-2.33M19.008 7.063h-2.326"
    />
  </Svg>
);
export default IconlystMedicalCallTwoTone;
