import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingToolCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.254 12.5a9.004 9.004 0 1 1-18.008 0 9.004 9.004 0 0 1 18.008 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.066 19.804 3.504-3.503a4.575 4.575 0 0 0 6.1-6.1l-2.478 2.478a.35.35 0 0 1-.322.094l-1.47-.324a.35.35 0 0 1-.265-.266l-.324-1.47a.35.35 0 0 1 .094-.322l2.477-2.477a4.574 4.574 0 0 0-6.099 6.1L4.78 17.517"
    />
  </Svg>
);
export default IconlystSettingToolCircleLight;
