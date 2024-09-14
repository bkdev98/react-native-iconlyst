import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrosoftVisualStudioLight = ({
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
      d="M16.486 4.548a1 1 0 0 1 1.182-.216l2.775 1.388a1 1 0 0 1 .553.894v10.764a1 1 0 0 1-.553.895l-2.775 1.387a1 1 0 0 1-1.182-.216L5.506 7.548a1 1 0 0 0-1.182-.216l-.775.388a1 1 0 0 0-.553.894v6.805a1 1 0 0 0 .574.904l.762.36a1 1 0 0 0 1.162-.226z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMicrosoftVisualStudioLight;
