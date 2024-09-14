import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplyShareLeftBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.838 11.02a.75.75 0 0 1-.75-.75V9.078l-3.333 2.828 3.333 3.011V13.36a.75.75 0 0 1 .75-.75c1.783 0 3.227.456 4.318 1.36-.153-.57-.412-1.157-.842-1.65-.752-.863-1.922-1.3-3.476-1.3"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.816 16.536a.75.75 0 0 1-1.425.204c-.723-1.59-1.941-2.428-3.803-2.598v1.308c0 .498-.295.95-.752 1.153a1.25 1.25 0 0 1-1.36-.216l-3.93-3.551a1.26 1.26 0 0 1 .034-1.9l3.922-3.328a1.26 1.26 0 0 1 1.354-.178c.45.209.73.646.731 1.138v.982c1.652.137 2.95.738 3.866 1.794 1.786 2.06 1.381 5.065 1.363 5.192M16.218 2.75H7.783C4.623 2.75 2.5 4.973 2.5 8.28v7.94c0 3.307 2.124 5.53 5.284 5.53h8.434c3.16 0 5.282-2.223 5.282-5.53V8.28c0-3.307-2.122-5.53-5.282-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplyShareLeftBold;
