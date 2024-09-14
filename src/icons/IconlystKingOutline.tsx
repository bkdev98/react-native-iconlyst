import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingOutline = ({
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
      d="M17.451 16.44h-10.4a3.46 3.46 0 0 1-3.41-2.949c-.31-2.143-.868-5.954-1.122-7.4A1.34 1.34 0 0 1 4.682 4.82l3.347 2.713 3.222-3.62a1.385 1.385 0 0 1 2 0l3.218 3.618 3.347-2.713a1.34 1.34 0 0 1 2.165 1.272c-.254 1.445-.813 5.258-1.123 7.4a3.46 3.46 0 0 1-3.407 2.951M4.071 6.251c.28 1.683.773 5.056 1.057 7.025a1.956 1.956 0 0 0 1.926 1.664h10.397a1.956 1.956 0 0 0 1.926-1.665c.284-1.97.778-5.345 1.058-7.025l-3.576 2.9a.75.75 0 0 1-1.029-.083c-.179-.2-2.488-2.8-3.576-4.02L8.68 9.067a.75.75 0 0 1-1.03.085zM18.915 20.516H5.585a.75.75 0 1 1 0-1.5h13.33a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystKingOutline;
