import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirdropBroken = ({
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
      d="M12.849 2a7.01 7.01 0 0 0-6.925 5.94c-.096.629.198 1.258.723 1.618l4.749 4.127M14.294 13.673l4.758-4.115c.524-.36.818-.99.722-1.618a7.01 7.01 0 0 0-3.882-5.246M12.85 13.161V9.007M19.496 9.007H9.322"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.444 21.99c1.505-.003 2.439-1.068 2.434-2.57l-.01-3.189c-.003-1.502-.941-2.562-2.446-2.559l-5.173.01c-1.5.004-2.439 1.068-2.435 2.572l.01 3.187c.003 1.503.942 2.563 2.447 2.559h2.013M11.695 16.688h2.303"
    />
  </Svg>
);
export default IconlystAirdropBroken;
