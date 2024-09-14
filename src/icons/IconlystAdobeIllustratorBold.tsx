import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobeIllustratorBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.5 12.969h1.785l-.905-2.012z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.149 10.379c-.414 0-.786-.366-.786-.78s.372-.79.786-.79.785.376.785.79-.371.78-.785.78m.751 5.529a.75.75 0 0 1-1.5 0v-3.97a.75.75 0 0 1 1.5 0zm-3.16.684a.75.75 0 0 1-.992-.376l-.787-1.747H8.843l-.762 1.74a.75.75 0 0 1-1.374-.601l.896-2.047a.7.7 0 0 1 .117-.268l1.963-4.485a.75.75 0 0 1 .683-.45c.335.017.566.172.688.443l3.062 6.8a.75.75 0 0 1-.376.99M12 3.009c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobeIllustratorBold;
