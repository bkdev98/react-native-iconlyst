import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChemistryFlaskBold = ({
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
      d="m20.796 15.706-1.351-1.95c-.051.004-.1.018-.153.01-1.721-.185-3.768.173-6.077 1.08-2.126.84-4.049 1.26-5.756 1.26-1.463 0-2.762-.318-3.898-.936l-.357.515a3.64 3.64 0 0 0-.237 3.82 3.63 3.63 0 0 0 3.266 1.975l11.521.02a3.69 3.69 0 0 0 3.281-1.984 3.63 3.63 0 0 0-.239-3.81"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.665 13.451c2.09-.821 4.004-1.229 5.716-1.227l-.805-1.157-.578-.831a1.8 1.8 0 0 1-.319-1.026V3.849c0-.744-.606-1.349-1.35-1.349H8.646a1.35 1.35 0 0 0-1.35 1.349V9.21c0 .367-.11.722-.316 1.024l-2.556 3.689c2.022 1.018 4.856.866 8.24-.472"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChemistryFlaskBold;
