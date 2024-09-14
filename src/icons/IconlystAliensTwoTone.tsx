import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAliensTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.11 10.975c2.85 0 5.162-.657 5.162-1.87 0-1.273-.543-2.51-1.51-3.41-.965-.9-2.276-1.405-3.642-1.405s-2.676.505-3.643 1.405-1.519 2.137-1.519 3.41c0 1.213 2.3 1.87 5.152 1.87M13.816 13.667a21 21 0 0 1-3.403 0"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M17.036 7.628c2.747.843 4.578 2.362 4.578 4.1 0 2.653-4.256 4.792-9.5 4.792s-9.5-2.14-9.5-4.793c0-1.735 1.835-3.261 4.586-4.106M15.7 16.242l1.572 3.637M8.53 16.242 6.958 19.88" />
    </G>
  </Svg>
);
export default IconlystAliensTwoTone;
