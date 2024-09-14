import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinBagBulk = ({
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
      fillRule="evenodd"
      d="m21.383 15.75-.73-5.7c-.54-2.42-2.09-3.28-3.37-3.28h-9.58c-1.27.02-2.89.9-3.33 3.32l-.73 5.65c-.29 1.95-.02 3.37.82 4.35.83.97 2.18 1.43 4.13 1.43h7.81c1.77 0 3.17-.53 4.04-1.54.88-1.02 1.2-2.44.94-4.23"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.263 6.77h-1.53c-.24-1.58-1.64-2.78-3.26-2.79-.88 0-1.7.34-2.32.96-.51.5-.83 1.14-.93 1.83h-1.52c.12-1.1.6-2.12 1.39-2.9.91-.9 2.13-1.39 3.4-1.39 2.47 0 4.51 1.88 4.77 4.29M13.453 13.135c-.15.17-.37.27-.6.27h-1.52v-1.65h1.45c.45 0 .84.32.88.74.03.24-.05.47-.21.64m.01 3.14c-.16.17-.38.27-.61.27h-1.52v-1.64h1.45c.45 0 .84.33.88.74.03.24-.05.46-.2.63m1.1-2.13c.44-.48.66-1.14.6-1.79-.11-1.12-1.05-1.99-2.19-2.08v-.2a.749.749 0 1 0-1.5 0v.18h-.89c-.41 0-.75.33-.75.75v6.29c0 .41.34.75.75.75h.89v.18a.749.749 0 1 0 1.5 0v-.19c.61-.04 1.19-.3 1.6-.75.43-.48.65-1.13.59-1.78a2.2 2.2 0 0 0-.63-1.33z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinBagBulk;
