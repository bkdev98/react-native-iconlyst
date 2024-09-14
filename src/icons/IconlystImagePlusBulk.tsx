import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImagePlusBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.11 12.75a2.575 2.575 0 0 1-2.571-2.573A2.574 2.574 0 0 1 8.11 7.606a2.573 2.573 0 0 1 2.57 2.57 2.575 2.575 0 0 1-2.57 2.574m4.54-9.066a.31.31 0 0 0-.304-.291H7.21c-3.162 0-5.287 2.219-5.287 5.52v7.948c0 2.37 1.097 4.178 2.884 5.011a.29.29 0 0 0 .33-.064c.903-.933 5.9-6.094 8.256-8.507 1.27-1.297 3.365-1.332 4.67-.081l2.352 2.25a.3.3 0 0 0 .508-.217V12.03a.31.31 0 0 0-.29-.304 8.62 8.62 0 0 1-7.983-8.041"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.466 14.348 7.05 21.95c-.15.154-.055.432.16.432h8.435c2.741 0 4.695-1.678 5.162-4.282a.3.3 0 0 0-.087-.263l-3.694-3.534a1.826 1.826 0 0 0-2.56.045M8.11 9.105a1.072 1.072 0 1 0 .002 2.145 1.072 1.072 0 0 0-.001-2.145M21.327 4.637h-1.67V2.97a.75.75 0 0 0-1.5 0v1.667H16.49a.75.75 0 0 0 0 1.5h1.667v1.67a.75.75 0 0 0 1.5 0v-1.67h1.67a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImagePlusBulk;
