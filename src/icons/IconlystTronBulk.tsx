import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTronBulk = ({
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
      d="M12.5 2.014c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.785 11.297a1.1 1.1 0 0 0 .23-.594 1 1 0 0 0 .01-.071l.001-.022a1 1 0 0 0-.008-.218q.001-.01-.001-.021a.1.1 0 0 0-.01-.024l-.009-.018a1.06 1.06 0 0 0-.304-.57l-1.616-1.643a1.8 1.8 0 0 0-1.03-.505l-6.009-.782a1.152 1.152 0 0 0-1.275 1.578l3.543 8.37a1.14 1.14 0 0 0 1.063.701c.351 0 .681-.158.902-.44zm-4.232.912-.21 2.31 2.188-2.783zm1.822-2.671.552.561-1.2.287zm-4.853-1.005 2.226 1.975 1.168-1.532zm-.364 1.681 1.916 1.7-.211 2.327z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTronBulk;
