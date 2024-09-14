import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashSwapBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.755 6.973a.75.75 0 0 0-.493-.627l-2.87-1.025a.752.752 0 0 0-1.002.685l-.082 2.856a.75.75 0 0 0 1.145.659l.767-.476c1.294 2.91.765 6.463-1.591 8.837a7.94 7.94 0 0 1-7.037 2.22.75.75 0 0 0-.264 1.477 9.443 9.443 0 0 0 8.364-2.641c2.852-2.872 3.454-7.196 1.811-10.69l.901-.558a.75.75 0 0 0 .35-.717M6.316 15.066a.75.75 0 0 0-.77.013l-.787.49c-1.3-2.914-.774-6.473 1.585-8.85a7.94 7.94 0 0 1 7.036-2.222.749.749 0 1 0 .264-1.476A9.44 9.44 0 0 0 5.28 5.662C2.426 8.537 1.824 12.87 3.475 16.365l-.88.545a.75.75 0 0 0 .143 1.344l2.87 1.025a.744.744 0 0 0 .676-.088.74.74 0 0 0 .326-.597l.081-2.856a.75.75 0 0 0-.375-.672" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m12.572 13.045-1.247 2.294a.75.75 0 1 0 1.317.717l1.85-3.403a.748.748 0 0 0-.658-1.108h-2.42l1.248-2.292a.749.749 0 1 0-1.317-.716l-1.851 3.4a.748.748 0 0 0 .659 1.108z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlashSwapBulk;
