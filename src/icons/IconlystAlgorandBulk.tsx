import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAlgorandBulk = ({
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
      d="M12.5 2.504c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.261 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.73 16.303a.75.75 0 0 0 .717-.971l-1.287-4.167.968-1.581a.75.75 0 0 0-1.28-.783l-.278.454-.59-1.914a.75.75 0 0 0-1.357-.17l-4.898 7.991a.751.751 0 0 0 1.28.783l4.03-6.576.492 1.591-2.573 4.202a.75.75 0 1 0 1.28.783l1.882-3.075.898 2.905a.75.75 0 0 0 .716.528"
    />
  </Svg>
);
export default IconlystAlgorandBulk;
