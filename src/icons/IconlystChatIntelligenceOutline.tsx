import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatIntelligenceOutline = ({
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
      d="M15.445 5.25a.798.798 0 1 1 0 1.596.798.798 0 0 1 0-1.596m2.298.798a2.298 2.298 0 1 0-4.597 0 2.298 2.298 0 0 0 4.597 0M4.608 17.12a.798.798 0 1 1 0 1.595.798.798 0 0 1 0-1.596m2.298.797a2.298 2.298 0 1 0-4.597 0 2.298 2.298 0 0 0 4.597 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.672 6.799h7.225v-1.5H6.672a2.814 2.814 0 0 0-2.814 2.814v8.257h1.5V8.113c0-.726.588-1.314 1.314-1.314"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.81 12.59a2.72 2.72 0 0 0-2.718-2.717H11.22a2.72 2.72 0 0 0-2.718 2.718v4.34a2.72 2.72 0 0 0 2.718 2.717h6.288c.066 0 .131.02.186.057l1.922 1.3c.934.63 2.194-.039 2.194-1.166m0 0v-7.248m-2.718-1.218c.672 0 1.218.545 1.218 1.218v7.071l-1.776-1.2a1.83 1.83 0 0 0-1.026-.314H11.22a1.22 1.22 0 0 1-1.218-1.218v-4.34c0-.672.545-1.217 1.218-1.217z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatIntelligenceOutline;
