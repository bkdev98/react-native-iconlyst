import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLongLightSquareTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.502 9.999h-2M17.502 12.5h-2M17.502 15.001h-2M13 12.45c-.03-.916-.116-1.843-.439-2.725a2.8 2.8 0 0 0-.503-.897 1.16 1.16 0 0 0-.968-.423 4.55 4.55 0 0 0-1.884.51A3.9 3.9 0 0 0 7.51 10.58c-.7 1.3-.674 2.606.025 3.895.446.823 1.113 1.37 1.91 1.735.514.235 1.056.34 1.61.381.53.042.92-.215 1.203-.68.274-.45.433-.957.542-1.48.135-.645.182-1.3.2-1.982z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.032 3.5h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.032c-2.948 0-4.782-2.081-4.782-5.026V8.526C3.25 5.581 5.093 3.5 8.032 3.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLongLightSquareTwoTone;
