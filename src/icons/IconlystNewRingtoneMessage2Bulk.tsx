import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewRingtoneMessage2Bulk = ({
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
      d="M9.648 17.759h7.824c.958 0 1.837-.483 2.35-1.292a2.77 2.77 0 0 0 .168-2.675l-.466-.99a4.8 4.8 0 0 1-.456-2.043l-.001-1.318c0-.435-.045-.859-.121-1.272a3.9 3.9 0 0 1-2.061.597 3.95 3.95 0 0 1-3.946-3.946c0-.834.263-1.606.707-2.244A7 7 0 0 0 12 2.375c-3.895 0-7.065 3.17-7.065 7.066l-.001 1.318c0 .699-.158 1.406-.457 2.043l-.466.99a2.77 2.77 0 0 0 .168 2.675 2.77 2.77 0 0 0 2.35 1.292h1.625q-.002.008-.003.016z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.999 20.126c1.296 0 2.35-1.071 2.35-2.366h1.5c0 2.123-1.727 3.866-3.85 3.866a3.853 3.853 0 0 1-3.848-3.85l1.5-.016c0 1.295 1.053 2.366 2.348 2.366"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.859 7.05c1.229 0 2.23-1 2.23-2.228 0-1.23-1.001-2.23-2.23-2.23s-2.229 1-2.229 2.23 1 2.229 2.229 2.229"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewRingtoneMessage2Bulk;
