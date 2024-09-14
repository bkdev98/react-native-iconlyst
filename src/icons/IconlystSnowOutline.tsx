import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSnowOutline = ({
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
      d="M9.97 3.671a.75.75 0 0 1 1.061 0l1.605 1.605 1.584-1.584a.75.75 0 0 1 1.06 1.06l-2.114 2.115a.75.75 0 0 1-1.06 0L9.97 4.732a.75.75 0 0 1 0-1.06M12.105 17.134a.75.75 0 0 1 1.061 0l2.114 2.114a.75.75 0 0 1-1.06 1.06l-1.584-1.583-1.605 1.604a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.624 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M20.953 9.345a.75.75 0 0 1 0 1.06L19.35 12.01l1.584 1.584a.75.75 0 0 1-1.06 1.06l-2.115-2.113a.75.75 0 0 1 0-1.061l2.134-2.135a.75.75 0 0 1 1.061 0M7.491 11.48a.75.75 0 0 1 0 1.06l-2.114 2.115a.75.75 0 1 1-1.06-1.06L5.9 12.01l-1.604-1.604a.75.75 0 1 1 1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.375 11.999a.75.75 0 0 1-.75.75h-18a.75.75 0 0 1 0-1.5h18a.75.75 0 0 1 .75.75M17.762 6.863a.75.75 0 0 0 1.06 0l.008-.007a.75.75 0 1 0-1.06-1.06l-.008.006a.75.75 0 0 0 0 1.06M17.762 18.19a.75.75 0 0 0 1.06 0l.008-.007a.75.75 0 1 0-1.06-1.06l-.008.007a.75.75 0 0 0 0 1.06M6.42 6.863a.75.75 0 0 0 1.061 0l.007-.007a.75.75 0 0 0-1.06-1.06l-.008.006a.75.75 0 0 0 0 1.06M6.42 18.19a.75.75 0 0 0 1.061 0l.007-.007a.75.75 0 1 0-1.06-1.06l-.008.007a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.468 7.842a.75.75 0 0 1 1.06 0l3.096 3.096 3.097-3.096a.75.75 0 0 1 1.06 1.06L13.686 12l3.097 3.097a.75.75 0 0 1-1.06 1.06l-3.097-3.097-3.098 3.098a.75.75 0 1 1-1.06-1.061l3.097-3.097-3.096-3.097a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSnowOutline;
