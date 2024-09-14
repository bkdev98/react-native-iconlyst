import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarSendBulk = ({
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
      d="M19.837 10.544a6.345 6.345 0 0 1-6.345-6.345q.002-.448.065-.878a.303.303 0 0 0-.245-.347q-.742-.122-1.515-.124c-5.239 0-9.5 4.262-9.5 9.5s4.261 9.5 9.5 9.5 9.5-4.262 9.5-9.5q-.001-.84-.143-1.64a.303.303 0 0 0-.349-.24 6.4 6.4 0 0 1-.968.074"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.645 2.738a.75.75 0 0 0-.686-.46l-.006-.003H18.06a.75.75 0 0 0 0 1.5h1.083l-2.627 2.63a.751.751 0 0 0 1.062 1.061l2.625-2.628v1.088a.75.75 0 0 0 1.5 0v-2.9a.8.8 0 0 0-.058-.288"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.013 16.142h-.058v.44a.75.75 0 0 1-1.5 0v-.44H9.388a.75.75 0 0 1 0-1.5h2.625a.663.663 0 0 0 .664-.66.663.663 0 0 0-.664-.66h-1.615a2.17 2.17 0 0 1-2.164-2.17c0-1.191.97-2.16 2.164-2.16h.057v-.44a.75.75 0 0 1 1.5 0v.44h1.068a.75.75 0 0 1 0 1.5h-2.625a.66.66 0 0 0-.664.66c0 .37.298.67.664.67h1.615c1.193 0 2.164.969 2.164 2.16 0 1.19-.97 2.16-2.164 2.16"
    />
  </Svg>
);
export default IconlystDollarSendBulk;
