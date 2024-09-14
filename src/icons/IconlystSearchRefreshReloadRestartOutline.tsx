import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchRefreshReloadRestartOutline = ({
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
      d="M17.813 18.394a8.94 8.94 0 0 1-7.272 1.903.75.75 0 0 1-.607-.87.75.75 0 0 1 .871-.607A7.447 7.447 0 0 0 18.36 7.43l-.276 1.19a.75.75 0 1 1-1.46-.338l.668-2.894a.75.75 0 0 1 .9-.562l2.91.673a.75.75 0 0 1-.338 1.462L19.68 6.71a8.95 8.95 0 0 1-.794 10.635l2.894 2.888a.751.751 0 0 1-1.06 1.062zM2.52 16.523a.75.75 0 0 1 .9-.561l1.082.25A8.95 8.95 0 0 1 5.712 5.13a8.94 8.94 0 0 1 7.93-2.504.75.75 0 0 1-.264 1.477 7.44 7.44 0 0 0-6.6 2.083 7.45 7.45 0 0 0-.955 9.307l.276-1.191a.75.75 0 0 1 .9-.562.75.75 0 0 1 .561.9l-.669 2.895a.747.747 0 0 1-.9.56l-2.91-.672a.75.75 0 0 1-.562-.9"
    />
  </Svg>
);
export default IconlystSearchRefreshReloadRestartOutline;
