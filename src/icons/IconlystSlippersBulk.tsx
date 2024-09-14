import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippersBulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M17.888 3.412h-.01c-2.48-.37-4.82 1.34-5.2 3.91 0 0-.05.83-.13 1.96-.09 1.42-.2 3.31-.27 4.59-.11 2.05 1.36 3.81 3.4 4.11.21.04.42.04.62.04 1.8 0 3.39-1.18 3.84-2.95.31-1.23.75-3.03 1.08-4.41.29-1.15.49-2.01.5-2.04.38-2.49-1.34-4.82-3.83-5.21M11.322 9.94c-.38-2.57-2.72-4.28-5.2-3.91h-.01c-2.49.39-4.21 2.72-3.83 5.21.01.03.21.89.5 2.04.33 1.38.77 3.18 1.08 4.41.45 1.77 2.04 2.95 3.84 2.95.2 0 .41 0 .62-.04 2.04-.3 3.51-2.06 3.4-4.11-.07-1.28-.18-3.17-.27-4.59-.08-1.13-.13-1.96-.13-1.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.888 3.412h-.01c-2.48-.37-4.82 1.34-5.2 3.91 0 0-.05.83-.13 1.96 1.31-1.01 3.02-1.36 4.63-1.09 1.6.26 3.11 1.12 4.04 2.47.29-1.15.49-2.01.5-2.04.38-2.49-1.34-4.82-3.83-5.21M6.122 6.03h-.01c-2.49.39-4.21 2.72-3.83 5.21.01.03.21.89.5 2.04.93-1.35 2.44-2.21 4.04-2.47 1.61-.27 3.32.08 4.63 1.09-.08-1.13-.13-1.96-.13-1.96-.38-2.57-2.72-4.28-5.2-3.91"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlippersBulk;
