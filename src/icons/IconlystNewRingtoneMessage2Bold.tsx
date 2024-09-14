import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewRingtoneMessage2Bold = ({
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
      d="M14.35 17.775a2.354 2.354 0 0 1-2.351 2.35 2.35 2.35 0 0 1-2.348-2.35q-.001-.008-.003-.016h4.705q-.001.008-.003.016m5.64-3.983-.466-.99a4.8 4.8 0 0 1-.456-2.043l-.001-1.318c0-.435-.045-.859-.121-1.272a3.9 3.9 0 0 1-2.061.597 3.95 3.95 0 0 1-3.946-3.946c0-.834.263-1.606.707-2.244A7 7 0 0 0 12 2.375c-3.895 0-7.065 3.17-7.065 7.066l-.001 1.318c0 .699-.158 1.406-.457 2.043l-.466.99a2.77 2.77 0 0 0 .168 2.675 2.77 2.77 0 0 0 2.35 1.292h1.625q-.002.008-.003.016a3.853 3.853 0 0 0 3.848 3.85 3.855 3.855 0 0 0 3.85-3.85l-.002-.016h1.625c.958 0 1.837-.483 2.35-1.292a2.77 2.77 0 0 0 .168-2.675"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.859 7.05c1.229 0 2.23-1 2.23-2.23s-1.001-2.23-2.23-2.23-2.229 1-2.229 2.23 1 2.23 2.229 2.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewRingtoneMessage2Bold;
