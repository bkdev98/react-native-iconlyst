import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpaceIncreaseOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.465 13.64a.75.75 0 0 1 .75.75v2.922l1.4-1.365a.75.75 0 0 1 1.047 1.075l-2.674 2.604a.75.75 0 0 1-1.047 0L9.27 17.022a.75.75 0 0 1 1.047-1.074l1.399 1.363v-2.92a.75.75 0 0 1 .75-.75M11.941 5.904a.75.75 0 0 1 1.047 0l2.674 2.605a.75.75 0 0 1-1.047 1.074l-1.4-1.364v2.778a.75.75 0 1 1-1.5 0V8.22l-1.399 1.363A.75.75 0 1 1 9.27 8.51zM6.065 21.766a.75.75 0 0 1 .75-.75h11.369a.75.75 0 1 1 0 1.5H6.815a.75.75 0 0 1-.75-.75M6.065 3.766a.75.75 0 0 1 .75-.75h11.369a.75.75 0 1 1 0 1.5H6.815a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpaceIncreaseOutline;
