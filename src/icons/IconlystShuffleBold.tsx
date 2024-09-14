import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShuffleBold = ({
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
      d="M17.848 14.17a1 1 0 0 0-1.615.79v1.172a4.9 4.9 0 0 1-1.824-.998 1 1 0 1 0-1.315 1.506c.986.861 2.063 1.31 3.139 1.555V20a1 1 0 0 0 1.614.788c.082-.064 2.03-1.585 3.045-2.6a1 1 0 0 0 .002-1.415c-1.016-1.016-2.964-2.538-3.046-2.602M3.816 7.523c1.818 0 3.255 0 4.478 1.208a.996.996 0 0 0 1.414-.008A1 1 0 0 0 9.7 7.31C7.893 5.523 5.82 5.523 3.816 5.523a1 1 0 1 0 0 2M16.232 7.862V9.04a1 1 0 0 0 1.615.789c.082-.065 2.031-1.586 3.045-2.602a1 1 0 0 0 .001-1.413c-1.015-1.017-2.964-2.54-3.046-2.603A.999.999 0 0 0 16.232 4v1.802c-2.216.5-4.448 1.9-5.886 5.854-1.754 4.822-3.655 4.822-6.532 4.822a1 1 0 1 0 0 2c3.038 0 6.18 0 8.411-6.138 1.032-2.836 2.43-3.997 4.007-4.478"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShuffleBold;
