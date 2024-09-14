import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitchBroken = ({
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
      d="M20.905 6.657V3.89a.89.89 0 0 0-.89-.891H7.262c-.256 0-.5.11-.67.303l-1.775 2.02a.9.9 0 0 0-.222.588v10.897c0 .492.4.89.891.89h2.6c.492 0 .891.4.891.892V21h.43l2.68-3.029a.9.9 0 0 1 .641-.272h4.35a.9.9 0 0 0 .674-.308l2.936-3.385a.9.9 0 0 0 .217-.584V11.04M11.91 7.72v4.294M15.898 7.72v4.294"
    />
  </Svg>
);
export default IconlystTwitchBroken;
