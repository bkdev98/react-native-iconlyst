import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOnlyfansOutline = ({
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
      d="M8.53 10.941a1.147 1.147 0 1 0 0 2.294 1.147 1.147 0 0 0 0-2.294m-2.647 1.147a2.647 2.647 0 1 1 5.294 0 2.647 2.647 0 0 1-5.294 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.748 6.153a6.15 6.15 0 0 1 4.054-1.524H22a.75.75 0 0 1 .726.937c-.485 1.886-1.753 3.202-3.006 4.057a.75.75 0 0 1 .786.969c-.22.707-.6 1.906-1.48 2.92-.838.967-2.089 1.723-3.943 1.835-1.208 2.37-3.716 4.022-6.553 4.022a7.28 7.28 0 1 1 4.218-13.216M11.74 7.28a5.78 5.78 0 1 0-3.622 10.574l2.813-8.92c.19-.6.464-1.156.809-1.654M9.726 17.743a5.91 5.91 0 0 0 4.183-3.426.75.75 0 0 1 .69-.456c1.691 0 2.672-.613 3.294-1.332.325-.374.564-.79.75-1.202-.9.079-1.715-.027-2.632-.309a.75.75 0 0 1 .153-1.464c.35-.031 1.455-.347 2.584-1.086.862-.564 1.676-1.334 2.176-2.34h-4.122a4.655 4.655 0 0 0-4.44 3.256z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOnlyfansOutline;
