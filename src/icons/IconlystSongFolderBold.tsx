import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongFolderBold = ({
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
      d="M12.074 14.98v-.003a1.094 1.094 0 1 0 0 .007z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.767 11.523a.75.75 0 0 1-.948.476 3 3 0 0 1-.824-.425l-.431 3.577v.01a2.58 2.58 0 0 1-.974 1.732 2.58 2.58 0 0 1-1.912.534 2.58 2.58 0 0 1-1.73-.973 2.58 2.58 0 0 1-.535-1.912 2.6 2.6 0 0 1 2.886-2.265c.389.047.743.184 1.055.379l.382-3.17a.75.75 0 0 1 1.472-.092c.008.03.254.905 1.083 1.18a.75.75 0 0 1 .476.949m.628-6.16h-2.652a1.66 1.66 0 0 1-1.313-.654l-.855-1.138a2.66 2.66 0 0 0-2.112-1.057H7.588C4.164 2.514 2.5 4.42 2.5 8.34v7.314c0 3.652 2.185 5.832 5.845 5.832h7.296c3.652 0 5.833-2.18 5.833-5.83L21.5 11c0-3.845-1.622-5.636-5.105-5.636"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSongFolderBold;
