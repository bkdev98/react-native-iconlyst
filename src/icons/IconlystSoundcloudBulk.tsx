import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoundcloudBulk = ({
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
      d="M2.126 13.554a1 1 0 0 0-1 1v2.94a1 1 0 1 0 2 0v-2.94a1 1 0 0 0-1-1M5.66 9.783a1 1 0 0 0-1 1v6.711a1 1 0 1 0 2 0v-6.71a1 1 0 0 0-1-1M9.194 7.104a1 1 0 0 0-1 1v9.39a1 1 0 1 0 2 0v-9.39a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.732 13.24a3.84 3.84 0 0 0-2.59-2.685c-.597-.18-1.06-.213-1.488-.15-.618-2.927-2.917-4.901-5.845-4.901a.75.75 0 0 0-.75.75v11.24c0 .414.336.75.75.75h6.132a3.9 3.9 0 0 0 3.123-1.54c.752-.978.995-2.24.668-3.463"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSoundcloudBulk;
