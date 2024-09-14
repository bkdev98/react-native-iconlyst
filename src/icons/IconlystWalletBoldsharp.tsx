import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletBoldsharp = ({
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
      d="M6.56 11.169h6.932v-1.5H6.56zM3.493 3.625l15.13.001v1.725H3.493zm14.437 13.959c-1.906-.001-3.457-1.443-3.459-3.215 0-1.773 1.552-3.215 3.46-3.216h4.573V5.351h-2.382V2.126L1.994 2.125V21.87h.25v.005h20.261v-4.291z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.973 14.369c0 .945.88 1.715 1.959 1.716h4.574v-3.431h-4.574c-1.08 0-1.96.77-1.96 1.715"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletBoldsharp;
