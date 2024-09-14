import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserDeleteOutline = ({
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
      d="M14.728 15.481a.75.75 0 0 1 1.06 0l1.271 1.272 1.237-1.237a.75.75 0 0 1 1.061 1.06l-1.237 1.237 1.273 1.273a.75.75 0 1 1-1.06 1.06l-1.274-1.272-1.236 1.236a.75.75 0 1 1-1.06-1.06l1.236-1.237-1.272-1.271a.75.75 0 0 1 0-1.06M7.872 17.397c-.846.767-1.184 1.743-1.184 2.602a.75.75 0 1 1-1.5 0c0-1.25.493-2.64 1.677-3.713 1.186-1.075 2.997-1.77 5.53-1.77a.75.75 0 1 1 0 1.5c-2.26 0-3.678.616-4.523 1.381M12.395 4.75a3.376 3.376 0 1 0 .001 6.752 3.376 3.376 0 0 0-.001-6.752M7.52 8.125a4.876 4.876 0 1 1 9.751.001 4.876 4.876 0 0 1-9.751 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserDeleteOutline;
