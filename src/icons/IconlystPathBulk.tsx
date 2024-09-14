import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPathBulk = ({
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
      d="M11.036 5.971a2.323 2.323 0 0 0 3.951-1.365c.027-.22.022-.444-.014-.663A8.39 8.39 0 0 1 20.74 9.71a2.3 2.3 0 0 0-.66-.011l-.005-.005a2.322 2.322 0 0 0-1.365 3.951 2.31 2.31 0 0 0 2.03.648 8.39 8.39 0 0 1-5.767 5.766q.053-.33.01-.66l.006-.005a2.321 2.321 0 0 0-4.614 0l.005.005q-.041.33.01.66a8.39 8.39 0 0 1-5.765-5.766q.331.053.664.014a2.322 2.322 0 0 0 0-4.614l-.006.006a2.3 2.3 0 0 0-.658.01 8.39 8.39 0 0 1 5.763-5.765q-.053.33-.014.662c.06.5.279.981.663 1.365"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.61 4.324a3.071 3.071 0 1 0 6.142 0 3.071 3.071 0 0 0-6.143 0m1.498 0a1.572 1.572 0 1 0 3.145 0 1.572 1.572 0 0 0-3.145 0M8.074 12.002a3.071 3.071 0 1 1-6.143 0 3.071 3.071 0 0 1 6.143 0m-1.5 0a1.572 1.572 0 1 1-3.144 0 1.572 1.572 0 0 1 3.145 0M23.43 12.002a3.071 3.071 0 1 1-6.143 0 3.071 3.071 0 0 1 6.143 0m-1.5 0a1.572 1.572 0 1 1-3.144 0 1.572 1.572 0 0 1 3.145 0M12.68 22.751a3.071 3.071 0 1 1 0-6.143 3.071 3.071 0 0 1 0 6.143m0-1.499a1.572 1.572 0 1 1 0-3.145 1.572 1.572 0 0 1 0 3.145"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPathBulk;
