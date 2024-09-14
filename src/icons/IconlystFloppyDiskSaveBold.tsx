import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFloppyDiskSaveBold = ({
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
      d="M16.303 16.27c0-.814-.232-1.567-1.92-1.567H9.681c-1.687 0-1.919.753-1.919 1.567v5.013c0 .11.089.2.2.2l8.145.008c.11 0 .198-.09.198-.2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.937 8.845h-5.53a.75.75 0 0 1 0-1.5h5.53a.75.75 0 0 1 0 1.5m6.783-.79-4.475-4.663a2.94 2.94 0 0 0-2.106-.897H7.815c-3.159 0-5.282 2.221-5.282 5.526v7.948c0 2.622 1.349 4.54 3.478 5.229.126.04.251-.056.251-.187v-4.742c0-1.949 1.246-3.067 3.42-3.067h4.701c2.174 0 3.42 1.118 3.42 3.067v4.742c0 .131.125.227.25.187 2.131-.69 3.48-2.607 3.48-5.229v-5.894c0-.758-.289-1.476-.813-2.02"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFloppyDiskSaveBold;
