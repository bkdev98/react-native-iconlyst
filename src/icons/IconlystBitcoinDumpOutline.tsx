import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinDumpOutline = ({
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
      d="M17.352 18.205a.75.75 0 0 1-.42-1.371 7.153 7.153 0 1 0-11.153-5.932.75.75 0 0 1-1.5 0 8.653 8.653 0 1 1 13.492 7.175.75.75 0 0 1-.419.127M13.649 21.748q-.105 0-.208-.029l-2.136-.615a.75.75 0 0 1 .415-1.44l1.415.406.409-1.416a.75.75 0 0 1 1.44.415l-.614 2.137a.75.75 0 0 1-.721.542"
    />
    <Path
      fill={props.color}
      d="M13.652 21.75a.75.75 0 0 1-.652-.378l-2.52-4.409-4.36 1.305a.75.75 0 0 1-.852-.324L3.015 14.31a.751.751 0 0 1 1.276-.79l1.95 3.146 4.38-1.31a.75.75 0 0 1 .866.346l2.816 4.925a.75.75 0 0 1-.651 1.122M13.464 13.985h-1.95a.75.75 0 0 1-.75-.75v-2.708a.75.75 0 0 1 .75-.75h1.892a2.153 2.153 0 0 1 2.152 1.9 2.1 2.1 0 0 1-2.094 2.31zm-1.2-1.5h1.2a.6.6 0 0 0 .446-.2.6.6 0 0 0 .155-.47.64.64 0 0 0-.66-.54h-1.141z"
    />
    <Path
      fill={props.color}
      d="M13.464 11.278h-1.95a.75.75 0 0 1-.75-.75V7.82a.75.75 0 0 1 .75-.75h1.892a2.153 2.153 0 0 1 2.152 1.9 2.1 2.1 0 0 1-2.094 2.31zm-1.2-1.5h1.2a.6.6 0 0 0 .446-.2.6.6 0 0 0 .155-.47.64.64 0 0 0-.66-.54h-1.141zM12.924 14.784a.75.75 0 0 1-.75-.75v-.8a.75.75 0 1 1 1.5 0v.8a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.924 8.566a.75.75 0 0 1-.75-.75v-.8a.75.75 0 1 1 1.5 0v.8a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystBitcoinDumpOutline;
