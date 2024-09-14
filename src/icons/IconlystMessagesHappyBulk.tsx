import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesHappyBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.916 10.782c-.398-4.057-3.596-7.329-7.603-7.78-2.376-.267-4.683.426-6.477 1.955-1.9 1.621-3.06 4.043-3.182 6.644-.243 5.2 3.961 9.15 8.24 10.367q.134.038.27.038c.212 0 .421-.07.598-.203a1.03 1.03 0 0 0 .408-.818l.018-1.495c4.996-.602 8.173-4.183 7.728-8.708"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.046 12.519a4.09 4.09 0 0 1-3.743 2.443 4.09 4.09 0 0 1-3.743-2.443.75.75 0 0 1 1.374-.603 2.587 2.587 0 0 0 4.739 0 .749.749 0 1 1 1.373.603"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesHappyBulk;
