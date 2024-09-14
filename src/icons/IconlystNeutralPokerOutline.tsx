import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNeutralPokerOutline = ({
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
      d="M12.25 21.75A9.75 9.75 0 1 1 22 12a9.76 9.76 0 0 1-9.75 9.75m0-18A8.25 8.25 0 1 0 20.5 12a8.26 8.26 0 0 0-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M8.975 13a.977.977 0 0 1-.374-1.875.97.97 0 0 1 1.062.211.975.975 0 0 1-.689 1.665zM15.475 13a.977.977 0 0 1-.374-1.875.97.97 0 0 1 1.062.211.975.975 0 0 1-.689 1.665zM14.022 17.738h-3.543a.75.75 0 1 1 0-1.5h3.543a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystNeutralPokerOutline;
