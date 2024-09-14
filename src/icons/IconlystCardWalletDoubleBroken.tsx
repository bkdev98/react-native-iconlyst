import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletDoubleBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.63 9.351v-.848c0-1.278-.792-2.18-2.078-2.18H9.947c-1.277 0-2.08.902-2.08 2.18v.848M6.09 9.35h12.324M16.63 15.696v-.61c0-1.279-.792-2.182-2.078-2.182H9.947c-1.277 0-2.08.903-2.08 2.182v.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.409 15.694h-4.203l-.001.003v.027a1.95 1.95 0 0 1-1.955 1.955 1.95 1.95 0 0 1-1.956-1.955v-.03H6.091"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.249 3H8.032C5.084 3 3.25 5.081 3.25 8.026v7.948C3.25 18.919 5.093 21 8.032 21h8.435c2.948 0 4.783-2.081 4.783-5.026V8.026C21.25 5.081 19.415 3 16.466 3h-.547"
    />
  </Svg>
);
export default IconlystCardWalletDoubleBroken;
