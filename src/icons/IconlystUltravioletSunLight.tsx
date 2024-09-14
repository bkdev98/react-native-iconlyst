import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUltravioletSunLight = ({
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
      d="M12.114 3v1.372m0 15.256V21m9-9h-1.372M4.486 12H3.114m15.364-6.364-.97.97M6.721 17.394l-.97.97m12.727 0-.97-.97M6.721 6.606l-.97-.97M10.689 9.756v3.01a1.478 1.478 0 1 1-2.957 0v-3.01M12.996 9.756l1.75 4.488 1.75-4.488"
    />
  </Svg>
);
export default IconlystUltravioletSunLight;
