import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiSquareAlertTwoTone = ({
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
      d="M12.497 3.693h-4.93C4.747 3.693 3 5.69 3 8.508v7.565c0 2.82 1.714 4.807 4.567 4.807h8.05c2.819 0 4.567-1.988 4.567-4.807v-4.715"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.645 3.12a2.356 2.356 0 1 1 0 4.712 2.356 2.356 0 0 1 0-4.712"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.371 14.519-.1-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.1.273-.102A3.76 3.76 0 0 0 9.27 9.593l.101-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225zM14.682 15.76a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.177 1.178 1.77 1.77 0 0 0-1.177 1.179"
    />
  </Svg>
);
export default IconlystAiSquareAlertTwoTone;
