import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettlebell1Outline = ({
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
      d="M6.58 8.668a7.663 7.663 0 1 1 10.838 10.838A7.663 7.663 0 0 1 6.58 8.668m9.777 1.061a6.163 6.163 0 1 0-8.716 8.716 6.163 6.163 0 0 0 8.716-8.716"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.776 14.668a.75.75 0 0 1 .447.962 4.5 4.5 0 0 1-2.93 2.763.75.75 0 1 1-.43-1.437 3 3 0 0 0 1.951-1.84.75.75 0 0 1 .962-.448M9.516 4.265c1.52-.684 3.454-.688 4.967-.001l.04.017c.491.19.765.45.925.716.165.275.242.61.242.987 0 .78-.328 1.568-.53 1.878a.75.75 0 1 0 1.256.82c.335-.514.773-1.583.773-2.698 0-.572-.115-1.194-.456-1.761-.345-.572-.887-1.035-1.649-1.333-1.9-.857-4.267-.85-6.166-.001-.762.299-1.305.762-1.65 1.334-.34.567-.456 1.19-.456 1.76 0 1.116.438 2.185.773 2.698a.75.75 0 0 0 1.257-.819c-.203-.31-.53-1.099-.53-1.878 0-.377.076-.712.242-.987.16-.266.433-.527.924-.716z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKettlebell1Outline;
