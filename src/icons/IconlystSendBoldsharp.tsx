import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendBoldsharp = ({
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
      d="M21.652 2.152 2.795 7.758l-.358.136v.64l7.38 4.932 5.65-5.65 1.06 1.061-5.661 5.661 4.736 7.088.174.222h.642l5.593-18.954.05-.312z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSendBoldsharp;
