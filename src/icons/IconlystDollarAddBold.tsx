import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarAddBold = ({
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
      d="M11.666 16.32h-.058v.44a.75.75 0 0 1-1.5 0v-.44H9.04a.75.75 0 0 1 0-1.5h2.625a.663.663 0 0 0 .664-.66.663.663 0 0 0-.664-.66H10.05a2.17 2.17 0 0 1-2.164-2.17c0-1.191.97-2.16 2.164-2.16h.057v-.44a.75.75 0 0 1 1.5 0v.44h1.068a.75.75 0 0 1 0 1.5H10.05a.66.66 0 0 0-.664.66c0 .37.298.67.664.67h1.615c1.193 0 2.164.969 2.164 2.16 0 1.19-.971 2.16-2.164 2.16m7.824-5.597a6.345 6.345 0 0 1-6.345-6.345q.001-.448.064-.878a.303.303 0 0 0-.245-.347q-.74-.122-1.514-.124c-5.24 0-9.5 4.262-9.5 9.5s4.26 9.5 9.5 9.5c5.238 0 9.5-4.262 9.5-9.5q-.002-.84-.143-1.64a.304.304 0 0 0-.35-.24 6.4 6.4 0 0 1-.967.074M21.3 4.518l-1.67-.001v-1.67a.75.75 0 0 0-1.5 0V4.52l-1.678.004a.75.75 0 0 0 .002 1.5h.002l1.672-.004-.004 1.673a.75.75 0 0 0 .748.752h.002a.75.75 0 0 0 .75-.748l.004-1.68 1.671.002a.751.751 0 0 0 .001-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarAddBold;
