import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystZoomCircleOutline = ({
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
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.703 8.857a.75.75 0 0 1 .384.655v5.305a.75.75 0 0 1-1.142.64l-2.937-1.8a.75.75 0 0 1 .785-1.28l1.794 1.1v-2.626l-1.794 1.1a.75.75 0 1 1-.784-1.279l2.936-1.8a.75.75 0 0 1 .758-.015"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.64 9.757c0-.785.637-1.421 1.422-1.421h4.347a2.74 2.74 0 0 1 2.742 2.742v3.495c0 .784-.636 1.42-1.421 1.42H9.381a2.74 2.74 0 0 1-2.741-2.74zm1.5.079v3.416c0 .686.556 1.242 1.242 1.242h4.269v-3.416c0-.686-.556-1.242-1.242-1.242z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystZoomCircleOutline;
