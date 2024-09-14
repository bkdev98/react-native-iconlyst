import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDropboxBulk = ({
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
      d="M21.296 6.029a.451.451 0 0 0-.005-.76L18.24 3.327a1.47 1.47 0 0 0-1.557.003L13.44 5.394a.3.3 0 0 0 0 .506l3.87 2.462a.3.3 0 0 0 .321 0zM6.37 8.362a.3.3 0 0 0 .323 0L10.561 5.9a.3.3 0 0 0 0-.507L7.315 3.327a1.46 1.46 0 0 0-1.556.002L2.704 5.272a.45.45 0 0 0 .006.76zM10.561 12.86a.3.3 0 0 0 0-.506L6.693 9.892a.3.3 0 0 0-.322 0l-3.667 2.334a.44.44 0 0 0-.204.376.45.45 0 0 0 .21.382l3.051 1.941a1.47 1.47 0 0 0 1.558 0zM17.63 9.892a.3.3 0 0 0-.322 0l-3.869 2.463a.3.3 0 0 0 0 .506l3.246 2.066a1.47 1.47 0 0 0 1.557-.003l3.051-1.94a.45.45 0 0 0 .207-.381.45.45 0 0 0-.208-.38z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M11.84 11.843a.3.3 0 0 0 .321 0l3.87-2.462a.3.3 0 0 0 0-.506l-3.87-2.463a.3.3 0 0 0-.322 0L7.971 8.875a.3.3 0 0 0 0 .506zM12.161 13.373a.3.3 0 0 0-.322 0l-3.924 2.498c-.201.126-.418.21-.641.27a.32.32 0 0 0-.241.298l-.017 1.236c-.007.525.277.994.741 1.225l3.625 1.847c.388.196.846.196 1.231 0l3.65-1.855c.45-.231.736-.686.743-1.186l.017-1.244a.32.32 0 0 0-.248-.308 2.3 2.3 0 0 1-.687-.281z" />
    </G>
  </Svg>
);
export default IconlystDropboxBulk;
