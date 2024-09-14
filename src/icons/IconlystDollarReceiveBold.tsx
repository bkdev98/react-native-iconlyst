import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarReceiveBold = ({
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
      d="M12.013 16.142h-.058v.44a.75.75 0 0 1-1.5 0v-.44H9.388a.75.75 0 0 1 0-1.5h2.625a.663.663 0 0 0 .664-.66.663.663 0 0 0-.664-.66h-1.615a2.164 2.164 0 1 1 0-4.33h.057v-.44a.75.75 0 0 1 1.5 0v.44h1.068a.75.75 0 0 1 0 1.5h-2.625a.66.66 0 0 0-.664.66c0 .37.298.67.664.67h1.615c1.193 0 2.164.969 2.164 2.16 0 1.19-.97 2.16-2.164 2.16m7.824-5.597A6.345 6.345 0 0 1 13.492 4.2q.002-.448.065-.878a.303.303 0 0 0-.245-.347q-.742-.122-1.515-.124c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5q-.001-.84-.143-1.64a.303.303 0 0 0-.349-.24 6.4 6.4 0 0 1-.968.074"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.483 2.495a.75.75 0 0 0-1.06 0l-2.627 2.628V4.036a.75.75 0 1 0-1.5 0v2.9q0 .147.06.287a.75.75 0 0 0 .69.462h2.894a.75.75 0 0 0 0-1.5h-1.084l2.627-2.629a.75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarReceiveBold;
