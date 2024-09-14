import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneUpBold = ({
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
      d="M20.3 14.848c-.014-.427-.029-.868-.1-1.299-.126-.754-.61-1.329-1.488-1.759a208 208 0 0 0-4.103-1.944c-.159-.074-.162-.078-.159-.258.015-.986.031-2.104-.027-3.194C14.346 4.938 13.555 3.37 12 3.37S9.653 4.938 9.575 6.393c-.058 1.091-.04 2.21-.026 3.196.002.181.001.183-.159.257a208 208 0 0 0-4.105 1.945c-.875.43-1.36 1.004-1.485 1.757-.072.432-.086.873-.1 1.3q-.009.28-.025.573a.5.5 0 0 0 .495.529l5.363.046.214 2.316-1.669 1.372a.5.5 0 0 0-.182.386v1.8a.501.501 0 0 0 .621.485l3.483-.87 3.482.87a.5.5 0 0 0 .621-.485v-1.8a.5.5 0 0 0-.184-.388l-1.683-1.37.226-2.315c1.072-.009 3.803-.03 5.368-.047a.502.502 0 0 0 .494-.529 24 24 0 0 1-.024-.573"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneUpBold;
