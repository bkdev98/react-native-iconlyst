import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClubPokerCardBulk = ({
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
      d="M15 2.5H9A4.505 4.505 0 0 0 4.5 7v10c0 2.481 2.019 4.5 4.5 4.5h6c2.481 0 4.5-2.019 4.5-4.5V7c0-2.482-2.019-4.5-4.5-4.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16 6.76a.75.75 0 0 0 .75-.75V6a.746.746 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.336.75.75.75m-2.355 8.265c1.002.035 1.882-.497 2.304-1.36a2.44 2.44 0 0 0 .08-1.96 2.44 2.44 0 0 0-1.651-1.485c.075-.497 0-1.015-.236-1.472a2.45 2.45 0 0 0-2.748-1.26 2.435 2.435 0 0 0-1.834 2.736q-.168.044-.33.113c-1.187.506-1.783 1.897-1.328 3.1a2.45 2.45 0 0 0 2.267 1.582l.128-.01c.349-.028.64-.05.927-.137.001.798.003 1.014.003 1.014a.75.75 0 0 0 .75.743h.006a.75.75 0 0 0 .744-.756v-.005c0-.033-.002-.27-.003-.988q.423.133.921.145M8 18.76a.75.75 0 0 0 .75-.75V18a.746.746 0 0 0-.75-.745.755.755 0 0 0-.75.755c0 .414.336.75.75.75m5.47-7.076a.97.97 0 0 1 .633.02c.238.094.43.29.527.542a.94.94 0 0 1-.027.756.98.98 0 0 1-.912.523c-.524-.012-.857-.162-1.115-.501l-.049-.06q-.03-.032-.063-.061l-.002-.001a.75.75 0 0 0-.471-.182h-.027a.75.75 0 0 0-.49.189l-.056.056h-.002a1 1 0 0 0-.07.092c-.262.38-.777.46-1.165.46h-.005a.955.955 0 0 1-.87-.61.96.96 0 0 1 .514-1.191c.194-.084.418-.091.687-.023a.75.75 0 0 0 .82-.325.75.75 0 0 0-.057-.881.97.97 0 0 1-.2-.895.95.95 0 0 1 .68-.647.95.95 0 0 1 1.056.486.95.95 0 0 1-.13 1.048.75.75 0 0 0 .793 1.205"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClubPokerCardBulk;
