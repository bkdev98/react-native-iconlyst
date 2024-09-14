import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownLeftCircleBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.624 8.475a.29.29 0 0 0-.466-.07l-.407.406c-.124.124-.114.327.004.456a2.5 2.5 0 0 1-1.849 4.183H13.05a2.5 2.5 0 0 1-2.472-2.47V7.12a2.5 2.5 0 0 1 4.181-1.85c.13.119.333.129.457.004l.322-.322a.29.29 0 0 0-.08-.47A8.4 8.4 0 0 0 12 3.737c-4.694 0-8.512 3.82-8.512 8.512S7.307 20.761 12 20.761c4.693 0 8.51-3.818 8.51-8.51 0-1.356-.32-2.638-.887-3.776"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.827 7.12a.75.75 0 0 0-1.5 0v3.846a.7.7 0 0 0 .056.268l.001.002a.7.7 0 0 0 .155.236l.001.002c.01.003.002 0 .002 0q.005.007.01.01 0 0 .002.003h.001l.001.003a.76.76 0 0 0 .505.21h3.845a.75.75 0 0 0 0-1.5h-2.018l5.172-5.174A.749.749 0 1 0 19 3.966l-5.173 5.173z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownLeftCircleBold;
