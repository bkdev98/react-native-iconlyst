import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudLoveTwoTone = ({
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
      d="M19.064 16.743a4.14 4.14 0 0 0 2.436-3.774c0-2.596-1.83-4.14-4.103-4.14 0-1.633-1.28-4.9-4.897-4.9s-4.897 3.267-4.897 4.9c-2.27.02-4.103 1.544-4.103 4.14 0 1.679 1 3.125 2.436 3.774"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.458 17.026c-.347-1.086.059-2.325 1.198-2.692.6-.19 1.254-.08 1.757.297a1.96 1.96 0 0 1 1.755-.297c1.139.367 1.549 1.606 1.201 2.692-.54 1.718-2.956 3.044-2.956 3.044s-2.395-1.305-2.955-3.044"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudLoveTwoTone;
