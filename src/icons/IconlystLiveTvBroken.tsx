import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLiveTvBroken = ({
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
      d="M12.085 20.796h4.97a4.03 4.03 0 0 0 4.029-4.03V11.31a4.03 4.03 0 0 0-4.028-4.029H7.113a4.03 4.03 0 0 0-4.029 4.03v5.456a4.03 4.03 0 0 0 4.03 4.029h1.485"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.723 11.574c-.747-.315-1.51.045-1.622.892a16 16 0 0 0 0 3.427c.102.815.795 1.222 1.622.896a8.8 8.8 0 0 0 2.563-1.608c.653-.6.637-1.42 0-2M16.637 3.207l-4.553 4.075-4.438-4.075"
    />
  </Svg>
);
export default IconlystLiveTvBroken;
