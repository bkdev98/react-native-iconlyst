import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBagLike1Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.867 5.776c0-.811.659-1.471 1.47-1.471h2.28c.81 0 1.47.66 1.47 1.47v.14h-5.22zm7.814.14h-1.094v-.14a2.974 2.974 0 0 0-2.97-2.971h-2.28a2.974 2.974 0 0 0-2.97 2.97v.14H7.27c-2.57 0-4.294 1.804-4.294 4.49v6.3c0 2.686 1.725 4.49 4.294 4.49H17.68c2.57 0 4.297-1.804 4.297-4.49v-6.3c0-2.686-1.727-4.49-4.296-4.49"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M11.455 11.729q-.151 0-.294.047a.9.9 0 0 0-.557.465c-.154.298-.176.692-.06 1.056.27.862 1.33 1.615 1.978 1.983.64-.364 1.688-1.113 1.975-1.985.116-.364.093-.758-.06-1.056a.9.9 0 0 0-.544-.46.96.96 0 0 0-.473-.035c-.115.02-.339.189-.446.27a.75.75 0 0 1-.9.002c-.119-.088-.338-.252-.452-.272a1 1 0 0 0-.167-.015m1.067 5.147a.75.75 0 0 1-.317-.071c-.257-.12-2.519-1.222-3.09-3.055-.238-.74-.182-1.542.156-2.197a2.4 2.4 0 0 1 1.425-1.203 2.43 2.43 0 0 1 1.191-.083c.237.043.45.137.635.242.191-.11.401-.2.634-.242a2.46 2.46 0 0 1 1.202.087c.61.193 1.114.62 1.412 1.197.337.655.394 1.458.154 2.204v.004c-.605 1.846-2.833 2.929-3.085 3.046a.75.75 0 0 1-.317.07M6.803 17.675a.75.75 0 0 1-.75-.75v-6.729a.75.75 0 1 1 1.5 0v6.73a.75.75 0 0 1-.75.75M18.151 17.675a.75.75 0 0 1-.75-.75v-6.729a.75.75 0 1 1 1.5 0v6.73a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartBagLike1Bold;
