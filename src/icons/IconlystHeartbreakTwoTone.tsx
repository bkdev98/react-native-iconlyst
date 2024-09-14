import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartbreakTwoTone = ({
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
      d="M13.613 6.42c-.461-.948-1.151-1.798-2.072-2.33-1.249-.721-2.829-.78-4.185-.346-3.333 1.074-4.52 4.702-3.504 7.878 1.637 5.088 8.649 8.906 8.649 8.906s7.066-3.877 8.648-8.906c1.017-3.176-.18-6.804-3.513-7.878a5.7 5.7 0 0 0-2.755-.169"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.172 16.455 1.945-2.897-2.593-2.77 2.593-2.955c.035-.045-.346-1.09-.504-1.414"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeartbreakTwoTone;
