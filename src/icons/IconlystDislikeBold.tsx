import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDislikeBold = ({
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
      d="M17.147 4.36a.5.5 0 0 0-.285-.846c-.828-.117-1.637-.205-2.325-.002-.895.1-1.667.596-2.37 1.165-.66-.47-1.404-.963-2.267-1.156a5.06 5.06 0 0 0-2.866.214c-3.695 1.23-4.843 5.252-3.817 8.433.375 1.123 1.024 2.253 1.984 3.454a.5.5 0 0 0 .746.039zM21.922 3.679a.75.75 0 0 0-1.06 0l-14.7 14.7a.75.75 0 1 0 1.06 1.06l1.134-1.133a34 34 0 0 0 3.712 2.25.5.5 0 0 0 .434.006c.29-.134 7.118-3.351 8.771-8.515.604-2.116.333-4.334-.687-5.972l1.336-1.335a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDislikeBold;
