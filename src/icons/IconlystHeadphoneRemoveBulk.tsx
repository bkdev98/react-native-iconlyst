import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneRemoveBulk = ({
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
      fill={props.color}
      d="M3.04 19.987c.146.147.338.22.53.22a.74.74 0 0 0 .53-.22l1.75-1.75a.7.7 0 0 0 .129-.128L19.767 4.32a.749.749 0 1 0-1.06-1.06L8.112 13.856a2.56 2.56 0 0 0-1.044-.564 2.53 2.53 0 0 0-1.947.256l-.2.118a2.106 2.106 0 0 0-.954 2.491l.536 1.307-1.463 1.463a.75.75 0 0 0 0 1.06M16.646 20.615a2.55 2.55 0 0 0 1.945.256 2.54 2.54 0 0 0 1.541-1.17c.83-1.25 1.43-2.464 1.781-3.604.288-.933-.112-1.932-.976-2.43l-.21-.122a2.53 2.53 0 0 0-1.943-.255c-.66.177-1.212.6-1.553 1.193l-1.52 2.636a2.564 2.564 0 0 0 .935 3.496M7.931 20.956a2.6 2.6 0 0 1-.92-.172.748.748 0 0 1-.261-1.23l2.336-2.335a.75.75 0 0 1 1.222.241c.119.284.179.597.179.929a2.58 2.58 0 0 1-1.281 2.222 2.53 2.53 0 0 1-1.275.345"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M4.66 16.622a.75.75 0 0 1-.714-.524 9.2 9.2 0 0 1-.425-2.76c0-5.183 4.217-9.4 9.4-9.4 1.625 0 3.234.426 4.65 1.232a.749.749 0 1 1-.74 1.304 7.9 7.9 0 0 0-3.91-1.036c-4.356 0-7.9 3.544-7.9 7.9 0 .786.12 1.562.355 2.308a.75.75 0 0 1-.715.976M21.225 16.52q-.105 0-.21-.03a.75.75 0 0 1-.511-.93c.21-.717.316-1.464.316-2.22 0-1.631-.486-3.19-1.406-4.51a.75.75 0 0 1 1.23-.858 9.33 9.33 0 0 1 1.676 5.368c0 .898-.126 1.786-.375 2.64a.75.75 0 0 1-.72.54" />
    </G>
  </Svg>
);
export default IconlystHeadphoneRemoveBulk;
