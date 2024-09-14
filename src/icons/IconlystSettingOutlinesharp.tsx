import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingOutlinesharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 9.562a2.938 2.938 0 1 0 0 5.876 2.938 2.938 0 0 0 0-5.876M7.813 12.5a4.438 4.438 0 1 1 8.875 0 4.438 4.438 0 0 1-8.875 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.9 2.347 2.35 1.848 2.35-1.848 5.27 3.042-.427 2.96 2.775 1.109v6.084l-2.776 1.11.427 2.96-5.27 3.041-2.348-1.848-2.35 1.848-5.268-3.042.426-2.958-2.777-1.11V9.457l2.776-1.11-.426-2.96zM6.262 6.18l.45 3.122-2.929 1.171v4.054l2.93 1.172-.45 3.121 3.51 2.027 2.479-1.95 2.478 1.95 3.51-2.027-.45-3.122 2.929-1.171v-4.054l-2.927-1.17.45-3.123-3.511-2.027-2.48 1.951-2.479-1.95z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSettingOutlinesharp;
