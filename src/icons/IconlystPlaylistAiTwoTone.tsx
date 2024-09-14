import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaylistAiTwoTone = ({
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
      d="M6.108 20.02h5.953a3.11 3.11 0 0 0 3.108-3.108V7.088a3.11 3.11 0 0 0-3.108-3.108H6.108A3.11 3.11 0 0 0 3 7.088v9.824a3.11 3.11 0 0 0 3.108 3.108M21 8.922v6.155M18.082 6.543v10.915"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.861 11.705-.082.223a3.07 3.07 0 0 1-1.815 1.817l-.222.083.222.083c.84.31 1.504.975 1.815 1.816l.082.223.083-.223a3.07 3.07 0 0 1 1.814-1.816l.223-.083-.223-.083a3.07 3.07 0 0 1-1.814-1.817zM11.385 8.05c-.152.5-.543.891-1.043 1.044.5.152.89.544 1.043 1.044.152-.5.543-.892 1.043-1.044-.5-.153-.891-.544-1.043-1.045"
    />
  </Svg>
);
export default IconlystPlaylistAiTwoTone;
