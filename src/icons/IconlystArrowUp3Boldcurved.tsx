import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUp3Boldcurved = ({
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
      fillRule="evenodd"
      d="M17.285 8.928c-.651-1.569-3.397-6.105-5.042-6.105-1.695 0-4.432 4.738-5.03 6.177-.324.782-.584 1.653-.051 2.188.535.537 2.347.721 4.092.77v8.219a1 1 0 1 0 2 0v-8.211c2.237-.053 3.607-.313 4.07-.777.564-.566.274-1.505-.04-2.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowUp3Boldcurved;
