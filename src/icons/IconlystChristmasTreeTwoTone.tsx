import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasTreeTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.363 17.686c1.406-1.512 2.604-3.287 3.604-5.318H6.383c2.14-2.506 3.978-5.486 5.618-8.753 1.638 3.267 3.478 6.247 5.616 8.753h-2.584c1 2.03 2.2 3.806 3.604 5.318z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.42 9.502c-2.285.17-3.719-.139-5.906-1.41M15.523 13.328c-3.209.238-5.222-.196-8.294-1.981M7.438 15.093c3.065 1.781 5.302 2.507 8.09 2.593M12.002 17.718v3.897"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChristmasTreeTwoTone;
