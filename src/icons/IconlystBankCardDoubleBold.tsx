import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardDoubleBold = ({
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
      d="M21.41 9.76c-.497-.835-1.32-1.396-2.378-1.623a.267.267 0 0 0-.323.26v4.087c0 2.832-1.911 4.81-4.65 4.81H6.61c-.229 0-.37.245-.23.426.496.641 1.222 1.107 2.138 1.304l7.818 1.677q.455.097.885.097c1.719 0 3.067-1.147 3.477-3.059l1.098-5.113c.228-1.068.095-2.059-.386-2.867M17.387 7.013c0-2.278-1.466-3.81-3.646-3.81H5.744c-2.182 0-3.648 1.532-3.648 3.81 0 .083.067.15.15.15h14.991a.15.15 0 0 0 .15-.15"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.387 12.244v-3.28a.3.3 0 0 0-.3-.3H2.397a.3.3 0 0 0-.3.3v3.28c0 2.278 1.465 3.81 3.647 3.81h7.996c2.181 0 3.647-1.532 3.647-3.81"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCardDoubleBold;