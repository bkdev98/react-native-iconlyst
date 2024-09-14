import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBlanketLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.267 9.158A2.267 2.267 0 0 0 3 11.426v1.147a2.267 2.267 0 0 0 2.267 2.268h13.465A2.27 2.27 0 0 0 21 12.573v-1.147a2.27 2.27 0 0 0-2.268-2.268H16.46c-.627 0-1.221.282-1.619.768l-1.767 2.163a1.094 1.094 0 0 1-1.693 0L9.614 9.926a2.09 2.09 0 0 0-1.619-.768z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.732 3.476H5.267A2.267 2.267 0 0 0 3 5.744V6.89a2.27 2.27 0 0 0 2.267 2.268h13.465A2.27 2.27 0 0 0 21 6.89V5.744a2.27 2.27 0 0 0-2.268-2.268M18.732 20.524H5.267A2.267 2.267 0 0 1 3 18.256V17.11a2.27 2.27 0 0 1 2.267-2.268h13.465A2.27 2.27 0 0 1 21 17.11v1.147a2.27 2.27 0 0 1-2.268 2.268"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBlanketLight;
