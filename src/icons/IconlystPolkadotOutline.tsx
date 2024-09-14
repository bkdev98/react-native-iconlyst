import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolkadotOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M10.417 16.015a.7.7 0 0 1-.17-.02.74.74 0 0 1-.562-.874 2.48 2.48 0 0 1 2.574-1.775 2.458 2.458 0 1 0-2.366-1.758.75.75 0 0 1-1.438.424 3.96 3.96 0 1 1 6.571 1.69 3.8 3.8 0 0 1-2.782 1.145c-.875.01-1.057.46-1.1.6a.76.76 0 0 1-.727.568M12.725 17.07h-.03a.75.75 0 1 1 0-1.5.763.763 0 0 1 .713 1.036.74.74 0 0 1-.683.464"
    />
    <Path
      fill={props.color}
      d="M10.18 17.071a.751.751 0 0 1-.734-.91l1.2-5.485a.75.75 0 1 1 1.467.32l-1.2 5.485a.75.75 0 0 1-.732.59"
    />
  </Svg>
);
export default IconlystPolkadotOutline;
