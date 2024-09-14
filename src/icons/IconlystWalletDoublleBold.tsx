import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletDoublleBold = ({
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
      d="M17.673 4.803c.178.036.323-.162.227-.316l-.743-1.191a3.78 3.78 0 0 0-5.195-1.2L8.43 4.312c-.17.107-.095.37.106.37h7.9q.635.002 1.238.122M14.638 14.321c0 .74.6 1.34 1.339 1.34H21.2a.3.3 0 0 0 .3-.3v-2.07a.3.3 0 0 0-.3-.3h-5.223c-.738 0-1.34.597-1.34 1.33"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.864 15.541a.75.75 0 0 1-1.5 0v-2.43a.75.75 0 0 1 1.5 0zm7.747-9.36H7.566a5.07 5.07 0 0 0-5.066 5.06v6.17a5.07 5.07 0 0 0 5.066 5.061h9.045c2.847 0 4.751-2.294 4.882-5.01a.29.29 0 0 0-.292-.3h-5.225a2.843 2.843 0 0 1-2.839-2.84c0-1.56 1.274-2.83 2.84-2.83H21.2a.29.29 0 0 0 .292-.3c-.13-2.717-2.035-5.01-4.882-5.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletDoublleBold;
