import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollarRemoveBold = ({
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
      d="M12.022 15.965h-.058v.44a.75.75 0 0 1-1.5 0v-.44H9.397a.75.75 0 0 1 0-1.5h2.625a.663.663 0 0 0 .664-.659.663.663 0 0 0-.664-.66h-1.615a2.164 2.164 0 1 1 0-4.33h.057v-.44a.75.75 0 0 1 1.5 0v.44h1.068a.75.75 0 0 1 0 1.5h-2.625a.66.66 0 0 0-.664.66c0 .37.298.67.664.67h1.615c1.193 0 2.164.968 2.164 2.16 0 1.19-.971 2.16-2.164 2.16m7.824-5.597A6.345 6.345 0 0 1 13.5 4.023q.001-.446.064-.878a.303.303 0 0 0-.245-.346c-.493-.08-.999-.125-1.514-.125-5.24 0-9.5 4.262-9.5 9.5s4.26 9.5 9.5 9.5c5.238 0 9.5-4.262 9.5-9.5q-.002-.839-.143-1.64a.303.303 0 0 0-.35-.24 6.4 6.4 0 0 1-.967.074"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.476 6.102-1.184-1.188 1.182-1.182a.75.75 0 1 0-1.06-1.061l-1.182 1.18-1.18-1.18a.75.75 0 1 0-1.061 1.06l1.182 1.183-1.183 1.188a.75.75 0 0 0 1.063 1.059l1.179-1.186 1.18 1.186a.752.752 0 0 0 1.061.002.75.75 0 0 0 .003-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDollarRemoveBold;
