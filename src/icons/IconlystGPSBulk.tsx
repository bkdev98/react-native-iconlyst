import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGPSBulk = ({
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
      d="M17.933 3.674H6.067C3.336 3.674 1.5 5.593 1.5 8.448v7.103c0 2.855 1.836 4.774 4.567 4.774h11.865c2.733 0 4.568-1.92 4.568-4.774V8.448c0-2.855-1.835-4.774-4.567-4.774"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.779 15.489h1.163a2.12 2.12 0 0 0 2.119-2.12 2.12 2.12 0 0 0-2.119-2.12h-.196a.621.621 0 0 1 0-1.24h1.163a.75.75 0 1 0 0-1.5h-1.163a2.12 2.12 0 0 0-2.119 2.12c0 1.17.951 2.12 2.119 2.12h.196a.62.62 0 0 1 0 1.24h-1.163a.75.75 0 0 0 0 1.5m-4.6-2.192h.6a2.397 2.397 0 0 0 2.394-2.393 2.397 2.397 0 0 0-2.394-2.394h-1.35a.75.75 0 0 0-.75.75v5.479a.75.75 0 0 0 1.5 0zm-4.839 2.19c1.449 0 2.314-.743 2.314-1.99V12a.75.75 0 0 0-.75-.75H7.34a.75.75 0 0 0 0 1.5h.814v.749c0 .229 0 .489-.814.489a1.68 1.68 0 0 1-1.245-.515c-.373-.388-.571-.964-.546-1.582a2.05 2.05 0 0 1 .663-1.416 1.75 1.75 0 0 1 1.228-.462c.274.014.538.082.783.205a.75.75 0 0 0 .664-1.346 3.5 3.5 0 0 0-1.372-.357 3.2 3.2 0 0 0-2.315.852 3.56 3.56 0 0 0-1.15 2.462c-.042 1.023.308 2 .962 2.682a3.2 3.2 0 0 0 2.328.977m4.839-5.476h.6a.894.894 0 1 1 0 1.786h-.6z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGPSBulk;
