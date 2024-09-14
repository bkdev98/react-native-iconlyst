import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeBluetoothTwoTone = ({
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
      d="M6.897 7.54c.375 0 .816-.106 1.135-.306l2.75-1.719c1.65-1.03 3.665.207 3.78 2.129a60 60 0 0 1 0 8.713c-.1 1.919-2.13 3.16-3.78 2.128l-2.75-1.718c-.32-.2-.754-.306-1.13-.306-1.41-.106-1.862.06-2.64-.581-.822-.689-.76-2.53-.76-3.88s-.064-3.19.76-3.88c.772-.641 1.232-.476 2.635-.58"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.148 10.416 19.128 12m0 0 2.372 1.898-2.372 1.902zm0 0v-.004m0 .004-1.98 1.58m1.98-1.584V8.201l2.372 1.897z"
    />
  </Svg>
);
export default IconlystVolumeBluetoothTwoTone;
