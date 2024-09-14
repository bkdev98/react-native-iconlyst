import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWheelBagBroken = ({
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
      d="M19.499 11.252c0-2.286-1.304-3.719-3.594-3.719H9.099c-2.29 0-3.598 1.427-3.598 3.719v4.683c0 2.293 1.308 3.72 3.598 3.72h6.806c2.29 0 3.594-1.427 3.594-3.72v-1.552M9.102 16.25v-5.177M12.502 16.25v-5.177M15.908 16.25v-5.177M15.906 19.655V21M9.1 19.655V21M15.535 7.533V4.631c0-.901-.73-1.631-1.63-1.631h-2.808c-.9 0-1.63.73-1.63 1.63v2.903"
    />
  </Svg>
);
export default IconlystWheelBagBroken;
