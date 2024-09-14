import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiSquareSparkAddTwoTone = ({
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
      d="M12.89 3.502H7.593C4.77 3.502 3 5.501 3 8.33v7.633c0 2.828 1.761 4.828 4.593 4.828h8.099c2.832 0 4.595-2 4.595-4.828v-4.83"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.664 3.21v4.673M21 5.547h-4.672M8.938 13.67l-.1-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.1.273-.102a3.76 3.76 0 0 0 2.221-2.225l.101-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225zM15.152 15.53a1.77 1.77 0 0 0-1.177-1.18 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.179 1.77 1.77 0 0 0-1.176 1.178"
    />
  </Svg>
);
export default IconlystAiSquareSparkAddTwoTone;
