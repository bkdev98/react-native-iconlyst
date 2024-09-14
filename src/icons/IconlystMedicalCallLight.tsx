import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalCallLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.953 14.046c3.17 3.169 4.113-.721 6.13 1.296 1.947 1.946 3.066 2.335.6 4.8-.31.247-2.27 3.234-9.166-3.66C.622 9.59 3.605 7.624 3.853 7.316c2.471-2.471 2.854-1.347 4.8.598 2.017 2.018-1.87 2.963 1.3 6.132"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.223 10.75a4.067 4.067 0 0 0 4.587-6.56 4.067 4.067 0 0 0-5.748 0 4.07 4.07 0 0 0-.815 4.586c.09.222-.308 1.66.003 1.972.312.312 1.75-.087 1.973.003M16.936 8.229v-2.33M18.098 7.063h-2.326"
    />
  </Svg>
);
export default IconlystMedicalCallLight;
