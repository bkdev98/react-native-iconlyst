import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyOutlinesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 26"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path fill={props.color} d="M13.83 12.21h4.169v-1.496h-4.17z" />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.202 3.794c-.013.032-.017.374-.01.759l.012.7 2.514.025.022.1c.011.057.298 2.886.637 6.288s.625 6.211.635 6.242c.028.084 14.79.084 14.819 0 .01-.03.337-2.483.725-5.45.388-2.965.717-5.448.73-5.516l.025-.125H6.405l-.027-.215a101 101 0 0 1-.141-1.394 56 56 0 0 0-.138-1.325l-.024-.148H4.15c-1.532 0-1.93.012-1.948.059M20.558 8.55c-.016.131-.258 1.961-.536 4.067l-.505 3.83-6.063.011c-4.828.01-6.067 0-6.082-.045-.01-.031-.194-1.81-.407-3.954a488 488 0 0 0-.409-4.022l-.021-.125h14.054z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.52 19.839a1.275 1.275 0 0 0-.562 2.129q.29.29.68.346a1.3 1.3 0 0 0 .585-.033q.243-.066.427-.223a1.27 1.27 0 0 0-1.13-2.219M18.725 19.795c.252 0 .487.074.685.2a.9.9 0 0 1 .296.264 1.28 1.28 0 0 1 .288.805q-.001.243-.084.457a1 1 0 0 1-.169.304c-.218.291-.559.486-.946.507a1.25 1.25 0 0 1-1.072-.486 1.18 1.18 0 0 1-.268-.788c0-.436.212-.817.56-1.047.203-.136.447-.216.71-.216"
    />
  </Svg>
);
export default IconlystBuyOutlinesharp;
