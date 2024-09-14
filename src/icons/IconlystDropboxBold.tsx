import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropboxBold = ({
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
      d="M21.296 6.538a.451.451 0 0 0-.005-.76l-3.052-1.942a1.47 1.47 0 0 0-1.557.003l-3.243 2.064a.3.3 0 0 0 0 .507l3.869 2.462a.3.3 0 0 0 .322 0zM11.84 12.352a.3.3 0 0 0 .321 0l3.87-2.463a.3.3 0 0 0 0-.506l-3.87-2.462a.3.3 0 0 0-.322 0L7.971 9.383a.3.3 0 0 0 0 .506zM6.37 8.872a.3.3 0 0 0 .323 0l3.868-2.463a.3.3 0 0 0 0-.506L7.315 3.837a1.46 1.46 0 0 0-1.556.002L2.704 5.782a.45.45 0 0 0 .006.76zM10.561 13.37a.3.3 0 0 0 0-.506L6.693 10.4a.3.3 0 0 0-.322 0l-3.667 2.335a.44.44 0 0 0-.204.376.45.45 0 0 0 .21.382l3.05 1.94a1.47 1.47 0 0 0 1.559 0zM12.161 13.882a.3.3 0 0 0-.322 0l-3.924 2.497a2.3 2.3 0 0 1-.641.27.32.32 0 0 0-.241.299l-.017 1.235c-.007.525.277.994.741 1.225l3.625 1.847c.388.196.846.196 1.231 0l3.65-1.855c.45-.23.736-.686.743-1.186l.017-1.243a.32.32 0 0 0-.248-.309 2.3 2.3 0 0 1-.687-.28zM17.63 10.402a.3.3 0 0 0-.322 0l-3.87 2.462a.3.3 0 0 0 0 .506l3.247 2.066a1.47 1.47 0 0 0 1.557-.003l3.051-1.94a.45.45 0 0 0 .207-.38.45.45 0 0 0-.208-.38z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDropboxBold;
