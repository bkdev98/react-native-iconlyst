import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSyringeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.53 6.15-1.837-1.833-.004-.007q-.004-.002-.006-.004L17.845 2.47a.75.75 0 1 0-1.06 1.06l1.313 1.31L16.1 6.838l-1.081-1.08c-.617-.616-1.357-.942-2.141-.942h-.005c-.82.002-1.639.372-2.306 1.043l-4.754 4.749a5.33 5.33 0 0 0-1.568 3.792c0 1.177.395 2.283 1.09 3.204L2.47 20.47a.75.75 0 0 0 1.06 1.06l2.867-2.867a5.3 5.3 0 0 0 3.207 1.093 5.33 5.33 0 0 0 3.792-1.572l.35-.35-2.1-2.11a.75.75 0 1 1 1.062-1.058l2.098 2.108 1.56-1.56-3.168-3.164a.75.75 0 1 1 1.061-1.06l3.168 3.164.723-.721c1.354-1.361 1.39-3.151.091-4.456l-1.08-1.08L19.159 5.9l1.311 1.31a.749.749 0 0 0 1.06-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSyringeBold;
