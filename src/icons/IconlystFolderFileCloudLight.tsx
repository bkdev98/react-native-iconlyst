import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileCloudLight = ({
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
      d="M8.57 20.986c-3.364 0-5.345-1.979-5.345-5.333V8.34c0-3.351 1.232-5.328 4.587-5.328h1.875a2.14 2.14 0 0 1 1.711.856l.856 1.138a2.15 2.15 0 0 0 1.712.856h2.653c3.364 0 4.606 1.712 4.606 5.136l-.027 1.842"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.826 16.618c-1.201.01-2.165.85-2.172 2.19a2.18 2.18 0 0 0 1.29 1.998c.32.13.638.18.88.18h5.183c.242 0 .562-.048.886-.178a2.19 2.19 0 0 0 1.287-2c0-1.373-.97-2.18-2.171-2.19 0-.864-.678-2.593-2.591-2.593s-2.592 1.729-2.592 2.592"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileCloudLight;
